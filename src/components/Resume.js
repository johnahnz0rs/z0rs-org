import React from "react";

import WebDevImage from '../assets/resume-webdev.png';
import ExecAsstImage from '../assets/resume-asst.png';
import CookImage from '../assets/resume-cook.png';
import ComingSoonImage from '../assets/resume-comingsoon.png';



const Resume = props => {

    // URLs to PDFs
    const webDevURL = 'https://drive.google.com/file/d/1Wv833cDm87iXHViogFsQ4tWmB3PJxp4u/view?usp=sharing';
    const cookURL = 'https://drive.google.com/file/d/1_mcNi5Ph0t23jRo4YgT-wDdvVvuwE-OL/view?usp=sharing';
    const execAsstURL = 'https://drive.google.com/file/d/19OVW09NFphBYYAc0LcMdugKyyoH53Rxb/view?usp=sharing';
    const comingSoonURL = '#';

    // stylez
    const resumeThumbnail = {
        border: '2px solid black',
        borderRadius: '8px',
        maxWidth: '85%'
    };


    return (
        <React.Fragment>
            <div className="container mb-3">

                {/* header */}
                <div className="mb-5">
                    <h1 className="font-weight-bold text-center">Resumes</h1>
                    <div className="alert alert-success mx-auto" role="alert" style={{width: '85%'}}>
                        <span><b><u>Scroll Down</u></b> for more.</span>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>



                {/* jr web dev*/}
                <div className="text-center col col-12 col-sm-6 col-md-4 d-inline-block mb-5">
                    <h4><b>Full Stack<br />Software Developer</b></h4>
                    <a className="btn btn-sm btn-outline-success mb-1" href={webDevURL} target="_blank" rel="noopener noreferrer">
                        PDF version
                    </a>
                    <a className="d-block" href={webDevURL} target="_blank" rel="noopener noreferrer">
                        <img style={resumeThumbnail} src={WebDevImage} alt="John Ahn's Resume" />
                    </a>
                </div>


                {/* executive assistant */}
                <div className="text-center col col-12 col-sm-6 col-md-4 d-inline-block mb-5">
                    <h4><b>Executive Assistant</b></h4>
                    <a className="btn btn-sm btn-outline-success mb-1" href={execAsstURL}>
                        PDF version
                    </a>
                    <a className="d-block" href={execAsstURL}>
                        <img style={resumeThumbnail} src={ExecAsstImage} alt="John Ahn's Resume" />
                    </a>
                </div>


                {/* cook */}
                <div className="text-center col col-12 col-sm-6 col-md-4 d-inline-block mb-5">
                    <h4><b>Cook</b></h4>
                    <a className="btn btn-sm btn-outline-success mb-1" href={cookURL} target="_blank" rel="noopener noreferrer">
                        PDF version
                    </a>
                    <a className="d-block" href={cookURL} target="_blank" rel="noopener noreferrer">
                        <img style={resumeThumbnail} src={CookImage} alt="John Ahn's Resume" />
                    </a>
                </div>




                {/* COMING SOON */}
                {/* product manager / operations manager */}
                <div className="text-center col col-12 col-sm-6 col-md-4 d-inline-block mb-5">
                    <h4><b>Operations Managment</b></h4>
                    <a className="btn btn-sm btn-outline-success mb-1" href={comingSoonURL}>
                        PDF version
                    </a>
                    <a className="d-block" href={comingSoonURL}>
                        <img style={resumeThumbnail} src={ComingSoonImage} alt="John Ahn's Resume" />
                    </a>
                </div>





            </div>
        </React.Fragment>
    );

};

export default Resume;