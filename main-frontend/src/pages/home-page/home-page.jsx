import "./home-page.css";

import ClaimsTestTable from "../../components/claims-table-test";

import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import InsuranceClaimForm from "../../components/insurance-claim-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [claims, setClaims] = useState([]);
  const navigate = useNavigate();

  function navigateToNew() {
    navigate("/new");
  }

  useEffect(() => {
    const employeeid = 58001001;
    axios
      .get(`http://localhost:4000/api/get-claims/${employeeid}`)
      .then((response) => {
        setClaims(response.data);
      });
    // console.log(claims);
  });

  function renderAddNewClaim() {
    return (
      <div>
        <Button variant="contained" onClick={navigateToNew}>
          Add New Claim
        </Button>
      </div>
    );
  }

  return (
    <div className="hp-wrapper">
      <div className="hp-header-section">
        <h1 className="hp-header">Welcome to DBS</h1>
      </div>
      {renderAddNewClaim()}
      <div></div>
    </div>
  );
};

export default HomePage;
