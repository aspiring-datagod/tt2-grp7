import { useState } from "react"
import SignInForm from "../../components/sign-in-form-ant"
import SignUpForm from "../../components/sign-up-form-ant"

import landingImg from "../../assets/images/landing-img.jpeg"
import logo from "../../assets/images/dbs-logo.png"
import "./auth-page.css"

const AuthPage = () => {

    const [pageMode, setPageMode] = useState("sign-in")

    return (
        <div className="ap-page-wrapper">
            <div className="ap-form-section">
                <div className="ap-form-wrapper">
                    <img src={logo} style={{ height: 50, width: "auto" }} />
                    <h1 className="ap-header">Welcome to DBS Seed</h1>
                    <p className="ap-para">Please enter your login credentials to access your account, or sign up for a new account.</p>
                    <div className="ap-form-toggler">
                        <div onClick={() => { setPageMode("sign-in") }} className={`ap-form-option ${pageMode === "sign-in" && "active"}`}>
                            <span>Sign In</span>
                        </div>
                        <div onClick={() => { setPageMode("sign-up") }} className={`ap-form-option ${pageMode === "sign-up" && "active"}`}>
                            <span>Sign Up</span>
                        </div>
                    </div>

                    {/* Form Section Here */}
                    {pageMode === "sign-in" && <SignInForm />}
                    {pageMode === "sign-up" && <SignUpForm />}
                </div>
            </div>
            <div className="ap-advertisement-section">
                <img className="ap-img" srcSet={landingImg} />
                {/* <div className="ap-content">

                </div> */}
            </div>
        </div>
    )
}

export default AuthPage