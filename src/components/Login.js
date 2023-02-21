import { useReducer, useRef, useState } from "react"

import webService from '../services/WebService'
import webUrls from '../services/WebUrls'

import { changeData } from "../reduxconfig/UserSlice"
import { useDispatch } from "react-redux"

export default function Login()
{
	const dispatch = useDispatch()
	const [regMsg,setRegMsg] = useState("")
	const [loginMsg,setLoginMsg] = useState("")

	var nameBox = useRef()
	var phoneBox = useRef()
	var mailBox = useRef()
	var passBox = useRef()

	var loginMailBox = useRef()
	var loginPassBox = useRef()

	var register = async (event)=>
	{
		event.preventDefault()
		var ob = {
			name : nameBox.current.value,
			phone : phoneBox.current.value,
			email : mailBox.current.value,
			password : passBox.current.value
		}
		var regResponse = await webService.postApiCall(webUrls.USER_REGISTER,ob)
		setRegMsg(regResponse.data.msg)
	}

	var login = async (event)=>
	{
		event.preventDefault()
		var ob = {
			email : loginMailBox.current.value,
			password : loginPassBox.current.value
		}
		var loginResponse = await webService.postApiCall(webUrls.USER_LOGIN,ob)
		setLoginMsg(loginResponse.data.msg)
		if(loginResponse.data.status){
			dispatch(changeData({ name : loginResponse.data.username , 
				token : loginResponse.data.token , 
				islogin:true }))
		}
	}


	return <>
    
	<section id="form" style={{marginTop:'-0px'}}>
		<div className="container">
			<div className="text-center">
			<img src="images/home/logo.png" alt="" />
			</div>
			<hr/>
			<div className="row">
				<div className="col-sm-4 col-sm-offset-1">
					<div className="login-form">
						<h2>Login to your account</h2>
						<form onSubmit={login}>
							<input type="email" ref={loginMailBox} placeholder="Email" required/>
							<input type="password" ref={loginPassBox} placeholder="Password" required/>
							
							<button type="submit" className="btn btn-default">Login</button>
							&nbsp;
							<b className="text-danger">{loginMsg}</b>
						</form>
					</div>
				</div>
				<div className="col-sm-1">
					<h2 className="or">OR</h2>
				</div>
				<div className="col-sm-4">
					<div className="signup-form">
						<h2>New User Signup!</h2>
						<form onSubmit={register}>
							<input type="text" ref={nameBox} placeholder="Name" required/>
							<input type="text" ref={phoneBox} placeholder="Phone" required/>
							<input type="email" ref={mailBox} placeholder="Email Address" required/>
							<input type="password" ref={passBox} placeholder="Password" required/>
							<button type="submit" className="btn btn-default">Signup</button>
							&nbsp;
							<b className="text-danger">{regMsg}</b>
						</form>
				</div>
				</div>
			</div>
		</div>
	</section>
    </>
}