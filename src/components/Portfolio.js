import React from "react";


// images
import WhatMusic from '../assets/whatmusic.png';
import DevJobs from '../assets/devjobs.png';
import ShowShuffle from '../assets/showshuffle.png';

import DogGirl from '../assets/dog_girl.png';
import DogTruck from '../assets/dog_truck.png';
import DogWink from '../assets/dog_wink.png';
import DogWrinkly from '../assets/dog_wrinkly.png';
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
            margin: '30px auto',
            padding: '30px 0',
            border: '1px solid black'
        };
        const portfolioScreenshot = {
            width: '95%',
            height: 'auto',
            marginBottom: '30px'
        };
        const portfolioScreenshotTall = {
            width: 'auto',
            height: '350px',
            marginBottom: '30px'
        };

        return (
            <React.Fragment>

                <div className="container-fluid">
                    <h1 className="mb-5 text-center font-weight-bold">Portfolio</h1>

                    {/* whatMusic */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshot} src={WhatMusic} alt="whatMusic written in React-Node"/>
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
                                <dd className="col-lg-9 mb-4">Shows you what music you and a friend both like.</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN ( React.js - Node.js - Express - MongoDB ), Bootstrap CSS & JS, Heroku</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Musical compatibility is meaningful to many, myself included. This app helps friends and lovers more easily communicate their musical tastes with each other.</dd>
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
                                <img className="" style={portfolioScreenshotTall} src={ShowShuffle} alt="screenshot"/>
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
                                <dd className="col-lg-9 mb-4">Randomly suggests a TV show episode based on your preferences.</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN ( React.js - Node.js - Express - MongoDB ), Bootstrap CSS & JS, Heroku </dd>

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
                                <dd className="col-lg-9 mb-4">JavaScript MEAN ( AngularJS - Node.js - Express - MongoDB ), Bootstrap CSS & JS, Heroku</dd>

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


                    {/* pickAMovie */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshot} src={DogGirl} alt="screenshot"/>
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>
                            {/* header */}
                            <a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">pickAMovie</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer">pick-a-movie.com</a> - <a href="https://github.com/johnahnz0rs/pick-a-movie" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                            {/* body */}
                            <dl className="row">
                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Picks a movie for you to watch right now, from your watchlist(s).</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN ( React.js - Node.js - Express - MongoDB ), Bootstrap CSS & JS, Heroku</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Whenever my friends and I try to watch a movie together, we end up wasting an hour or two just deciding on a movie to watch.<br/>Lately, we've been putting names in a hat and picking one at random. So I wrote this app to help us save paper.
                                </dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="https://pick-a-movie.herokuapp.com" target="_blank" rel="noopener noreferrer">pick-a-movie.com</a> - <a href="https://github.com/johnahnz0rs/pick-a-movie" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>
                        </div>

                    </div>


                    {/* rBP */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshot} src={DogWrinkly} alt="rBP screenshot placeholder" />
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
                                <dd className="col-lg-9 mb-4">Nonjudgmentally presents data and options, so you can <span className="font-weight-bold font-italic">always</span> do the right thing.</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">JavaScript MERN ( React.js - Node.js - Express - MongoDB ), Bootstrap CSS, JS, Heroku</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Personally, I have a difficult time BEING a better person, even though I want to be. rBP is supposed to be like my conscience, my better self, and a dependable friend who tells it like it is always.</dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">rbpal.me</a> - <a href="https://github.com/johnahnz0rs/rBP" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                        </div>
                    </div>


                    {/* new portfolioItem */}
                    <div className="row" style={portfolioItem}>

                        <div className="col-12 col-md-5 text-center">
                            {/* picture */}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img className="" style={portfolioScreenshot} src={DogWink} alt="screenshot"/>
                            </a>
                        </div>

                        <div className="col-12 col-md-7" style={{padding: '0 30px'}}>
                            {/* header */}
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
                                <h3 className="font-weight-bold mb-0">Sample Title</h3>
                            </a>
                            <span className="d-block mb-3">
                                <a href="#" target="_blank" rel="noopener noreferrer">whatever.com</a> - <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>

                            {/* body */}
                            <dl className="row">
                                <dt className="col-lg-2">Description</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>

                                <dt className="col-lg-2">Technologies</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Aliquam fermentum ex at purus tempor maximus. Proin rutrum massa sed iaculis eleifend</dd>

                                <dt className="col-lg-2">Inspiration</dt>
                                <dd className="col-lg-1"></dd>
                                <dd className="col-lg-9 mb-4">Integer hendrerit aliquet sem a tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer id nisl sapien. Nam nec purus eu lacus ultricies efficitur at nec dui. Aenean sit amet erat lacus.</dd>
                            </dl>

                            {/* footer */}
                            <span className="d-block d-sm-none mb-3">
                                <a href="#" target="_blank" rel="noopener noreferrer">whatever.com</a> - <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </span>
                        </div>

                    </div>

                </div>

            </React.Fragment>
        );
    }
};

export default Portfolio;