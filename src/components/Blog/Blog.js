import React from 'react';

const Blog = () => {
  return (
    <div className='mx-28 mt-28 gap-10 text-justify grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 '>
      <div>
        <h1 className='text-2xl mb-5'> Q1. What is Context API?</h1>
        <p>
        In react application, we pass data from top to bottom via props in components, but sometimes it is difficult for certain types of props that needed many components. for this purpose react provides context API it allows us to pass data through to the component tree without passing props down manually. context is used to share data that can be considered globally for react components tree use this data when needed.
        </p>
      </div>
      <div>
        <h1 className='text-2xl mb-5'>Q2. Inline vs Inline-Block vs Block?</h1>
        <p>
        Inline element does not start on new line its only occupy that needed width. any height and width properties will have no effect.
Inline-Block element same as the inline element where it does not start in new line but you can set height,width properties as needed
Block element starts on new line and it occupies the full width available and you can set height, width values
        </p>
      </div>
    </div>
  );
};

export default Blog;