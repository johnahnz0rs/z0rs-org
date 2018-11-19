import React from "react";
import IG from '../assets/instagram.png';
import Email from '../assets/email.png';
import Testimonials from './Testimonials'

class Testimonial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // just change the order of friends / teammates / fam 's members array to rearrange the videos
            friends: {
                title: ["Good", "Friends"],
                members: [
                    {name: 'eldo', id: 'Ct2xqi5uWoE'},
                    {name: 'mitu', id: 'bi1kCGaqvrM'},
                    {name: 'crdu', id: 'cJUW2unSfe8'}
                ]
            },
            teammates: {
                // title: ["Co-workers &", "Teammates"],
                title: ["Co-workers", "& Teammates"],
                members: [
                    {name: 'hoke', id: 'wFK7uoRGq64'},
                    {name: 'nach', id: '2DggoNjXK7k'},
                    {name: 'denise', id: 'n5lvadNuFKk'},
                    {name: 'nathan', id: 'ruYsDekAKGM'}
                ]
            },
            fam: {
                title: ["Childhood","Friends"],
                members: [
                    {name: 'denise', id: 'B-QwQF9SsQo'},
                    {name: 'nathan', id: 'goQQVTTkAss'},
                    {name: 'lacr', id: 'Z_Cvpuox1z4'},
                    {name: 'dofi', id: 'I_vhtLAqewE'}
                ]
            },
            toggleFriends: false,
            toggleTeammates: false,
            toggleFam: false,
            urlFriends: null,
            urlTeammates: null,
            urlFam: null,
            moreFriends: null,
            moreTeammates: null,
            moreFam: null
        };
        // bind methods here;
        this.toggleGroupOnMobile = this.toggleGroupOnMobile.bind(this);
        this.printState = this.printState.bind(this);
    }

    componentDidMount() {
        this.setState({urlFriends: `https://www.youtube.com/embed/${this.state.friends.members[0].id}?version=3&autoplay=0&loop=0`});
        this.setState({urlTeammates: `https://www.youtube.com/embed/${this.state.teammates.members[0].id}?version=3&autoplay=0&loop=0`});
        this.setState({urlFam: `https://www.youtube.com/embed/${this.state.fam.members[0].id}?version=3&autoplay=0&loop=0`});
        const moreFriends = this.state.friends.members.slice(1)
        this.setState({moreFriends: moreFriends});
        const moreTeammates = this.state.teammates.members.slice(1);
        this.setState({moreTeammates: moreTeammates});
        const moreFam = this.state.fam.members.slice(1);
        this.setState({moreFam: moreFam});
    }

    printState = () => { console.log('*** Home.state ***', this.state)};

    toggleGroupOnMobile = (e) => {
        const name = e.target.name;
        const value = !this.state[name];
        this.setState({[name]: value});
    };




    render() {

        const small = {fontSize: 'medium', display: 'block'};
        const more = { width: '80%', maxWidth: '225px'};
        const smallLogo = {width: '20px', height: 'auto', display: 'inline'};

        return (
            <React.Fragment>
                <div className="container-fluid">


                    {/*<button className="btn btn-sm btn-primary" onClick={this.printState}>print state</button>*/}

                    {/*header*/}
                    <div className="mb-5 text-center">
                        <h1 className="my-0 font-weight-bold">Testimonials</h1>
                        <span className="mt-0 mb-1" style={small}>( Real talk, from real people. )</span>

                        {/* Button => open modal */}
                        <button type="button" className="btn btn-sm btn-primary my-0" data-toggle="modal" data-target="#joinTestimonyModal">
                            Add YOUR testimony!
                        </button>
                    </div>
                    {/*end header*/}




                    {/* desktop / mobile view */}
                    {/*dimensions: 180x320 || 135x240 || 90x160*/} {/*ratio: 9x16*/}

                    <div className="d-flex row justify-content-center align-items-start">

                        {/*friends*/}
                        <div className="col-12 col-md-3 mb-5 d-inline-block text-center">
                            <h4>{this.state.friends.title[0]}<br/>{this.state.friends.title[1]}</h4>
                            <div className="my-4">
                                <iframe
                                    width="135" height="240"
                                    title={this.state.friends.members[0].id}
                                    src={this.state.urlFriends}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>

                            {this.state.toggleFriends && this.state.moreFriends &&
                                <Testimonials group={this.state.moreFriends} />
                            }

                            {!this.state.toggleFriends &&
                                <button name="toggleFriends" className="btn btn-sm btn-primary" style={more} onClick={this.toggleGroupOnMobile}>More Friends</button>
                            }
                            {this.state.toggleFriends &&
                                <button name="toggleFriends" className="btn btn-sm btn-primary" style={more} onClick={this.toggleGroupOnMobile}>Less Friends</button>
                            }
                        </div>


                        {/*teammates*/}
                        <div className="col-12 col-md-3 mb-5 d-inline-block text-center">
                            <h4>{this.state.teammates.title[0]}<br/>{this.state.teammates.title[1]}</h4>

                            <div className="my-4">
                                <iframe width="135" height="240"
                                        title={this.state.teammates.members[0].id}
                                        src={this.state.urlTeammates}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>

                            {this.state.toggleTeammates && this.state.moreTeammates &&
                                <Testimonials group={this.state.moreTeammates} />
                            }

                            {!this.state.toggleTeammates &&
                                <button name="toggleTeammates" className="btn btn-sm btn-primary" style={more} onClick={this.toggleGroupOnMobile}>More Teammates</button>
                            }
                            {this.state.toggleTeammates &&
                                <button name="toggleTeammates" className="btn btn-sm btn-primary" style={more} onClick={this.toggleGroupOnMobile}>Less Teammates</button>
                            }
                        </div>



                        {/*old friends & fam*/}
                        <div className="col-12 col-md-3 mb-5 d-inline-block text-center">
                            <h4>{this.state.fam.title[0]}<br/>{this.state.fam.title[1]}</h4>

                            <div className="my-4">
                                <iframe width="135" height="240"
                                        title={this.state.fam.members[0].id}
                                        src={this.state.urlFam}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>

                            {this.state.toggleFam && this.state.moreFam &&
                                <Testimonials group={this.state.moreFam} />
                            }

                            {!this.state.toggleFam &&
                                <button name="toggleFam" className="btn btn-sm btn-primary" style={more} onClick={this.toggleGroupOnMobile}>More Childhood Friends</button>
                            }
                            {this.state.toggleFam &&
                                <button name="toggleFam" className="btn btn-sm btn-primary" style={more} onClick={this.toggleGroupOnMobile}>Less Childhood Friends</button>
                            }

                        </div>


                    </div>
                    {/* end desktop / mobile view */}



                    {/* Modal */}
                    {/* Modal */}
                    <div className="modal fade text-left" id="joinTestimonyModal" tabIndex="-1" role="dialog" aria-labelledby="joinTestimonyLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">


                                {/* header */}
                                <div className="modal-header">
                                    <h5 className="modal-title" id="joinTestimonyLabel">Submit your own testimonial</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>


                                {/* body */}
                                <div className="modal-body">

                                    {/*info*/}
                                    <p className="font-weight-bold">Please make a selfie video answering one of the following questions in 1 - 3 sentences.</p>
                                    <ul className="mb-3">
                                        <li>What do you enjoy or appreciate most about working with johnahn?</li>
                                        <li>What are johnahn’s 3 best qualities? What about his 3 worst qualities?</li>
                                        <li>If you could do anything with johnahn (business project, hobby, vacation, adventure, caper), what would you like to do?</li>
                                        <li>Has knowing John Ahn been a benefit to you, or a disadvantage? And why?</li>
                                        <li>If you are a close or special friend of John's, then what do you miss most about johnahn when he is away?</li>
                                    </ul>


                                    {/*contact*/}
                                    <div className="row justify-content-center mt-3 mb-1">
                                        <p className="col-8">
                                            DM me:
                                            <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">
                                                <img alt="instagram @johnahnonelove" src={IG} style={smallLogo} /> @johnahnonelove
                                            </a>
                                        </p>
                                        <p className="col-8">
                                            Email me:
                                            <a href="mailto:johnahn@z0rs.org?subject=John%20Ahn%20Testimonial%20video" target="_blank" rel="noopener noreferrer">
                                                <img alt="email johnahn@z0rs.org" src={Email} style={smallLogo} /> johnahn@z0rs.org
                                            </a>
                                        </p>
                                        <p className="col-12 mt-3 mb-0 text-center font-weight-bold">Thank you in advance, my friend!</p>
                                    </div>
                                </div>


                                {/* footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-dismiss="modal">Got it!</button>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* end modal */}


                </div>
            </React.Fragment>
        );
    }

}

export default Testimonial;