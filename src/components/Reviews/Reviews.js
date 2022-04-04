import React from 'react';
import useReviews from '../../hooks/useReviews';


const Reviews = () => {
    const[reviews, setReviews] = useReviews();

    return (
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-24 mt-10'>
            {
                reviews.map(review => 
                 <div className='grid gap-5 border-4 m-4 w-[300px]'>
               
                <img className='mx-auto w-36 h-36 rounded-full mt-2' src={review.picture} alt="" />
                <h2 className='text-xl  mx-auto'>{review.name}</h2>
                <p className='mx-4 text-justify'>{review.comment}</p>
                <p className='mx-4 text-yellow-400 mb-1'>{review.rating} <span>(5)</span></p>
              </div>)
            }
        </div>
    );
};

export default Reviews;