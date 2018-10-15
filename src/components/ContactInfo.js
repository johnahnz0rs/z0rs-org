import React from 'react';
import Email from '../assets/email.png';
import Phone from '../assets/phone.png';
import Text from '../assets/text.png';
import LinkedIn from '../assets/linkedin.png';
import GitHub from '../assets/github.png';
import Instagram from '../assets/instagram.png';

const ContactInfo = props => {

    return (

        <React.Fragment>
            <div className="container-fluid">
                <div className="col-12 text-center">
                    <h3 className="contact-info-header">Contact Info</h3>
                </div>

                <div className="col-10 offset-2">
                    <ul className="list-unstyled">
                        <li className="contact-item"><img className="contact-logo" src={Email} alt="Email" /> <a className="align-baseline" href="mailto:johnahn@z0rs.org?subject=Hello,+John&body=%0D%0A%0D%0AMessage+sent+from+z0rs.org" target="_blank" rel="noopener noreferrer">johnahn@z0rs.org</a></li>

                        <li className="contact-item"><img className="contact-logo" src={Phone} alt="Phone" /> <a href="tel:1-213-503-4625">(213) 503-4625</a></li>

                        <li className="contact-item"><img className="contact-logo" src={Text} alt="Text" /> <a href="sms:1-213-503-4625">Text Me</a></li>

                        <li className="contact-item"><img className="contact-logo" src={LinkedIn} alt="LinkedIn" /> <a href="https://www.linkedin.com/in/johnahn123/" target="_blank" rel="noopener noreferrer">/johnahn123</a></li>

                        <li className="contact-item"><img className="contact-logo" src={GitHub} alt="GitHub" /> <a href="https://github.com/johnahnz0rs" target="_blank" rel="noopener noreferrer">/johnahnz0rs</a></li>

                        <li className="contact-item"><img className="contact-logo" src={Instagram} alt="Instagram" /> <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">@johnahnonelove</a></li>

                    </ul>



                </div>
            </div>

        </React.Fragment>

    );

}

export default ContactInfo;