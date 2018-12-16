import React from 'react';

const Testimonials = props => {
    // {/*dimensions: 180x320 || 135x240 || 90x160*/}


    return(

        <React.Fragment>

            {props.group.map(friend => {

                const src = 'https://www.youtube.com/embed/' + friend.id + '?version=3&autoplay=0&loop=0';


                return(
                    <div className="d-block my-3 pt-3" key={friend.id} style={{border: '1px solid black', borderRadius: '8px'}}>
                        <iframe height="240" width="135" title={friend.id} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <p><b>{friend.displayName}</b></p>
                    </div>
                );

            })}
        </React.Fragment>
    );


};

export default Testimonials;