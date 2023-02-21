import { useSelector } from "react-redux"

import {addItem,removeItem} from '../reduxconfig/CartSlice'
import { useDispatch } from "react-redux"

export default function Home()
{
	var masterdata = useSelector(state=>state.masterdata.value)
	const dispatch = useDispatch()
	const carts = useSelector(state=>state.carts.value)

	var addCart = (pd)=>{
		dispatch(addItem(pd))
	}

    return <>
    <section id="slider">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div id="slider-carousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div className="carousel-inner">
							<div className="item active">
								<div className="col-sm-6">
									<h1><span>E</span>-SHOPPER</h1>
									<h2>Free E-Commerce Template</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<button type="button" className="btn btn-default get">Get it now</button>
									alt=""					</div>
								<div className="col-sm-6">
									<img src="images/home/girl1.jpg" className="girl img-responsive" alt="" />
									<img src="images/home/pricing.png"  className="pricing" alt="" />
								</div>
							</div>
							<div className="item">
								<div className="col-sm-6">
									<h1><span>E</span>-SHOPPER</h1>
									<h2>100% Responsive Design</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
									<img src="images/home/pricing.png"  className="pricing" alt="" />
								</div>
							</div>
							
							<div className="item">
								<div className="col-sm-6">
									<h1><span>E</span>-SHOPPER</h1>
									<h2>Free Ecommerce Template</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="images/home/girl3.jpg" className="girl img-responsive" alt="" />
									<img src="images/home/pricing.png" className="pricing" alt="" />
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
							<i className="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
							<i className="fa fa-angle-right"></i>
						</a>
					</div>
					
				</div>
			</div>
		</div>
	</section>

	<section>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<div className="left-sidebar">
						<h2>Category</h2>
						<div className="panel-group category-products" id="accordian" style={{height:'300px',overflow:'auto'}}>							
							<div className="panel panel-default">
								{masterdata.categories.map(cate=><div className="panel-heading">
									<h4 className="panel-title"><a href="#">{cate.cate_name}</a></h4>
								</div>)}
							</div>
						</div>
					
						<div className="brands_products" >
							<h2>Brands</h2>
							<div className="brands-name" style={{height:'300px',overflow:'auto'}}>
								<ul className="nav nav-pills nav-stacked">
									{masterdata.brands.map(bd=><li><a href="#">{bd.brand_name}</a></li>)}
								</ul>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-sm-9 padding-right">
					<div className="features_items">
						<h2 className="title text-center">Features Items</h2>
						
						{masterdata.products.map(pd=><div className="col-sm-4">
							<div className="product-image-wrapper">
								<div className="single-products">
									<div className="productinfo text-center">
										<img src={"data:image/png;base64,"+pd.prod_image} alt="" height={200}/>
										<h2>Rs. {pd.prod_price}</h2>
										<p>{pd.prod_name}</p>
										
										{carts.some(ob=>ob.product._id==pd._id)?<b onClick={()=>dispatch(removeItem(pd._id))} className="btn btn-danger add-to-cart"><i className="fa fa-shopping-cart"></i>Remove cart</b>:<b onClick={()=>addCart(pd)} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</b>}
									</div>
								</div>								
							</div>
						</div>)}						
					</div>
					
					
				</div>
			</div>
		</div>
	</section>
	
    </>
}