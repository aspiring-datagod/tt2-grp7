import "./home-page.css";
import ClaimsTable from "../../components/claims-table"
import ClaimsTestTable from "../../components/claims-table-test"
import EditViewDialog from "../../components/edit-popup";

const HomePage = () => {
    return <div className="hp-wrapper">
        <div className="hp-header-section">
            <h1 className="hp-header">Welcome to DBS</h1>
        </div>
        <div className="table">
            <ClaimsTestTable/>
            <EditViewDialog />
        </div>



    </div>
}

export default HomePage