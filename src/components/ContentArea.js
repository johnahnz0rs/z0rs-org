import React from 'react';


import Testimonial from './Testimonial';
import Portfolio from './Portfolio';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
import MyNavbar from './MyNavbar';






class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showThisTab: 'portfolio'
        };
        this.clickPage = this.clickPage.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
    }

    clickPage = (page) => {
        this.setState({showThisTab: page});
    };


    render() {
        return (
            <React.Fragment>
                <div className="root-div">

                        <MyNavbar clickPage={this.clickPage} />


                        {this.state.showThisTab === 'testimonial' && <Testimonial />}
                        {this.state.showThisTab === 'portfolio' && <Portfolio />}
                        {this.state.showThisTab === 'resume' && <Resume />}
                        {this.state.showThisTab === 'about' && <About clickPage={this.clickPage} />}
                        {this.state.showThisTab === 'contact' && <Contact />}

                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
