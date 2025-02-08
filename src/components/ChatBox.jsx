import { useEffect, useState } from "react";
import {useSubscribe , usePubish} from 'src/Hooks/PubNub'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';

function ChatBox({username}) {
  const appData = useSelector((state) => state.app);
	let publicId = appData.publicId;
  const [ subscription ,unSubscribe ] = useSubscribe(username)
  const [ publish ] = usePubish(username)
  const [message,setMessage] = useState("")
  const [chatMessages,setChatMessages] = useState([])
	useEffect(()=>{
		subscription.onMessage = (messageEvent) => {
			console.log("Message event: ", messageEvent);
      setChatMessages((prev)=>{
        return [...prev,messageEvent.message]
      })
      setMessage("")
      return () => {
        alert("unsubb")
        unSubscribe()
      }
		};
  },[])

  const location = useLocation();

  useEffect(() => {
    // alert("locc")
  }, [location]);

  const sendMessage = () => {
    if(message.length < 2) return alert("message length should be grater tahn 2")
    publish({
      publicId:publicId,
      message:message
    })
    console.log(chatMessages)
  }
	return (
    <div>
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {chatMessages.map((message)=>{
          if(message.publicId == publicId) {
            return <MyMessage message={message.message}/>
          }else {
            return <UserMessage message={message.message}/>
          }
        })}
        {/* <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">I have no issue with any other packages installed with root permission globally.</span></div>
            </div>
            user1:
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
            </div>
            You:
          </div>
        </div> */}
        
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input value={message} onChange={(e) =>{ setMessage(e.target.value)}}  type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
          <div className="absolute right-0 items-center inset-y-0  sm:flex">
            <button onClick={sendMessage} type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span className="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Link to="/">asd</Link>

    </div>
  </div>
	);
}

const UserMessage = ({message}) =>{ 
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message}</span></div>
        </div>
        user1:
      </div>
    </div>
  )
} 

const MyMessage = ({message}) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message}</span></div>
        </div>
        You:
      </div>
    </div>
  )
}

export default ChatBox;
