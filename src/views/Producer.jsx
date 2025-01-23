import { useMutation } from "@apollo/client";
import { GET_RTP_CAPABILITIES, CREATE_PRODUCER_TRANSPORT, CONNECT_PRODUCER_TRANSPORT, START_PRODUCING } from "src/queries";
import { Device } from "mediasoup-client";
import { useRef } from "react";

const device = new Device();
let localStream = null;
let producerTransport = null;
let producer = null;
let audioProducer = null
let modelId = "5";

function Producer() {
	let localVideoRef = useRef(null);
	const [getRtpCap, { loading }] = useMutation(GET_RTP_CAPABILITIES);
	const [createProducerTransport, { loadingCPT }] = useMutation(CREATE_PRODUCER_TRANSPORT);
	const [connectProducerTransport, { loadingCNPT }] = useMutation(CONNECT_PRODUCER_TRANSPORT);
	const [startProducing, { loadingsp }] = useMutation(START_PRODUCING);

	const runTest = async () => {
		let { data } = await getRtpCap();
		let routerRtpCapabilities = JSON.parse(data.getRtpCapabilities);
		await device.load({ routerRtpCapabilities });

		createProducer();
		// console.log(routerRtpCapabilities)
		// console.log(device.loaded)
	};

	const createProducer = async () => {
		await setLocalStream();
		let { data } = await createProducerTransport({
			variables: {
				modelId: modelId,
			},
		});
		let { id, iceParameters, iceCandidates, dtlsParameters } = data.createProducerTransport;
		iceParameters = JSON.parse(iceParameters);
		iceCandidates = JSON.parse(iceCandidates);
		dtlsParameters = JSON.parse(dtlsParameters);

		const transport = device.createSendTransport({
			id,
			iceParameters,
			iceCandidates,
			dtlsParameters,
		});

		producerTransport = transport;
		producerTransport.on("connect", async ({ dtlsParameters }, callback, errback) => {
			console.log("Transport connect event has fired!");
			// connect comes with local dtlsParameters. We need
			// to send these up to the server, so we can finish
			// the connection
			console.log(dtlsParameters);
			console.log(transport);
			let { data } = await connectProducerTransport({
				variables: {
					dtlsParameters: JSON.stringify(dtlsParameters),
					transportId: transport.id,
				},
			});
			callback();
			// const resp = await socket.emitWithAck('connect-transport',{dtlsParameters})
			// if(resp === "success"){
			// 		//calling callback simply lets the app know, the server
			// 		// succeeded in connecting, so trigger the produce event
			// 		callback()
			// }else if(resp === "error"){
			// 		//calling errback simply lets the app know, the server
			// 		// failed in connecting, so HALT everything
			// 		errback()
			// }
			// console.log(resp)
		});
		producerTransport.on("produce", async (parameters, callback, errback) => {
			console.log("Transport produce event has fired!");
			console.log(parameters);
			const { kind, rtpParameters } = parameters;
			console.log(kind,"kindkindkindkindkind")
			let { data } = await startProducing({
				variables: {
					rtpParameters: JSON.stringify(rtpParameters),
					kind: kind,
					transportId: producerTransport.id,
				},
			});
			console.log(data.startProducing);
			callback(data.startProducing)
			// const resp = await socket.emitWithAck('start-producing',{ kind, rtpParameters })
			// if(resp === "error"){
			// 		//somethign went wrong when the server tried to produce
			// 		errback()
			// }else{
			// 		// resp contains an id!
			// 		callback({id:resp})
			// }
			// // console.log(resp)
		});
	};
	const publish = async () => {
		// console.log("Publish feed!")
		const videoTrack = localStream.getVideoTracks()[0];
		const audioTrack = localStream.getAudioTracks()[0];
		const videoProducer =  await producerTransport.produce({ track:videoTrack });
		console.log(videoProducer,"VIDEO PRODUCED")
		//  const audioProducer =  producerTransport.produce({track:audioTrack})
		console.log("AUDIO PRODUCED")

		// console.log(track,"track")
	};

	const setLocalStream = async () => {
		try {
			localStream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: { min: 1280 },
					height: { min: 720 },
					facingMode: { exact: "environment" },
				},
				audio: true,
			});
			localVideoRef.current.srcObject = localStream;
			localVideoRef.current.play();
		} catch (err) {
			console.log("GUM error", err);
		}
	};
	return (
		<>
			<div>
				<center>
					<video ref={localVideoRef} style={{ height: "400px" }} className=" mt-24" controls autoplay></video>
				</center>
			</div>
			<div className="flex justify-center items-center mt-24">
				<button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={runTest}>
					test
				</button>
				<button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={publish}>
					publish
				</button>
			</div>
		</>
	);
}

export default Producer;
