import React, { useState } from 'react';
import './Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Questions = ({ ques }) => {
    const { correctAnswer, id, options, question } = ques;
    ///console.log(ques);

    const eyeHandler = () => {
        //console.log(correctAnswer);
        toast(correctAnswer);
    }
    const radioBtnHandler = (option) => {
        //console.log(option);
        if (option === correctAnswer) {
            toast('Correct Answer!');
        }
        else {
            toast('Wrong Answer!');
        }

    }
    return (
        <div>
            <div className="ques-card">
                <h4 className='quiz-question'>Quiz: {question}</h4>

                {
                    options.map(option => <div className='option-div'>

                        <input onClick={() => radioBtnHandler(option)} type="radio" id="quiz" name="option" value="Quiz" />
                        <label for="quiz"><p className='option-p'>{option}</p></label>
                    </div>)
                }

                <FontAwesomeIcon onClick={eyeHandler} className='eye-icon' icon={faEye}></FontAwesomeIcon>
                <ToastContainer />

                <p className='text-danger mt-4 mb-3'>Note: please click on radio button</p>
            </div>

        </div>
    );
};

export default Questions;