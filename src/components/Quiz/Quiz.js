import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h2>Quiz of </h2>
            <div className="quiz-card">
                <p>Quiz:</p>

            </div>
            
        </div>
    );
};

export default Quiz;