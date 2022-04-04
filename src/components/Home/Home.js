import React from 'react';
import shirt from '../../assets/images/tshirt-one'
import useReviews from '../../hooks/useReviews';

import { Link } from 'react-router-dom';


const Home = () => {
    
    const[reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center mx-20 mt-16'>
            <div>
               <h1 className='text-4xl text-amber-500 font-semibold mb-3'> FIND YOUR FAVOURITE T-SHIRT </h1>
               <h2 className='text-2xl text-amber-500 font-semibold mb-3'> WE HAVE AWESOME COLLECTION</h2>
               <p className='text-base text-justify text-amber-800 font-medium mb-5'>We are here for you, we provide quality t-shirts, we take pre-orders, products will sell online and you can get several branches in the city.</p>
               <button className='text-xl border-2 p-3 text-amber-800 border-amber-200'>VIEW SHOP </button>
            </div>
            <div>
                <img src={shirt} alt="" />
            </div>
        </div>

        <div>
          
            <h2 className='flex justify-center text-4xl mt-11 uppercase font-mono'>Customer Review </h2>

          <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-24 mt-10'>
          {
             reviews.slice(0,3).map(review => 
          
              <div className='grid gap-5 border-4 m-4 w-[300px]'>
               
                <img className='mx-auto w-36 h-36 rounded-full mt-2' src={review.picture} alt="" />
                <h2 className='text-xl  mx-auto'>{review.name}</h2>
                <p className='mx-4 text-justify'>{review.comment}</p>
                <p className='mx-4 mb-1 text-yellow-400'>  {review.rating} <span>(5)</span></p>
              </div>
            )
            }
          </div>
           
           

        </div>

        
           
        

         <Link to='/review' className='flex justify-center items-center  w-64 mx-auto bg-amber-500 p-3 text-xl text-white mt-16 mb-24 '>See All Reviews </Link>

        </div>
       
        
    );
};

export default Home;