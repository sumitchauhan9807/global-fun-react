import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {LOGIN} from 'src/queries'
import Header from "src/components/common/Header";
import Footer from "src/components/common/Footer";
import { Link, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setUserData} from 'src/redux/user'
import { useQuery ,useMutation } from '@apollo/client';
import Loader from 'src/components/common/Loader'

const schema = z.object({
  usernameOrEmail: z.string().min(4, { message: "Username must have at least 4 characters" }),
  password: z.string().min(8, { message: "Password must have at least 8 characters" }),
});


function Login() {
  const dispatch = useDispatch()
  const [loginUser, { loading }] = useMutation(LOGIN);

  const userData = useSelector((state) => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (userData.token) {
			navigate("/");
		}
	}, [userData]);

  const {
    register,
    handleSubmit,
		setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  

  const onSubmit = async (formData) => {
    try {
			let {data} = await loginUser({
				variables:{
					data:{
						usernameOrEmail:formData.usernameOrEmail,
					  password:formData.password,
					}
				}
			})
			dispatch(setUserData(data.login))
		}catch(e) {
			setError("root", {
        message: e.message,
      });
			console.log(e)
		}
	}
   
	return (
		<>
    {loading && <Loader/>}
    <Header/>
	  <div className="flex flex-wrap min-h-screen w-full content-center justify-center  py-10" style={{color:'black'}}>
        {/* Login component */}
        <div className="flex shadow-md">
          {/* Login form */}
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width: '24rem', height: '32rem'}}>
            <div className="w-72">
              {/* Heading */}
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">Welcome back! Please enter your details</small>
              {/* Form */}
              <form  onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Email</label>
                  <input  {...register("usernameOrEmail")} type="text" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.usernameOrEmail && <p className="text-red-500 text-xs italic mt-2">{errors.usernameOrEmail.message}</p>}
                </div>
                <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Password</label>
                  <input {...register("password")} type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password.message}</p>}
                </div>
                
                <div className="mb-3">
                  <button type="submit" className="mb-1.5 block w-full text-center text-white bg-zinc-700 hover:bg-zinc-900 px-2 py-1.5 rounded-md">Sign in</button>
                  {/* <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                    Sign in with Google
                  </button> */}
                </div>
                {errors.root && (
										<center>
											<div className="text-red-500 mt-4">{errors.root.message}</div>
										</center>
									)}
              </form>
              {/* Footer */}
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">Don't have account?</span> &nbsp;
                <Link to="/register" className="text-xs font-semibold text-zinc-700">Sign up</Link>
              </div>
            </div>
          </div>
          {/* Login banner */}
          <div className="flex flex-wrap content-center justify-center rounded-r-md hidden " style={{width: '54rem', height: '32rem'}}>
            <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://www.hdwallpapers.in/download/girl_model_face_in_black_background_hd_girls-1920x1080.jpg" />
          </div>
        </div>
      </div>
      <Footer/>
		</>
	);
}



export default Login;
