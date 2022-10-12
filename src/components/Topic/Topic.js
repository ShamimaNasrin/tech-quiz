import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    const {name, logo, total, id} = topic;
    return (
        <div className='topic'>
            <div className="card">
                <div className="img-div">
                <img src={logo} alt="img"></img>
                </div>
                <div className='topic-conatiner'>
                    <p className='text'>{name}</p>
                    <p><small>Q:{total}</small></p>
                   
                    
                    {/* <Link to={`/friend/${id}`}>{username}</Link> */}
                        <Link to={`/quiz/${id}`}>
                        <button className='btn-start'>Start Quiz</button>
                        </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Topic;