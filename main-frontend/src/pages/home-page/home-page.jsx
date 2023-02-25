import "./home-page.css";
import ClaimsTestTable from "../../components/claims-table-test"

const HomePage = () => {
    return <div className="hp-wrapper">
        <div className="hp-header-section">
            <h1 className="hp-header">Welcome to DBS</h1>
        </div>
        <div className="table">
            <ClaimsTestTable/>
        </div>



    </div>
}

export default HomePage