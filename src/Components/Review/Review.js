import React from 'react';

const Review = (props) => {
    const { name, statement, phone, img, rating } = props.review
    return (
        <div className='flex justify-between bg-slate-100  shadow-lg shadow-gray-300/50 mb-10 items-cnenter'>
            <div className='w-96'>
                <img className='h-60  rounded-full ' src={img} alt="" />
            </div>
            <div className='text-left mt-5 ml-5'>
                <h1 className='text-xl font-semibold font-serif mb-2'>Name: {name}</h1>
                <h2 className='font-medium mb-3'>Phone: {phone}</h2>
                <p className='font-mono mb-2'><b>Opinion:</b> {statement}</p>
                <p>Rating: <b>{rating}</b></p>
            </div>
        </div>
    );
};

export default Review;