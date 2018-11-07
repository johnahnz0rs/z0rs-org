import React from "react";
import IG from '../assets/instagram.png';
import Email from '../assets/email.png';
import Testimonials from './Testimonials'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // just change the order of friends / teammates / fam 's members array to rearrange the videos
            friends: {
                title: ["Jahn's", "Friends"],
                members: [
                    {name: 'eldo', id: 'Ommcui-5qOY'},
                    {name: 'mitu', id: 'bi1kCGaqvrM'},
                    {name: 'crdu', id: 'cJUW2unSfe8'}
                ]
            },
            teammates: {
                title: ["Co-workers &", "Teammates"],
                members: [
                    {name: 'nach', id: '2DggoNjXK7k'},
                    {name: 'hoke', id: 'wFK7uoRGq64'},
                    {name: 'nathan', id: 'ruYsDekAKGM'}
                ]
            },
            fam: {
                title: ["Childhood","Friends"],
                members: [
                    {name: 'nathan', id: 'goQQVTTkAss'},
                    {name: 'lacr', id: 'Z_Cvpuox1z4'},
                    {name: 'dofi', id: 'I_vhtLAqewE'},
                    {name: 'joah', id: '5sZUb4koB0s'}
                ]
            },
            toggleFriends: false,
            toggleTeammates: false,
            toggleFam: false,
            idFriends: '',
            idTeammates: '',
            idFam: '',
            urlFriends: '',
            urlTeammates: '',
            urlFam: ''
        };
        // bind methods here;
        this.toggleGroupOnMobile = this.toggleGroupOnMobile.bind(this);
        this.printState = this.printState.bind(this);
    }

    componentDidMount() {
        this.setState({idFriends: this.state.friends.members[0].id});
        this.setState({idTeammates: this.state.teammates.members[0].id});
        this.setState({idFam: this.state.fam.members[0].id});
        this.setState({urlFriends: "https://www.youtube.com/embed/" + this.state.friends.members[0].id + "?version=3&autoplay=0&loop=1&playlist=" + this.state.friends.members[0].id});
        this.setState({urlTeammates: "https://www.youtube.com/embed/" + this.state.teammates.members[0].id + "?version=3&autoplay=0&loop=0&playlist=" + this.state.teammates.members[0].id});
        this.setState({urlFam: "https://www.youtube.com/embed/" + this.state.fam.members[0].id + "?version=3&autoplay=0&loop=1&playlist=" + this.state.fam.members[0].id});
    }

    printState = () => { console.log('*** Home.state ***', this.state)};

    toggleGroupOnMobile = (e) => {
        const name = e.target.name;
        const value = !this.state.name;
        this.setState({[name]: value});
    };


    render() {
        return (
            <React.Fragment>
                <div className="home-root container-fluid">

                    {/*header*/}
                    <div className="col-12 mb-5 text-center">
                        <h1 className="page-title">Testimonials</h1>
                        <h5>Real talk, real people.</h5>

                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#joinTestimonyModal">
                            Add YOUR testimony!
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
                                            Thank you in advance, my friend!<br/>
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
                                                <td><a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer"><img alt="instagram @johnahnonelove" src={IG} className="small-logo"/> @johnahnonelove</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Email me</th>
                                                <td><a href="mailto:johnahn@z0rs.org?subject=John%20Ahn%20Testimonial%20video" target="_blank" rel="noopener noreferrer"><img alt="email johnahn@z0rs.org" src={Email} className="small-logo"/> johnahn@z0rs.org</a></td>
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
                    {/*end header*/}


                    {/*dimensions: 180x320*/}
                    {/*ratio: 9x16*/}
                    {/* desktop view */}
                    <div className="d-none d-md-block text-center home-root-desktop container-fluid">
                        <div className="col-4 testi-group">
                            <h4>{this.state.friends.title[0]}<br/>{this.state.friends.title[1]}</h4>
                            <Testimonials group={this.state.friends}/>
                        </div>
                        <div className="col-4 testi-group">
                            <h4>{this.state.teammates.title[0]}<br/>{this.state.teammates.title[1]}</h4>
                            <Testimonials group={this.state.teammates}/>
                        </div>
                        <div className="col-4 testi-group">
                            <h4>{this.state.fam.title[0]}<br/>{this.state.fam.title[1]}</h4>
                            <Testimonials group={this.state.fam}/>
                        </div>
                    </div>
                    {/* end desktop view */}






                    {/* mobile view */}
                    <div className="d-block d-md-none text-center home-root-mobile container-fluid">


                        {/* friends-mobile */}
                        <div className="col-12 mb-5">
                            <h4>{this.state.friends.title[0]}<br/>{this.state.friends.title[1]}</h4>
                            {/*show one friend*/}
                            {this.state.toggleFriends === false &&
                            <div className="col-12 d-block">
                                <iframe width="180" height="320" title={this.state.idFriends} src={this.state.urlFriends} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <button className="btn btn-sm btn-primary my-toggle-button" name="toggleFriends" onClick={this.toggleGroupOnMobile}>See more Friends</button>
                            </div>}
                            {/*show all friends*/}
                            {this.state.toggleFriends === true &&
                            <div className="col-12 d-block">
                                <Testimonials group={this.state.friends} />
                                {/*<button className="btn btn-sm btn-primary my-toggle-button" name="toggleFriends" onClick={this.toggleGroupOnMobile}>Hide Friends</button>*/}
                            </div>}
                        </div>


                        {/* teammates-mobile */}
                        <div className="col-12 mb-5">
                            <h4>{this.state.teammates.title[0]}<br/>{this.state.teammates.title[1]}</h4>
                            {/*show one teammate*/}
                            {this.state.toggleTeammates === false && <div className="col-12 d-block">
                                <iframe width="180" height="320" title={this.state.idTeammates} src={this.state.urlTeammates} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <button className="btn btn-sm btn-primary my-toggle-button" name="toggleTeammates" onClick={this.toggleGroupOnMobile}>
                                    See more Teammates
                                </button>
                            </div>}
                            {/*show all teammates*/}
                            {this.state.toggleTeammates === true &&
                            <div className="col-12 d-block">
                                <Testimonials group={this.state.teammates} />
                                {/*<button className="btn btn-sm btn-primary my-toggle-button" name="toggleTeammates" onClick={this.toggleGroupOnMobile}>Hide Teammates</button>*/}
                            </div>}

                        </div>


                        {/* fam-mobile */}
                        <div className="col-12 mb-5">
                            <h4>{this.state.fam.title[0]}<br/>{this.state.fam.title[1]}</h4>
                            {/*show one fam*/}
                            {this.state.toggleFam === false && <div className="col-12 d-block">
                                <iframe width="180" height="320" title={this.state.idFam} src={this.state.urlFam} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <button className="btn btn-sm btn-primary my-toggle-button" name="toggleFam" onClick={this.toggleGroupOnMobile}>
                                    See more Childhood Friends
                                </button>
                            </div>}
                            {/*show all fams*/}
                            {this.state.toggleFam === true &&
                            <div className="col-12 d-block">
                                <Testimonials group={this.state.fam} />
                                <button className="btn btn-sm btn-primary my-toggle-button" name="toggleFam" onClick={this.toggleGroupOnMobile}>Hide Childhood Friends</button>
                            </div>}
                        </div>

                    </div>
                    {/* end mobile view */}


                </div>
            </React.Fragment>
        );
    }

}

export default Home;