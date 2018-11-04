import React from "react";
import IG from '../assets/instagram.png';
import Email from '../assets/email.png';
// import HomeCarousel from './HomeCarousel';

const Home = props => {

    return (
        <React.Fragment>
            <div className="container-fluid text-center row home-root">

                <div className="testimonials-header text-center col-12 mb-5">

                    <h1 className="page-title">Testimonials</h1>

                    <h5>Real talk, real people.</h5>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#joinTestimonyModal">
                        Add your testimony!
                    </button>

                        {/* Modal */}
                        <div className="modal fade text-left" id="joinTestimonyModal" tabindex="-1" role="dialog" aria-labelledby="joinTestimonyLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="joinTestimonyLabel">Submit your own testimonial</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Thank you for sending in your own testimonial video, my friend.<br/>
                                            I wish you all good things in Life.<br/>
                                            &nbsp;<br/>
                                            <span className="font-weight-bold">Please make a selfie video answering one of the following questions in 1 - 3 sentences.</span>
                                        </p>
                                        <ul>
                                            <li>What do you enjoy or appreciate most about working with johnahn?</li>
                                            <li>What are johnahn’s 3 best qualities? What about his 3 worst qualities?</li>
                                            <li>If you could do anything with johnahn (business project, hobby, vacation, adventure, caper), what would you like to do?</li>
                                            <li>Has knowing John Ahn been a benefit to you, or a disadvantage? And why?</li>
                                            <li>If you are a close or special friend of John's, then what do you miss most about johnahn when he is away?</li>
                                        </ul>

                                        <table className="table-borderless">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">DM me</th>
                                                    <td><a href="" target="_blank" rel="noopeners noreferrers"><img alt="instagram @johnahnonelove" src={IG} className="small-logo"/> @johnahnonelove</a></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Email me</th>
                                                    <td><a href="" target="_blank" rel="noopeners noreferrers"><img alt="email johnahn@z0rs.org" src={Email} className="small-logo"/> johnahn@z0rs.org</a></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">Got it!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                {/*180x320*/}
                {/*9x16*/}
                {/* ?version=3&autoplay=1&loop=1&playlist= */}


                {/*friends-desktop*/}
                <div className="friends hidden-sm-down col-md-4 text-center testi-group mb-4">

                    <h4>Jahn's<br/>Friends</h4>


                        {/*<iframe width="180" height="320" title="" src="https://www.youtube.com/embed/*/}
                        {/*?version=3&autoplay=0&loop=1&playlist=*/}
                        {/*" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}


                    {/*elyse EFrLVRQ5dHI */}
                    <div className="testimonial">
                        <iframe width="180" height="320" title="" src="https://www.youtube.com/embed/EFrLVRQ5dHI?version=3&autoplay=0&loop=1&playlist=EFrLVRQ5dHI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {/*craig cJUW2unSfe8 */}
                    <div className="testimonial">
                        <iframe width="180" height="320" title="" src="https://www.youtube.com/embed/cJUW2unSfe8?version=3&autoplay=0&loop=1&playlist=cJUW2unSfe8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                </div>



                {/*coworkers-desktop*/}
                <div className="coworkers hidden-sm-down col-md-4 text-center testi-group">

                    <h4>Co-workers &<br/>Teammates</h4>

                    {/*horizon wFK7uoRGq64 */}
                    <div className="testimonial">
                        <iframe width="180" height="320" title="" src="https://www.youtube.com/embed/wFK7uoRGq64?version=3&autoplay=0&loop=1&playlist=wFK7uoRGq64" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {/*Nathan ruYsDekAKGM */}
                    <div>
                        <iframe width="180" height="320" title="" src="https://www.youtube.com/embed/ruYsDekAKGM?version=3&autoplay=0&loop=1&playlist=ruYsDekAKGM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {/*miller*/}
                    {/*<div className="testimonial"></div>*/}


                </div>


                {/*old friends-desktop*/}
                <div className="old-friends hidden-sm-down col-md-4 text-center testi-group">

                    <h4>Family &<br/>Old Friends</h4>

                    {/*nathan goQQVTTkAss */}
                    <div className="testimonial"><iframe width="180" height="320" title="" src="https://www.youtube.com/embed/goQQVTTkAss?version=3&autoplay=0&loop=1&playlist=goQQVTTkAss" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {/*denise*/}
                    {/*<div className="testimonial"></div>*/}

                    {/*ad*/}
                    {/*<div className="testimonial"></div>*/}

                    {/*dong disco I_vhtLAqewE */}
                    <div className="testimonial">
                        <iframe width="180" height="320" title="" src="https://www.youtube.com/embed/I_vhtLAqewE?version=3&autoplay=0&loop=1&playlist=I_vhtLAqewE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {/*jahn 5sZUb4koB0s */}
                    <div className="testimonial">
                        <iframe width="180" height="320" title="" src="https://www.youtube.com/embed/5sZUb4koB0s?version=3&autoplay=0&loop=1&playlist=5sZUb4koB0s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                </div>


                {/*<HomeCarousel />*/}


            </div>

        </React.Fragment>
    );

};

export default Home;