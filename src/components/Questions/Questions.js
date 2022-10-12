import React from 'react';
import './Questions.css';

const Questions = ({ques}) => {
    const { correctAnswer, id, options, question } = ques;
    ///console.log(ques);
    return (
        <div>
            <div className="ques-card">
                <h4>Quiz: {question}</h4>
                
                {
                    options.map(option => <div className='option-div'>
                        <p>{option}</p>
                    </div> )
                }
            </div>

        </div>
    );
};

export default Questions;