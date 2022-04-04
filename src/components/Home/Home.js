import React from 'react';
import shirt from '../../assets/images/tshirt-one'
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const[reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center mx-20 mt-16'>
            <div>
               <h1 className='text-4xl text-amber-500 font-semibold mb-3'> FIND YOUR FAVOURITE T-SHIRT </h1>
               <h2 className='text-2xl text-amber-500 font-semibold mb-3'> WE HAVE AWESOME COLLECTION</h2>
               <button className='text-xl border-2 p-3 text-amber-800 border-amber-200'>VIEW SHOP </button>
            </div>
            <div>
                <img src={shirt} alt="" />
            </div>
        </div>

        <div>
            {
             reviews.map(review => <Reviews
             key={review._id}
             review={review}
             > </Reviews>)
            }
            <h2 className='flex justify-center text-4xl mt-11'>Customer Review </h2>
            <button className='flex justify-center mx-auto bg-amber-500 p-3 text-xl text-white mt-48 mb-24 '>See All Reviews </button>
           

        </div>

        </div>
       
        
    );
};

export default Home;