import React from "react";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Message from '../assets/text.png';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
        };
        // declare methods here
        this.toggleForm = this.toggleForm.bind(this);
    }


    //methods
    toggleForm = () => {
        const oye = !this.state.displayForm;
        this.setState({displayForm: oye});
    };



    render() {

        const link = {marginBottom: '10px', display: 'block'};
        const contactLogo = {height: '20px', width: 'auto'};


        return (
            <React.Fragment>
                <div className="container text-center mb-3">
                    <h1 className="d-block font-weight-bold mb-5 text-center">Contact Me</h1>

                    {/*email*/}
                    <span style={link}>
                        <a className="align-baseline" href="mailto:johnahn@z0rs.org?subject=Hello,+John&body=%0D%0A%0D%0AMessage+sent+from+z0rs.org" target="_blank" rel="noopener noreferrer">
                            <img src={Email} alt="Email" style={contactLogo}/>&nbsp;Email: johnahn@z0rs.org
                        </a>
                    </span>

                    {/*phone*/}
                    <span style={link}>
                        <a href="tel:1-213-503-4625">
                            <img src={Phone} alt="Phone" style={contactLogo}/>&nbsp;Phone: +1 (213) 503-4625
                        </a>
                    </span>

                    {/*linkedin*/}
                    <span style={link}>
                        <a href="https://www.linkedin.com/in/johnahn123/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" style={contactLogo}/>&nbsp;LinkedIn @johnahn123
                        </a>
                    </span>

                    {/*github*/}
                    <span style={link}>
                        <a href="https://github.com/johnahnz0rs" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub" style={contactLogo}/>&nbsp;GitHub @johnahnz0rs
                        </a>
                    </span>

                    {/*instagram*/}
                    <span style={link}>
                        <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" style={contactLogo}/>&nbsp;Instagram @johnahnonelove
                        </a>
                    </span>

                    {/* msg me (google form) */}
                    <span style={link}>
                        <img src={Message} alt="Message Me" style={contactLogo} />&nbsp;
                        <a href="#" onClick={this.toggleForm}>
                            Send Me a Message
                        </a>
                    </span>
                </div>


                {/* toggle Google Form*/}
                {this.state.displayForm && <div className="text-center d-block align-top">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScInjjmXx9JuNF1JUtrNm9ayOKuox1-GcWe896MSdEt3Bh6Bw/viewform?embedded=true" style={{width: '85%', height: "751px", display: 'inline-block'}} frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                </div>}
            </React.Fragment>
        );
    }

}

export default Contact;