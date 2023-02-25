import "./home-page.css";
import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import InsuranceClaimForm from "../../components/insurance-claim-form";


const HomePage = () => {
    const [isOpenFormDialog, setOpenFormDialog] = useState(false);

    function openDialog() {
        setOpenFormDialog(true);
    }

    function closeDialog() {
        setOpenFormDialog(false);
    }

    function submitInsuranceClaim(values) {
        console.log('-- submitInsuranceClaim', values);
        closeDialog();
    }

    function renderAddNewClaim() {
        return (
            <div>
                <Button variant="contained" onClick={openDialog}>Add New Claim</Button>
                <InsuranceClaimForm onSubmit={submitInsuranceClaim} open={isOpenFormDialog} onClose={closeDialog} initialValues={{name: "hhhh"}} />
            </div>
        );
        // return (
        //     <div>
        //         <Button variant="contained" onClick={openDialog}>Add New Claim</Button>
        //         <Dialog open={isOpenFormDialog} onClose={closeDialog} maxWidth="md">
        //             <DialogTitle>Add New Claim</DialogTitle>
        //             <DialogContent>
        //                 <InsuranceClaimForm onSubmit={submitInsuranceClaim} />
        //             </DialogContent>
        //             <DialogActions>
        //                 <Button onClick={closeDialog}>Submit</Button>
        //             </DialogActions>
        //         </Dialog>
        //     </div>
        // );
    }

    return <div className="hp-wrapper">
        <div className="hp-header-section">
            <h1 className="hp-header">Welcome to DBS</h1>
        </div>
        {renderAddNewClaim()}
    </div>
}

export default HomePage