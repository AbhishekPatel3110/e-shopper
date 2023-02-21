import { useSelector } from "react-redux"
import {incrementQty,decrementQty,removeItem} from '../reduxconfig/CartSlice'
import { useDispatch } from "react-redux"
export default function Cart()
{
	const carts = useSelector(state=>state.carts.value)
	const dispatch = useDispatch()
    return <>
    <section id="cart_items">
		<div className="container">
			<div className="breadcrumbs">
				<ol className="breadcrumb">
				  <li><a href="#">Home</a></li>
				  <li className="active">Shopping Cart</li>
				</ol>
			</div>
			<div className="table-responsive cart_info">
				<table className="table table-condensed">
					<thead>
						<tr className="cart_menu">
							<td className="image">Item</td>
							<td className="description"></td>
							<td className="price">Price</td>
							<td className="quantity">Quantity</td>
							<td className="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{carts.map(ob=><tr>
							<td className="cart_product">
								<a href=""><img src={"data:image/png;base64,"+ob.product.prod_image}  height={50} width={50}/></a>
							</td>
							<td className="cart_description">
								<h4>{ob.product.prod_name}</h4>
								
							</td>
							<td className="cart_price">
								<p>Rs. {ob.product.prod_price}</p>
							</td>
							<td>
								
							<b onClick={()=>dispatch(decrementQty(ob.product._id))} className="btn btn-success"> - </b>
								&nbsp;
									<input type="text" name="quantity"  value={ob.qty} autocomplete="off" size="2"/>
								&nbsp;
									<b onClick={()=>dispatch(incrementQty(ob.product._id))} className="btn btn-success"> + </b>
									
							</td>
							<td className="cart_total">
								<p className="cart_total_price">Rs. {ob.product.prod_price * ob.qty}</p>
							</td>
							<td className="cart_delete">
							<b onClick={()=>dispatch(removeItem(ob.product._id))} className="btn btn-danger"> Delete </b>
							</td>
						</tr>)}
						
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<section id="do_action">
		<div className="container">
			
			<div className="row">
				
				<div className="col-sm-6">
					<div className="total_area">
						<ul>
							<li>Cart Sub Total <span>Rs. {carts.reduce((x,ob)=>x+(ob.qty*ob.product.prod_price),0)}</span></li>							
						</ul>
							<a className="btn btn-default check_out" href="">Check Out</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
}