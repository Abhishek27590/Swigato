import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="nav-cont">
            <div className="nav-bar">
                <div className="logo-cont">
                    <img src="https://i.ibb.co/CPSv6d8/order-food.png" className="logo"/>
                    <h1 className="brand-name">Swigato</h1>
                </div>
                <div className="">
                    <ul className="nav-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;