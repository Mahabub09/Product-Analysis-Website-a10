import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left mx-5'>
            <h1 className='text-xl font-semibold font-mono '>1. What is Context API?</h1>
            <p className='mb-10'> <b>Ans. </b> Context API is a React Structure that can solve a lot of problems.Context API make particular data available to all components, it never install a state management library in our project which cost our project performance laggy and increase our bundle size. Context API offer us to exchange unique details and assists in solving prop-drilling from all levels of our application.</p>
            <h1 className='text-xl font-semibold font-mono'>2. What is Semantic Tag?</h1>
            <p><b>Ans. </b> Semantic Tags completed HTML  which introduces meaning to a page through specific elements that provide context as to what is in between the tags.Semantic elements clearl define their meanings and help both the browsers and developers to understand in a better way. </p>

        </div>
    );
};

export default Blogs;