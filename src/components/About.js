import React from "react";

// import Video from '../assets/video.png';
import Instagram from '../assets/instagram.png'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() {

    }

    clickPage = (e) => {
        const page = e.target.name;
        this.props.clickPage(page);
    };

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid row justify-content-center">

                    <h1 className="col-12 text-center font-weight-bold">About John Ahn</h1>

                    <div className="col-12 col-md-7" style={{padding: '0 50px'}}>
                        <p>Hey, y'all! I hope you're well.</p>
                        <p>Me, I'm just a jersey boy who's grateful for being badass.</p>
                        <ul>
                            <li>It seems to me that alot in Life is determined by our own perspectives and subsequent actions; so when I remember, I try to choose the more beneficial, advantageous options.</li>
                            <li>If I meet somebody that's doing the same, well, then I try to be friends and team up with them because being around them makes <span className="font-italic">me</span> better.</li>
                        </ul>
                        <p>
                            Thanks for stopping by!</p><p>Please feel free to <a href="#" name="contact" onClick={this.clickPage}>contact me</a>, or check out my IG.<br/>
                            <a href="https://www.instagram.com/johnahnonelove/" target="_blank" rel="noopener noreferrer"><img className="figure-img about-social-img" src={Instagram} alt="instagram @johnahnonelove" style={{width: '20px', height: 'auto'}}/> <span>@johnahnonelove</span></a>
                        </p>
                    </div>


                </div>
            </React.Fragment>
        );
    }
}

export default About;