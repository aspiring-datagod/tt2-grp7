
import "./navbar.css";
import dbsLogo from "../assets/images/dbs-logo-white.png"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();




    return (<div className="dbs-navbar">
        <div className="dbs-menu-item-wrapper">
            <img alt="dbs logo" srcSet={dbsLogo} className="logo" />
            <div onClick={() => { navigate("/home") }} className="dbs-navbar-items ">
                <span>Home</span>
            </div>

            <div onClick={() => { navigate("/extra-page") }} className="dbs-navbar-items ">
                <span>Extra Page</span>
            </div>
        </div>
        <div onClick={() => { navigate("/account-management") }} className="dbs-navbar-items ">
            <span>Account Management</span>
        </div>


    </div>)

}
export default NavBar