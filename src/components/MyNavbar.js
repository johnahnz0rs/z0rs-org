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
            // backgroundColor: '#F36D76',
            backgroundColor: 'white',
            // marginBottom: '627px'
        };
        const navbarBrand = {
            width: '150px',
            height: 'auto'
        };

        const navLink = {
            /*marginLeft: 0.5em;*/
            marginRight: '1em'
        };


        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light container-fluid fixed-top" style={navbar}>
                    <a className="navbar-brand" href="#">
                        <img name="portfolio" className="navbar-brand" src={Brand} style={navbarBrand} alt="home" onClick={this.clickPage} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item" style={navLink}>
                                <a name="testimonial" className="nav-link" href="#" onClick={this.clickPage}>Testimonials</a>
                            </li>
                            <li className="nav-item" style={navLink}>
                                <a name="portfolio" className="nav-link" href="#" onClick={this.clickPage}>Portfolio</a>
                            </li>
                            <li className="nav-item" style={navLink}>
                                <a name="resume" className="nav-link" href="#" onClick={this.clickPage}>Resume</a>
                            </li>
                            <li className="nav-item" style={navLink}>
                                <a name="about" className="nav-link" href="#" onClick={this.clickPage}>About</a>
                            </li>
                            <li className="nav-item" style={navLink}>
                                <a name="contact" className="nav-link" href="#" onClick={this.clickPage}>Contact</a>
                            </li>

                        </ul>
                    </div>



                </nav>


            </React.Fragment>
        );

    }
 }

export default MyNavbar;