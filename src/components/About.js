import React from "react";
import Video from '../assets/video.png';
import Instagram from '../assets/instagram.png'

const About = props => {

    return (
        <React.Fragment>
            <div className="container-fluid text-center">

                <h1 className="page-title">About John Ahn</h1>

                {/*figure if mobile*/}
                <div className="col-12 d-block d-sm-none">
                    <figure className="figure figure-xs">
                        <img className="figure-img slide-img-xs" src={Video} alt="video coming soon"/>
                        {/*<figcaption className="figure-caption">What I Do & Why</figcaption>*/}
                        <figcaption className="figure-caption">Why I Do What I Do</figcaption>
                    </figure>
                </div>
                {/*figure if tablet or larger*/}
                <div className="col-12 d-none d-sm-block">
                    <figure className="figure">
                        <img className="figure-img about-video-placeholder" src={Video} alt="video coming soon"/>
                        <figcaption className="figure-caption">Why I Do What I Do</figcaption>
                    </figure>
                </div>
                {/*social media*/}
                <div className="col-12 about-social">
                    <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">
                        <figure className="figure">
                            <img className="figure-img about-social-img" src={Instagram} alt="instagram @johnahnonelove" />
                            <figcaption className="figure-caption">@johnahnonelove</figcaption>
                        </figure>
                    </a>
                </div>

            </div>
        </React.Fragment>
    );

};

export default About;