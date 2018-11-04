import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from "./Portfolio";
import Resume from './Resume';
import About from './About';
import Contact from './Contact';


// import MyNavBar from './MyNavbar';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Brand from '../assets/brand.png';


// import NaYoung from './NaYoung';




class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showThisTab: 'home'
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
    }

    onClick = (e) => {
        this.setState({showThisTab: e.target.name});
    };



    render() {
        return (
            <React.Fragment>
                <div className="root-div container-fluid">

                    <Navbar className="my-navbar">

                        <NavbarBrand href="#" className="mr-auto ml-auto">
                            <img id="home" name="home" className="navbar-brand" src={Brand} alt="" onClick={this.onClick} />
                        </NavbarBrand>

                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink id="testimonials" name="home" onClick={this.onClick} href="3">Testimonials</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="portfolio" name="portfolio" onClick={this.onClick} href="#">Portfolio</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="resume" name="resume" onClick={this.onClick} href="#">Resume</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="about" name="about" onClick={this.onClick} href="#">About J.Ahn</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink id="contact" name="contact" onClick={this.onClick} href="#">Contact</NavLink>
                            </NavItem>

                        </Nav>

                    </Navbar>


                    {this.state.showThisTab === 'home' && <Home />}
                    {this.state.showThisTab === 'portfolio' && <Portfolio />}
                    {this.state.showThisTab === 'resume' && <Resume />}
                    {this.state.showThisTab === 'about' && <About />}
                    {this.state.showThisTab === 'contact' && <Contact />}


                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
