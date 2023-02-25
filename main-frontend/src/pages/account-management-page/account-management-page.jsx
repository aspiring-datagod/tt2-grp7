import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangeEmail from "../../components/change-email";
import ChangePassword from "../../components/change-password";
import "./account-management-page.css";


const AccountManagementPage = () => {

    const navigate = useNavigate()

    // Page States : "change-email" | "change-password"

    const [pageMode, setPageMode] = useState("change-email");

    return (
        <div className="amp-wrapper">
            <div className="amp-header-section">
                <h1 className="amp-header">Account management</h1>
            </div>


            {/* page content */}
            <div className="amp-content-section">
                <div className="amp-side-menu">
                    <ul className="amp-ul">
                        <li onClick={() => { setPageMode("change-email") }} className={`amp-menu-item  ${pageMode === "change-email" && "active"}`}>Change Email</li>
                        <li onClick={() => { setPageMode("change-password") }} className={`amp-menu-item  ${pageMode === "change-password" && "active"}`} >Change Password</li>
                        <li onClick={() => { navigate("/")}} style={{ color: "red" }} className={`amp-menu-item`} >Sign Out</li>
                    </ul>
                </div>
                <div className="amp-content">

                    {/* Component goes here */}
                    {pageMode === "change-email" && <ChangeEmail />}
                    {pageMode === "change-password" && <ChangePassword />}
                </div>
            </div>
            {/* side menu */}

        </div>
    )
}

export default AccountManagementPage