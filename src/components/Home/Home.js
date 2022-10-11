import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

import './Home.css';

const Home = () => {
    const data = useLoaderData();
    const topics = data.data;
    //console.log(topics);
    return (
        <div>
            {/* Header start */}
            <section>
                <div className='h-container'>
                    <div className='container d-block d-md-block pb-5 mx-auto my-auto text-div'>
                        <div className='pb-5 container'>
                            <h1 className='fw-bold text-center text-white'>How Well You Know About front-end web development?</h1>
                            <p>Here, we have a few front-end web development quiz questions and answers to test your knowledge.</p>
                        </div>
                    </div>
                    <div className='color-overlay'></div>
                </div>
            </section>
            {/* Header end */}


            <div className='container'>
            <div className='topic-container'>
                    {
                        topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;