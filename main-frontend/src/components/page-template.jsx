import NavBar from "./navbar"


const PageTemplate = (props) => {
    const { component } = props

    return (
        <div className="page-wrapper">
            <NavBar />
            {component}
        </div>
    )

}

export default PageTemplate