import React from 'react';
import './Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const Questions = ({ ques }) => {
    const { correctAnswer, id, options, question } = ques;
    ///console.log(ques);

    const eyeHandler = id => {
        console.log(correctAnswer);
    }
    return (
        <div>
            <div className="ques-card">
                <h4>Quiz: {question}</h4>

                {
                    options.map(option => <div className='option-div'>
                        <p>{option}</p>
                    </div>)
                }

                <FontAwesomeIcon onClick={() => eyeHandler(id)} className='eye-icon' icon={faEye}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default Questions;