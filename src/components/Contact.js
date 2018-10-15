import React from "react";
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = props => {

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-sm-8'>

                        <ContactForm />

                    </div>
                    <div className="col-sm-4">

                        <ContactInfo />

                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default Contact;