import React from 'react'


class NavBar extends React.Component {

        render() {
            return (
                <nav className="navbar">
                    <a className="navbar-brand" href="#">
                    <img src= {require("./male-reader.svg")} className="nav-avtar" width="30" height="30" />
                    
                     </a>
                </nav>
            )
        }
}
export default NavBar;