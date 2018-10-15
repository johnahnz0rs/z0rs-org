import React from 'react';
import Video from '../assets/video.png';

const HomeCarousel = props => {

    return (

        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                {/* page indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>


                {/*da slides*/}
                <div className="carousel-inner my-carousel-inner">


                    {/*slide 0: EQ*/}
                    <div className="carousel-item active home-slides text-center">
                        {/*figure if mobile*/}
                        <div className="col-12 d-block d-sm-none">
                            <figure className="figure figure-xs">
                                <img className="figure-img slide-img-xs" src={Video} alt="video coming soon" />
                                <figcaption className="figure-caption"><span className="text-large">I bring High EQ, which yields deeper relationships, clearer communication, higher morale.</span></figcaption>
                            </figure>
                        </div>
                        {/*figure if tablet or larger*/}
                        <div className="col-12 d-sm-inline-block d-none">
                            <figure className="figure">
                                <img className="figure-img slide-img" src={Video} alt="video coming soon" />
                                <figcaption className="figure-caption"><span className="text-large">I bring High EQ, which yields deeper relationships, clearer communication, higher morale.</span></figcaption>
                            </figure>
                        </div>
                        {/*list*/}
                        <div className="col-12">
                            <ul className="list-unstyled">
                                <li><h5>Negotiations</h5></li>
                                <li><h5>Conflict Resolution</h5></li>
                                <li><h5>Customer Service</h5></li>
                                <li><h5>Lead by Example</h5></li>
                            </ul>
                        </div>
                    </div>

                    {/*slide 1: IQ*/}
                    <div className="carousel-item home-slides text-center">
                        {/*figure if mobile*/}
                        <div className="col-12 d-block d-sm-none">
                            <figure className="figure figure-xs">
                                <img className="figure-img slide-img-xs" src={Video} alt="video coming soon" />
                                <figcaption className="figure-caption"><span className="text-large">Even with a High IQ, I am far from all-knowing; but I can learn almost anything.</span></figcaption>
                            </figure>
                        </div>
                        {/*figure if tablet or larger*/}
                        <div className="col-12 d-none d-sm-block">
                            <figure className="figure">
                                <img className="figure-img slide-img" src={Video} alt="video coming soon" />
                                <figcaption className="figure-caption"><span className="text-large">Even with a High IQ, I am far from all-knowing; but I can learn almost anything.</span></figcaption>
                            </figure>
                        </div>
                        {/*list*/}
                        <div className="col-12">
                            <ul className="list-unstyled">
                                <li><h5>Problem Solving</h5></li>
                                <li><h5>Design Thinking</h5></li>
                                <li><h5>Business Development</h5></li>
                                <li><h5>Strategy</h5></li>
                            </ul>
                        </div>
                    </div>

                    {/*slide 2: Lifelong Learner*/}
                    <div className="carousel-item home-slides text-center">
                        {/*figure if mobile*/}
                        <div className="col-12 d-block d-sm-none">
                            <figure className="figure figure-xs">
                                <img className="figure-img slide-img-xs" src={Video} alt="video coming soon" />
                                <figcaption className="figure-caption"><span className="text-large">A Capable, Earnest Teammate</span></figcaption>
                            </figure>
                        </div>
                        {/*figure if tablet or larger*/}
                        <div className="col-12 d-none d-sm-block">
                            <figure className="figure">
                                <img className="figure-img slide-img" src={Video} alt="video coming soon" />
                                <figcaption className="figure-caption"><span className="text-large">A Capable, Earnest Teammate</span></figcaption>
                            </figure>
                        </div>
                        {/*list*/}
                        <div className="col-12">
                            <ul className="list-unstyled">
                                <li><h5>Lifelong Learner</h5></li>
                                <li><h5>Highly Coachable</h5></li>
                                <li><h5>Always Looking to Serve</h5></li>
                                <li><h5>Always Expanding My Skill Sets</h5></li>
                            </ul>
                        </div>

                    </div>
                </div>


                {/*Carousel Prev Next*/}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>




                {/* this is how to embed videos w bootstrap */}
                {/* https://getbootstrap.com/docs/4.1/utilities/embed/ */}

                {/*<div className="embed-responsive embed-responsive-16by9">*/}
                    {/*<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen />*/}
                {/*</div>*/}

                {/* this is how to embed videos w bootstrap */}
                {/* https://getbootstrap.com/docs/4.1/utilities/embed/ */}

            </div>

        </React.Fragment>

    );

};

export default HomeCarousel;