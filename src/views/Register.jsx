import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {REGISTER} from 'src/queries'
import Header from "src/components/common/Header";
import Footer from "src/components/common/Footer";
import { Link, useNavigate } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setUserData} from 'src/redux/user'
import { useQuery ,useMutation } from '@apollo/client';
import Loader from 'src/components/common/Loader'

const schema = z.object({
  name: z.string().min(4, { message: "Fullname must have at least 4 characters" }),
  email: z.string().email(),
  username: z.string().min(4, { message: "Username must have at least 4 characters" }),
  password: z.string().min(8, { message: "Password must have at least 8 characters" }),
  confirm_password: z.string().min(8, { message: "Password must have at least 8 characters" }),
});

function Register() {
  const dispatch = useDispatch()
	const captchaRef = useRef(null)
	const [captchValue,setCaptchaValue] = useState("")
	const [registerUser, { loading }] = useMutation(REGISTER);

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

  const captchaSuccess = (value) => {
		setCaptchaValue(value)
	}

  const onSubmit = async (formData) => {
    if(formData.password !== formData.confirm_password) return alert("Passwords dosn't match")
		captchaRef.current.reset();
		if(!captchValue) return alert("Please fill captcha")
		try {
			let {data} = await registerUser({
				variables:{
					data:{
						name:formData.name,
						email:formData.email,
						username:formData.username,
						password:formData.password,
						captcha:captchValue
					}
				}
			})
			dispatch(setUserData(data.register))
		}catch(e) {
			captchaRef.current.reset();
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
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width: '24rem', height: '50rem'}}>
            <div className="w-72">
              {/* Heading */}
              <h1 className="text-xl font-semibold">Global Fun</h1>
              <small className="text-gray-400">Start with the registration !!</small>
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Full Name</label>
                  <input {...register("name")} type="text" placeholder="Full Name" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name.message}</p>}
                </div>
              <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Username</label>
                  <input {...register("username")} type="text" placeholder="Username" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.username && <p className="text-red-500 text-xs italic mt-2">{errors.username.message}</p>}
                </div>
                <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Email</label>
                  <input {...register("email")} type="email" placeholder="Email" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Password</label>
                  <input {...register("password")} type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password.message}</p>}
                </div>
                <div className="mb-3">
                  <label style={{textAlign:'left'}} className="mb-2 block text-xs font-semibold">Confirm Password</label>
                  <input {...register("confirm_password")} type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 py-1 px-1.5 text-gray-500" />
                  {errors.confirm_password && <p className="text-red-500 text-xs italic mt-2">{errors.confirm_password.message}</p>}
                </div>
                <ReCAPTCHA
                    sitekey="6LdUh84qAAAAAOMonNfuDyd8uRGE3qDXdpxuL0V0"
										ref={captchaRef}
                    onChange={captchaSuccess}
										onExpired={() => alert('captcha expired')}
										onErrored={() => alert("captcha expired")}
                  />
                <div className="mb-3 mt-3">
                  <button type="submit" className="mb-1.5 block w-full text-center text-white bg-zinc-700 hover:bg-zinc-900 px-2 py-1.5 rounded-md">Register</button>
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
                <span className="text-xs text-gray-400 font-semibold">Already have an account?</span> &nbsp;
                <Link to="/login" className="text-xs font-semibold text-zinc-700">Login</Link>
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

export default Register;
