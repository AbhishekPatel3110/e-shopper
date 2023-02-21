import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { changeData } from "../reduxconfig/UserSlice"
import { useDispatch } from "react-redux"

export default function  Header()
{
	const cartLength = useSelector(state=>state.carts.value.length)
	const userData = useSelector(state=>state.user.value)
	const dispatch = useDispatch()
	var logout = ()=>{
		dispatch(changeData({ name : undefined , 
			token : undefined, 
			islogin:false }))
	}

    return <>
    <header id="header">		
		<div className="header-middle">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="logo pull-left">
							<Link to="/"><img src="images/home/logo.png" alt="" /></Link>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="shop-menu pull-right">
							<ul className="nav navbar-nav">
								<li><Link to="/"><span className="text-danger"><i className="fa fa-home"></i> Home</span></Link></li>
								<li><Link to="/cart"><span className="text-danger"><i className="fa fa-shopping-cart"></i> Cart ({cartLength}) </span></Link></li>
								{userData.islogin?<li> {userData.name} <br/> <span onClick={logout} className="text-danger" style={{cursor:'pointer'}}><i className="fa fa-lock"></i> Logout</span></li>:<li><Link to="/login"><span className="text-danger"><i className="fa fa-lock"></i> Login</span></Link></li>}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    </>
}