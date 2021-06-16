import { React } from 'react'
import Menu from './Menu'
const Base = ({
    title = "My Title",
    description = "My Description",
    className = "baseClass bg-light text-white",
    children
}) => {

    return (
        <div style={{ backgroundColor: "#559ee7" }}>
            <Menu />
            {/* <div className="container-fluid"> */}
            {/* <div className="jumbotron bg-secondary text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead bg-secondary">{description}</p>
                </div> */}
            <div className={className} >{children}</div>

            {/* </div> */}

        </div >
    )
}
export default Base;