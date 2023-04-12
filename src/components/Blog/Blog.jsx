import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
           <div>
            <h3><strong>Qus:</strong>What is context API?? When should I used context API?? </h3>
            <h4><strong>Ans:</strong>Context Api: The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
            
            Context is primarily used when some data needs to be accessible by many components at different nesting levels. 
            </h4>
           </div>

           <div>
           <h3><strong>Qus:</strong>What is custom Hook in react?? </h3>
            <h4><strong>Ans:</strong>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications 
            </h4>
           </div>
           <div>
           <h3><strong>Qus:</strong>What is useRef?? </h3>
            <h4><strong>Ans:</strong>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly 
            </h4>
           </div>
           <div>
           <h3><strong>Qus:</strong>What is useMemo?? </h3>
            <h4><strong>Ans:</strong>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
            </h4>
           </div>
        </div>
    );
};

export default Blog;