import LiveFeed from "src/components/ModelCam/LiveFeed";
import ChatBox from "src/components/ModelCam/ChatBox";
import { useMutation } from "@apollo/client";
import { CREATE_CONSUMER_TRANSPORT, GET_RTP_CAPABILITIES, CONSUME_MEDIA, CONNECT_CONSUMER_TRANSPORT, UNPAUSE_CONSUMER } from "src/queries";
import { Device } from "mediasoup-client";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import ChatBox from "src/components/ChatBox";
const device = new Device();
let localStream = null;
let consumerTransport = null;
let consumer = {
	video: null,
	audio: null,
};

function Index() {
	const appData = useSelector((state) => state.app);
	let publicId = appData.publicId;
	let localVideoRef = useRef(null);
	let { username } = useParams();
	let clientId = publicId;
	let modelId = username;
	const [getRtpCap, { loading }] = useMutation(GET_RTP_CAPABILITIES, { context: { apiName: "sfu" } });
	const [createConsumerTransport, { loadingCCT }] = useMutation(CREATE_CONSUMER_TRANSPORT, { context: { apiName: "sfu" } });
	const [consumeMedia, { loadingCM }] = useMutation(CONSUME_MEDIA, { context: { apiName: "sfu" } });
	const [connectConsumerTransport, { loadingCCT2 }] = useMutation(CONNECT_CONSUMER_TRANSPORT, { context: { apiName: "sfu" } });
	const [unpauseConsumer, { loadingUP }] = useMutation(UNPAUSE_CONSUMER, { context: { apiName: "sfu" } });
	const [playing, setIsplaying] = useState(false);

	const loadDevice = async () => {
		if (device.loaded) return;
		let { data } = await getRtpCap();
		let routerRtpCapabilities = JSON.parse(data.getRtpCapabilities);
		await device.load({ routerRtpCapabilities });
	};

	const handlePlayEvent = (data) => {
		console.log(data,"handlePlayEvent")
		// alert(data.status,"handle paly event")
	}

	useEffect(() => {
		(async()=>{
			let result = await play();
			handlePlayEvent(result)
			console.log(localVideoRef);
		})()
		return () => {
			consumerTransport?.close();
		};
	}, []);

	const play = async () => {
		try {
			localVideoRef.current.pause()
			await loadDevice();
			await createConsumer();
			const [audioConsumer, videoConsumer] = await Promise.all([consume("audio"), consume("video")]);
			// console.log(audioConsumer, "AUDIO CONSUMER");
			// console.log(videoConsumer, "VIDEO CONSUMER");
			const combinedStream = new MediaStream([audioConsumer?.track, videoConsumer?.track]);
			localVideoRef.current.srcObject = combinedStream;
			localVideoRef.current.play().then(()=>{

			}).catch((e)=>{
				console.log(e)
			})
			setIsplaying(true);
			return {
				status: true,
			};
		} catch (e) {
			return {
				status: false,
				error: e,
			};
		}
	};

	const consume = async (kind) => {
		let { data } = await consumeMedia({
			variables: {
				clientId: clientId,
				modelId: modelId,
				rtpCapabilities: JSON.stringify(device.rtpCapabilities),
				kind: kind,
			},
		});

		let consumerParams = data.consumeMedia;
		consumerParams.rtpParameters = JSON.parse(consumerParams.rtpParameters);
		let toReturnconsumer = await consumerTransport.consume(consumerParams);
		consumer[kind] = toReturnconsumer;
		await unpauseConsumer({
			variables: {
				modelId: modelId,
				clientId: clientId,
				kind: kind,
			},
		});
		return toReturnconsumer;
	};

	const createConsumer = async () => {
		try {
			let { data } = await createConsumerTransport({
				variables: {
					clientId: clientId,
					modelId: modelId,
				},
			});
			let { id, iceParameters, iceCandidates, dtlsParameters } = data.createConsumerTransport;
			iceParameters = JSON.parse(iceParameters);
			iceCandidates = JSON.parse(iceCandidates);
			dtlsParameters = JSON.parse(dtlsParameters);

			const transport = device.createRecvTransport({
				id,
				iceParameters,
				iceCandidates,
				dtlsParameters,
			});
			console.log(transport);
			consumerTransport = transport;
			setTransportHandlers()
			return 
		} catch (e) {
			throw Error(e)
		}
	};


	const setTransportHandlers = () => {
		consumerTransport.on("connectionstatechange", async (state) => {
			console.log(state, "....connection state change....");
			if (state == "disconnected") {
				let result = await play();
				handlePlayEvent(result)
			}
		});
		consumerTransport.on("icegatheringstatechange", (state) => {
			// console.log("....ice gathering change....");
			// console.log(state);
		});
		consumerTransport.on("connect", async ({ dtlsParameters }, callback, errback) => {
			console.log("Transport Consume connect event has fired!");
			// connect comes with local dtlsParameters. We need
			// to send these up to the server, so we can finish
			// the connection
			console.log(dtlsParameters);
			// const resp = await socket.emitWithAck('connect-consumer-transport',{dtlsParameters})
			let { data } = await connectConsumerTransport({
				variables: {
					modelId: modelId,
					clientId: clientId,
					dtlsParameters: JSON.stringify(dtlsParameters),
				},
			});
			callback();
			// if(resp === "success"){
			//     //calling callback simply lets the app know, the server
			//     // succeeded in connecting, so trigger the produce event
			//     callback()
			// }else if(resp === "error"){
			//     //calling errback simply lets the app know, the server
			//     // failed in connecting, so HALT everything
			//     errback()
			// }
			// console.log(resp)
		});
	}

	return (
		<div className="ViewCamWrapper#p6 ViewCamWrapper__vertical#AV view-cam-page-main widescreen-container">
			<LiveFeed videoRef={localVideoRef} playing={playing} />
			<ChatBox modelName={username} playing={playing} />
			{/* <button style={{height:"500px"}} onClick={()=>{ console.log(consumerTransport)}}>test</button> */}
		</div>
	);
}

export default Index;
