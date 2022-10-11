import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1 className='my-5'>Blog</h1>
            <div className="question">
                <div className="blog-text-container">
                    <h3>Q1: What is the purpose of react router?</h3>
                    <p className="blog-p">
                        Ans: React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view. A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application.
                    </p>
                </div>

            </div>
            <div className="question">
                <div className="blog-text-container">
                    <h3>Q2: How does context api work</h3>
                    <p className="blog-p">
                        Ans: React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree. To work with context api we need React.createContext(). It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>
                </div>

            </div>
            <div className="question">
                <div className="blog-text-container">
                    <h3>Q3: What is useRef hook?</h3>
                    <p className="blog-p">
                        Ans: The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;