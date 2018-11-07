import React from 'react';

const Testimonials = (props) => {

    return (
        <React.Fragment>
            <div className="mb-4">

                {props.group.members.map(friend => {

                    // const src = "https://www.youtube.com/embed/" + friend.id + '?version=3&autoplay=0&loop=1&playlist=' + friend.id;
                    const src = "https://www.youtube.com/embed/" + friend.id + '?version=3&autoplay=0&loop=0';

                    return (
                        <div className="testimonial" key={friend.id}>
                            <iframe width="180" height="320" title={friend.id} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    );
                })}
            </div>

        </React.Fragment>
    );

};

export default Testimonials;