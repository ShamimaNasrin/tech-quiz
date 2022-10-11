import React from 'react';
import './Topic.css';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className='topic'>
            <div className="card">
                <div className="img-div">
                <img src={logo} alt="img"></img>
                </div>
                <div className='topic-conatiner'>
                    <p className='text'>{name}</p>
                    <div className='btn-div'>
                        {/* <button onClick={() => handleAddToCart(workoutName)} className='btn-add'>
                            <p className='btn-text'>Add activity</p>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;