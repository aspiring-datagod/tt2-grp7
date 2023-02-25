import "./home-page.css";
import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import InsuranceClaimForm from "../../components/insurance-claim-form";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    function navigateToNew() {
        navigate("/new");
    }

    function renderAddNewClaim() {
        return (
            <div>
                <Button variant="contained" onClick={navigateToNew}>Add New Claim</Button>
            </div>
        );
    }

    return <div className="hp-wrapper">
        <div className="hp-header-section">
            <h1 className="hp-header">Welcome to DBS</h1>
        </div>
        {renderAddNewClaim()}
    </div>
}

export default HomePage