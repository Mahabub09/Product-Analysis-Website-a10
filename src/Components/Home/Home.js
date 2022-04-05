import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import IMG from './img.png'


const Home = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <div className='conatiner flex'>
                <div className='ml-16 flex-1 mt-32'>
                    <h1 className='text-left text-4xl font-serif underline underline-offset-8 mb-8'>
                        BLEU DE CHANEL
                    </h1>

                    <h1 className='text-left font-semibold underline underline-offset-7'>PRODUCT</h1>
                    <p className='text-left mb-5'>The most intense of the BLEU DE CHANEL fragrances. Powerful and refined, the Parfum for men reveals the essence of independence and determination. A timeless scent with a strong masculine signature.</p>
                    <h1 className='text-left font-semibold underline underline-offset-7'>COMPOSITION</h1>
                    <p className='text-left'>An invigorating freshness opens, lingering on the warm fullness of cedar and New Caledonian sandalwood that sweeps throughout the intense, aromatic-woody accord, leaving a captivating trail.</p>



                </div>
                <div className='flex-1'>
                    <img src={IMG} alt="" />
                </div>


            </div >
            <div className='mb-10'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
                <Link className=' bg-black text-white font-serif font-medium px-8 py-2 rounded-full ' to='/reviews' > See All</Link>
            </div>
        </div>
    );
};

export default Home;