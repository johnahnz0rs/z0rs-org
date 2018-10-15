import React from 'react';

const ContactForm = props => {

    return(

        <React.Fragment>

            <div className="contact-form-div container-fluid">
                <h3 className="contact-form-header">Send a Message</h3>


                <form id="contact-form" action="https://formspree.io/johnahn@z0rs.org" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" className="form-control" id="name" name="name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company: </label>
                        <input type="text" className="form-control" id="company" name="company"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" className="form-control" id="email" name="email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone: </label>
                        <input type="tel" className="form-control" id="phone" name="phone"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="msg">Message: </label>
                        <textarea className="form-control" id="message" name="message" rows="4"></textarea>
                    </div>

                    <input type="submit" className="btn btn-lg btn-primary contact-form-send" value="Send"/>
                </form>
            </div>
        </React.Fragment>

    );

}

export default ContactForm;