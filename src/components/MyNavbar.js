import React from 'react';

import Brand from '../assets/brand.png';


class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
        this.clickPage = this.clickPage.bind(this);
    }

    componentDidMount() {

    }


    clickPage = (e) => {
        const page = e.target.name;
        this.props.clickPage(page);
    };




    render() {

        const navbar = {
            backgroundColor: 'white',
        };
        const navbarBrand = {
            width: '150px',
            height: 'auto'
        };


        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light container-fluid fixed-top" style={navbar}>
                    <a className="navbar-brand mx-auto" href="#">
                        <img name="portfolio" className="navbar-brand" src={Brand} style={navbarBrand} alt="home" onClick={this.clickPage} />
                    </a>

                    <ul className="navbar-nav ml-auto d-none d-md-flex">

                        <li className="nav-item mr-1">
                            <a name="testimonial" className="nav-link" href="#" onClick={this.clickPage}>Testimonials</a>
                        </li>
                        <li className="nav-item mr-1">
                            <a name="portfolio" className="nav-link" href="#" onClick={this.clickPage}>Portfolio</a>
                        </li>
                        <li className="nav-item mr-1">
                            <a name="resume" className="nav-link" href="#" onClick={this.clickPage}>Resumes</a>
                        </li>
                        <li className="nav-item mr-1">
                            <a name="contact" className="nav-link" href="#" onClick={this.clickPage}>Contact</a>
                        </li>

                    </ul>



                    {/*mobile*/}
                    <ul className="navbar-nav mx-auto d-flex d-md-none">

                        <li className="nav-item mr-3">
                            <a name="testimonial" className="nav-link" href="#" onClick={this.clickPage}>Testimonials</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a name="portfolio" className="nav-link" href="#" onClick={this.clickPage}>Portfolio</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a name="resume" className="nav-link" href="#" onClick={this.clickPage}>Resumes</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a name="contact" className="nav-link" href="#" onClick={this.clickPage}>Contact</a>
                        </li>

                    </ul>

                </nav>


            </React.Fragment>
        );

    }
 }

export default MyNavbar;