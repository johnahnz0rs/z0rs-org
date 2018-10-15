import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Brand from '../assets/brand.png';


const MyNavbar = props => {

    return (
        <React.Fragment>
            <div className="container-fluid">

                <Navbar color="green" light>

                    <NavbarBrand href='/z0rs-org/' className="mr-auto ml-auto">
                        <img className="navbar-brand" src={Brand} alt="" />
                    </NavbarBrand>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/z0rs-org/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/z0rs-org/resume">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/z0rs-org/about">About J.Ahn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/z0rs-org/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <div className="navbar-divider">&nbsp;</div>

            </div>
        </React.Fragment>
    );

};

export default MyNavbar;