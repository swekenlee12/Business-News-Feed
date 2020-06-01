import React from 'react'


class NavBar extends React.Component {

        render() {
            return (
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                    <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                    Bootstrap
                     </a>
                </nav>
            )
        }
}
export default NavBar;