import React from "react";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import Text from "../assets/text.png";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Instagram from "../assets/instagram.png";

const Contact = props => {

    const link = {marginBottom: '10px', display: 'block'};
    const contactLogo = {height: '20px', width: 'auto'};


    return (
        <React.Fragment>
            <div className="container-fluid justify-content-center">
                <h1 className="d-block font-weight-bold mb-5 text-center">Contact Me</h1>


                {/*<ContactForm />*/}
                <div className="col-12 col-md-8 text-center d-inline-block align-top">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScInjjmXx9JuNF1JUtrNm9ayOKuox1-GcWe896MSdEt3Bh6Bw/viewform?embedded=true"  style={{width: '95%', height: "751px", display: 'inline-block'}} frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                </div>


                {/*<ContactInfo />*/}
                <div className="col-12 col-md-4 d-inline-block align-top justify-content-center">

                    <h3 className="font-weight-bold">Contact Info</h3>

                    <div className="text-left col-8">

                        <span style={link}>
                            <a className="align-baseline" href="mailto:johnahn@z0rs.org?subject=Hello,+John&body=%0D%0A%0D%0AMessage+sent+from+z0rs.org" target="_blank" rel="noopener noreferrer">
                                <img src={Email} alt="Email" style={contactLogo} />&nbsp;johnahn@z0rs.org
                            </a>
                        </span>

                        <span style={link}>
                            <a href="tel:1-213-503-4625">
                                <img src={Phone} alt="Phone" style={contactLogo} />&nbsp;(213) 503-4625
                            </a>
                        </span>

                        <span style={link}>
                            <a href="sms:1-213-503-4625">
                                <img src={Text} alt="Text" style={contactLogo} />&nbsp;Text Me
                            </a>
                        </span>

                        <span style={link}>
                            <a href="https://www.linkedin.com/in/johnahn123/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" style={contactLogo} />&nbsp;/johnahn123
                            </a>
                        </span>

                        <span style={link}>
                            <a href="https://github.com/johnahnz0rs" target="_blank" rel="noopener noreferrer">
                                <img src={GitHub} alt="GitHub" style={contactLogo} />&nbsp;/johnahnz0rs
                            </a>
                        </span>

                        <span style={link}>
                            <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" style={contactLogo} />&nbsp;@johnahnonelove
                            </a>
                        </span>

                    </div>

                </div>



            </div>
        </React.Fragment>
    );

};

export default Contact;