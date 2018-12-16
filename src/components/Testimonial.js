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
                    {name: 'crdu', id: 'cJUW2unSfe8', displayName: 'Craig'},
                    {name: 'eldo', id: 'Ct2xqi5uWoE', displayName: 'Elyse'},
                    {name: 'mitu', id: 'bi1kCGaqvrM', displayName: 'Michael'},
                ]
            },
            teammates: {
                // title: ["Co-workers &", "Teammates"],
                title: ["Co-workers", "& Teammates"],
                members: [
                    {name: 'denise', id: 'n5lvadNuFKk', displayName: 'Denise'},
                    {name: 'hoke', id: 'wFK7uoRGq64', displayName: 'Horizon'},
                    {name: 'nach', id: '2DggoNjXK7k', displayName: 'Nicole'},
                    {name: 'nathan', id: 'ruYsDekAKGM', displayName: 'Nathan'},
                ]
            },
            fam: {
                title: ["Childhood","Friends"],
                members: [
                    {name: 'dofi', id: 'I_vhtLAqewE', displayName: 'Don'},
                    {name: 'nathan', id: 'goQQVTTkAss', displayName: 'Nathan'},
                    {name: 'lacr', id: 'Z_Cvpuox1z4', displayName: 'Crystal'},
                    {name: 'denise', id: 'B-QwQF9SsQo', displayName: 'Denise'},
                ]
            },
            toggleFriends: false,
            toggleTeammates: false,
            toggleFam: false,
        };
        // bind methods here;
        this.expandCollapse = this.expandCollapse.bind(this);
        // this.printState = this.printState.bind(this);
    }

    componentDidMount() { }

    // printState = () => { console.log('*** Home.state ***', this.state)};

    expandCollapse = (e) => {
        const name = e.target.name;
        const value = !this.state[name];
        this.setState({[name]: value});
    };




    render() {




        // select the first person in each group for default display
        const oneFriend = [this.state.friends.members[0]];
        const oneTeammate = [this.state.teammates.members[0]];
        const oneFam = [this.state.fam.members[0]];

        // create arrays of remaining members of each group
        const moreFriends = this.state.friends.members.slice(1);
        const moreTeammates = this.state.teammates.members.slice(1);
        const moreFam = this.state.fam.members.slice(1);

        // stylez
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
                        <span className="mt-0 mb-1" style={small}>( These folks are real, unpaid friends and family. )&nbsp;
                            <button type="button" className="btn btn-sm btn-outline-primary my-0" data-toggle="modal" data-target="#joinTestimonyModal">
                            Add YOUR testimony!
                            </button>
                        </span>

                        {/* Button => open modal */}

                    </div>
                    {/*end header*/}




                    {/* desktop / mobile view */}
                    {/*dimensions: 180x320 || 135x240 || 90x160*/} {/*ratio: 9x16*/}

                    <div className="d-flex row justify-content-center align-items-start">

                        {/*friends*/}
                        <div className="col-12 col-md-3 mb-5 d-inline-block text-center">
                            <h4>{this.state.friends.title[0]}<br/>{this.state.friends.title[1]}</h4>

                            <Testimonials group={oneFriend} />
                            {!this.state.toggleFriends &&
                                <button name="toggleFriends"
                                        className="btn btn-sm btn-primary"
                                        style={more}
                                        onClick={this.expandCollapse}>
                                    More Friends
                                </button>
                            }



                            {this.state.toggleFriends &&
                                <Testimonials group={moreFriends} />
                            }
                            {this.state.toggleFriends &&
                                <button name="toggleFriends"
                                        className="btn btn-sm btn-primary"
                                        style={more}
                                        onClick={this.expandCollapse}>
                                    Less Friends
                                </button>
                            }
                        </div>


                        {/*teammates*/}
                        <div className="col-12 col-md-3 mb-5 d-inline-block text-center">
                            <h4>{this.state.teammates.title[0]}<br/>{this.state.teammates.title[1]}</h4>

                            <Testimonials group={oneTeammate}/>
                            {!this.state.toggleTeammates &&
                                <button name="toggleTeammates"
                                        className="btn btn-sm btn-primary"
                                        style={more}
                                        onClick={this.expandCollapse}>
                                    More Teammates
                                </button>
                            }

                            {this.state.toggleTeammates &&
                                <Testimonials group={moreTeammates} />
                            }
                            {this.state.toggleTeammates &&
                                <button name="toggleTeammates"
                                        className="btn btn-sm btn-primary"
                                        style={more}
                                        onClick={this.expandCollapse}>
                                    Less Teammates
                                </button>
                            }
                        </div>



                        {/*old friends & fam*/}
                        <div className="col-12 col-md-3 mb-5 d-inline-block text-center">
                            <h4>{this.state.fam.title[0]}<br/>{this.state.fam.title[1]}</h4>

                            <Testimonials group={oneFam} />
                            {!this.state.toggleFam &&
                                <button name="toggleFam"
                                        className="btn btn-sm btn-primary"
                                        style={more}
                                        onClick={this.expandCollapse}>
                                    More Childhood Friends
                                </button>
                            }


                            {this.state.toggleFam &&
                                <Testimonials group={moreFam} />
                            }
                            {this.state.toggleFam &&
                                <button name="toggleFam"
                                        className="btn btn-sm btn-primary"
                                        style={more}
                                        onClick={this.expandCollapse}>
                                    Less Childhood Friends
                                </button>
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
                                        <li>What impressed you the most about johnahn?</li>
                                        <li>What are John's strengths? Where is there room for improvement?</li>
                                        <li>What do you love about John Ahn?</li>
                                        <li>If you could do anything or go anywhere with johnahn (business, event, vacation, adventure), what would it be?</li>
                                        <li>How has JAhn helped or hurt you in your life?</li>
                                    </ul>


                                    {/*contact*/}
                                    <div className="row justify-content-center mt-3 mb-1">
                                        <p className="col-8">

                                            <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer">
                                                <img alt="instagram @johnahnonelove" src={IG} style={smallLogo} /> Instagram @johnahnonelove
                                            </a>
                                        </p>
                                        <p className="col-8">
                                            <a href="mailto:johnahn@z0rs.org?subject=John%20Ahn%20Testimonial%20video" target="_blank" rel="noopener noreferrer">
                                                <img alt="email johnahn@z0rs.org" src={Email} style={smallLogo} /> Email johnahn@z0rs.org
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