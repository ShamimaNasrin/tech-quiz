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
                    <p><small>Q:{total}</small></p>
                   
                    {/* <button onClick={() => handleAddToCart(workoutName)}  */}
                        <button className='btn-start'>
                            Start Quiz
                        </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Topic;