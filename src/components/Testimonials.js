import React from 'react';

class Testimonials extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() {
        console.log('*** props.group ***', this.props.group);
    }

    render() {

        // {/*dimensions: 180x320 || 135x240 || 90x160*/}

        return (
            <React.Fragment>
                <div className="mb-5">
                    {this.props.group.map(friend => {

                        const src = 'https://www.youtube.com/embed/' + friend.id + '?version=3&autoplay=0&loop=0';


                        return(
                            <div className="d-block mb-3" key={friend.id}>
                                <iframe height="240" width="135" title={friend.id} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        );

                    })}
                </div>

            </React.Fragment>
        );
    }

}

export default Testimonials;