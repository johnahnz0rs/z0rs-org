import React from "react";


// images
import WhatMusicTall from '../assets/whatMusicTall.png';
import DevJobs from '../assets/devjobs.png';
import ShowShuffleLeslie from '../assets/show-shuffle-leslie.png';
import RBP from '../assets/rbp.png';
import Deni from '../assets/denileeart.png';
import DogGirl from '../assets/dog_girl.png';
// import ShowShuffle from '../assets/showshuffle.png';
// import WhatMusic from '../assets/whatmusic.png';
// import DogTruck from '../assets/dog_truck.png';
// import DogWink from '../assets/dog_wink.png';
// import DogWrinkly from '../assets/dog_wrinkly.png';
// import GitHub from '../assets/github.png';
// import ComingSoon from '../assets/comingsoon.png';
// import Upwork from '../assets/upwork.png';


class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() {

    }



    render() {

        const portfolioItem = {
            margin: '50px auto',
            padding: '30px 0',
            border: '1px solid black',
            borderRadius: '8px'
        };
        const portfolioScreenshot = {
            width: '95%',
            height: 'auto',
            marginBottom: '30px',
        };
        const portfolioScreenshotTall = {
            width: 'auto',
            height: '350px',
            marginBottom: '30px',
        };
        const portfolioScreenshotSquare = {
            width: '250px',
            height: 'auto',
            marginBottom: '30px',
        };

        return (
            <React.Fragment>

                <div className="container">

                    {/* header */}
                    <div className="mb-5">
                        <div className="alert alert-success mx-auto" role="alert" style={{width: '85%'}}>
                            <span><b><u>Scroll Down</u></b> for more projects.</span>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <h1 className="text-center font-weight-bold">Portfolio</h1>

                    </div>

                    {/* whatMusic */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshotTall} src={WhatMusicTall} alt="whatMusic written in React-Node"/>
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>
                            {/* header */}
                            <a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">whatMusic</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">whatMusic.xyz</a> - <a href="https://github.com/johnahnz0rs/what-music" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>


                            {/* body */}
                            <dl className="row">
                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Don't you love #tfw your new friend has the same taste in music as you? Quickly see what artists, tracks, and genres you and a friend have in common, so you can get to groovin' together. #bowchikawowow</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN (React.js - Node.js - Express - MongoDB), Bootstrap CSS & JS, Heroku</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">While controversial, musical compatibility is personally meaningful to many people, myself included. This app helps friends and lovers more easily communicate their musical tastes with each other.</dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">whatMusic.xyz</a> - <a href="https://github.com/johnahnz0rs/what-music" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>
                        </div>
                    </div>


                    {/* showShuffle */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="https://show-shuffle.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshotTall} src={ShowShuffleLeslie} alt="screenshot"/>
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>
                            {/* header */}
                            <a href="https://show-shuffle.herokuapp.com" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">Show Shuffle</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="https://show-shuffle.herokuapp.com" target="_blank" rel="noopener noreferrer">show-shuffle.com</a> - <a href="https://github.com/johnahnz0rs/show-shuffle" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                            {/* body */}
                            <dl className="row">
                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">
                                    <p>Stop wasting hours arguing about what to watch. showShuffle will recommend something that everyone will love #guaranteed</p>
                                </dd>
                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN (React.js - Node.js - Express - MongoDB), Bootstrap CSS & JS, Heroku </dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Some friends experience chronic delays because they can't figure out what TV show to watch next. So I created a "<span className="font-weight-bold">Play Random Episode</span>" button for them.</dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="https://show-shuffle.herokuapp.com" target="_blank" rel="noopener noreferrer">show-shuffle.com</a> - <a href="https://github.com/johnahnz0rs/show-shuffle" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>
                        </div>

                    </div>



                    {/* deni-lee-art */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="https://denileeart.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshotTall} src={Deni} alt="screenshot"/>
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>
                            {/* header */}
                            <a href="https://denileeart.herokuapp.com" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">Deni Rene Lee (Portfolio)</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="https://denileeart.herokuapp.com" target="_blank" rel="noopener noreferrer">denilee.art</a> - <a href="https://github.com/johnahnz0rs/denileeart" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                            {/* body */}
                            <dl className="row">
                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">A website gallery to display <a href="https://www.instagram.com/explore/tags/inktober/" target="_blank" rel="noopener noreferrer">#Inktober</a> sketches (10/2018).</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">React.js front-end</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">I took a special interest when Deni posted her first <a href="https://www.instagram.com/explore/tags/inktober/" target="_blank" rel="noopener noreferrer">#inktober</a> sketch. I followed up with her several times throughout the month to gently encourage and support her commitment to sketch everyday; and when the month was over I made her this portfolio website as a thank you present.</dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="https://denileeart.herokuapp.com" target="_blank" rel="noopener noreferrer">denilee.art</a> - <a href="https://github.com/johnahnz0rs/denileeart" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>
                        </div>

                    </div>







                    {/* rBP */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshotSquare} src={RBP} alt="rBP screenshot placeholder" />
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>
                            {/* header */}
                            <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">rBP</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">rbpal.me</a> - <a href="https://github.com/johnahnz0rs/rBP" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                            <dl className="row">
                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">
                                    <ul>
                                        <li>We all have moments where we "learn our lesson", but we forget them when it counts later on.</li>
                                        <li>We all have chores we'd rather not -- like dishes, laundry, and making the bed.</li>
                                        <li>And we all need someone who just gets us and will always have our back.</li>
                                        <li>"I'll do it tomorrow."</li>
                                    </ul>
                                    <p>Relax! robotButlerPal's got your back. #bff #homey #squad</p>
                                </dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN (React.js - Node.js - Express - MongoDB), Bootstrap CSS, JS, Heroku</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">
                                    <p>Personally, it's easier for me to be a better person when I have ALOT of support around me. But hiring and paying quality people is beyond my budget. rBP can do these things for me though, for da low low price of 'code it myself'.</p>
                                </dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">rbpal.me</a> - <a href="https://github.com/johnahnz0rs/rBP" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                        </div>
                    </div>








                    {/*/!* pickAMovie *!/*/}
                    {/*<div className="row" style={portfolioItem}>*/}

                        {/*<div className="col-12 col-md-5 text-center">*/}
                            {/*/!* picture *!/*/}
                            {/*<a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer">*/}
                                {/*<img className="" style={portfolioScreenshotSquare} src={DogGirl} alt="screenshot"/>*/}
                            {/*</a>*/}
                        {/*</div>*/}

                        {/*<div className="col-12 col-md-7" style={{padding: '0 30px'}}>*/}
                            {/*/!* header *!/*/}
                            {/*<a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>*/}
                                {/*<h3 className="font-weight-bold mb-0">pickAMovie</h3>*/}
                            {/*</a>*/}
                            {/*<span className="d-block mb-3">*/}
                                {/*<a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer">pick-a-movie.com</a> - <a href="https://github.com/johnahnz0rs/pick-a-movie" target="_blank" rel="noopener noreferrer">GitHub</a>*/}
                            {/*</span>*/}

                            {/*/!* body *!/*/}
                            {/*<dl className="row">*/}
                                {/*<dt className="col-lg-2">Description</dt>*/}
                                {/*<dd className="col-lg-1"></dd>*/}
                                {/*<dd className="col-lg-9 mb-4">Picks a movie for you to watch right now, from your watchlist(s).</dd>*/}

                                {/*<dt className="col-lg-2">Technologies</dt>*/}
                                {/*<dd className="col-lg-1"></dd>*/}
                                {/*<dd className="col-lg-9 mb-4">JavaScript MERN (React.js - Node.js - Express - MongoDB), Bootstrap CSS & JS, Heroku</dd>*/}

                                {/*<dt className="col-lg-2">Inspiration</dt>*/}
                                {/*<dd className="col-lg-1"></dd>*/}
                                {/*<dd className="col-lg-9 mb-4">Whenever my friends and I try to watch a movie together, we end up wasting an hour or two just deciding on a movie to watch.<br/>Lately, we've been putting names in a hat and picking one at random. So I wrote this app to help us save paper.*/}
                                {/*</dd>*/}
                            {/*</dl>*/}

                            {/*/!* footer *!/*/}
                            {/*<span className="d-block d-sm-none mb-3">*/}
                                {/*<a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer">pick-a-movie.com</a> - <a href="https://github.com/johnahnz0rs/pick-a-movie" target="_blank" rel="noopener noreferrer">GitHub</a>*/}
                            {/*</span>*/}
                        {/*</div>*/}

                    {/*</div>*/}



                    {/* devJobs */}
                    <div className="row" style={portfolioItem}>
                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshot} src={DevJobs} alt="devJobs written in Angular with Node-Express"/>
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>

                            {/* header */}
                            <a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">devJobs</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer">devjobs.pro</a> - <a href="https://github.com/johnahnz0rs/devsOnDeck" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                            {/* body */}
                            <dl className="row">

                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Fake Job Site: upload resume, post jobs, contact info, etc.</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MEAN (AngularJS - Node.js - Express - MongoDB), Bootstrap CSS & JS, Heroku</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Practice building a MEAN full-stack project when given wireframes.</dd>

                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer">devjobs.pro</a> - <a href="https://github.com/johnahnz0rs/devsOnDeck" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                        </div>

                    </div>

                </div>

            </React.Fragment>
        );
    }
};

export default Portfolio;