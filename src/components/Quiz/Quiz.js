import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

import './Quiz.css';

const Quiz = () => {
    const data = useLoaderData();
    const quiz = data.data;
    // console.log(quiz);
    const { name, questions } = quiz;
    // console.log(questions);
    return (
        <div>
            <h2>Quiz of {name}</h2>
            
                {

                    questions.map(ques => <Questions
                        ques={ques}>
                    </Questions>)
                }

           

        </div>
    );
};

export default Quiz;