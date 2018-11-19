import React from "react";

import ImgResume from '../assets/resume.png';


const Resume = props => {

    const resumeURL = 'https://drive.google.com/file/d/1-GFUiMXOzbxW4HTXMNMhpagbZ0wuB4SY/view?usp=sharing';
    const resumeDiv = {width: '95%'};
    const resumeThumbnail = {
        border: '2px solid black',
        borderRadius: '8px',
        maxWidth: '95%'
    };



    return (
        <React.Fragment>
            <div className="container-fluid text-center mb-3">

                <h1 className="font-weight-bold mb-4">Resume</h1>

                <p>
                    <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success" >
                        View & Save PDF
                    </a>
                </p>

                <p>
                    <a href={resumeURL} target="_blank" rel="noopener noreferrer">
                        <img style={resumeThumbnail} src={ImgResume} alt="John Ahn's Resume" />
                    </a>
                </p>

            </div>
        </React.Fragment>
    );

};

export default Resume;