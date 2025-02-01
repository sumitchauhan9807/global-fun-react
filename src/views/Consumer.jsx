import { useMutation } from "@apollo/client";
import { CREATE_CONSUMER_TRANSPORT ,GET_RTP_CAPABILITIES ,CONSUME_MEDIA ,CONNECT_CONSUMER_TRANSPORT ,UNPAUSE_CONSUMER } from "src/queries";
import { Device } from "mediasoup-client";
import { useRef } from "react";
import { useParams } from 'react-router-dom';
const device = new Device();
let localStream = null;
let consumerTransport = null;
let consumer = null;
let modelId = "5";


function Consumer() {
	let localVideoRef = useRef(null);
  let { id } = useParams();
  let clientId = id
  const [getRtpCap, { loading }] = useMutation(GET_RTP_CAPABILITIES);
  const [createConsumerTransport, { loadingCCT }] = useMutation(CREATE_CONSUMER_TRANSPORT);
  const [consumeMedia, { loadingCM }] = useMutation(CONSUME_MEDIA);
  const [connectConsumerTransport, { loadingCCT2 }] = useMutation(CONNECT_CONSUMER_TRANSPORT);
  const [unpauseConsumer, { loadingUP }] = useMutation(UNPAUSE_CONSUMER);

  const runTest = async () => {
    let { data } = await getRtpCap();
		let routerRtpCapabilities = JSON.parse(data.getRtpCapabilities);
		await device.load({ routerRtpCapabilities });
    await createConsumer()
    const [audioConsumer,videoConsumer] = await Promise.all([
      consume('audio'),
      consume('video')
  ])
    // let consumer = await consume('audio')
    // const {track} = videoConsumer
    const combinedStream = new MediaStream([audioConsumer?.track,videoConsumer?.track])
    localVideoRef.current.srcObject = combinedStream
    localVideoRef.current.play();
  }


  const consume = async (kind) => {
    let { data } = await consumeMedia({
			variables: {
				clientId: clientId,
				modelId: modelId,
        rtpCapabilities: JSON.stringify(device.rtpCapabilities),
        kind:kind
			},
		});

    let consumerParams = data.consumeMedia
    consumerParams.rtpParameters = JSON.parse(consumerParams.rtpParameters)
    consumer = await consumerTransport.consume(consumerParams)
    
    await unpauseConsumer({
			variables: {
        modelId: modelId,
				clientId: clientId,
			},
		});
    return consumer
  }

  const createConsumer = async () =>{ 
    let { data } = await createConsumerTransport({
			variables: {
				clientId: clientId,
        modelId: modelId
			},
		});
		let { id, iceParameters, iceCandidates, dtlsParameters } = data.createConsumerTransport;
		iceParameters = JSON.parse(iceParameters);
		iceCandidates = JSON.parse(iceCandidates);
		dtlsParameters = JSON.parse(dtlsParameters);

    const transport = device.createRecvTransport({
      id, iceParameters, iceCandidates,dtlsParameters
    })
    console.log(transport)
    consumerTransport = transport
    consumerTransport.on('connectionstatechange',state=>{
        console.log("....connection state change....")
        console.log(state)
    })
    consumerTransport.on('icegatheringstatechange',state=>{
        console.log("....ice gathering change....")
        console.log(state)
    })
    consumerTransport.on('connect',async({dtlsParameters},callback,errback)=>{
      console.log("Transport Consume connect event has fired!")
      // connect comes with local dtlsParameters. We need
      // to send these up to the server, so we can finish
      // the connection
      console.log(dtlsParameters)
      // const resp = await socket.emitWithAck('connect-consumer-transport',{dtlsParameters})
      let { data } = await connectConsumerTransport({
        variables: {
          modelId: modelId,
          clientId: clientId,
          dtlsParameters: JSON.stringify(dtlsParameters)
        },
      });
      callback()
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
    })
  }

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
				{/* <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={publish}>
					publish
				</button> */}
			</div>
		</>
  )
}

export default Consumer