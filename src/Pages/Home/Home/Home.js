import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
   return (
      <div>
         <Banner/>
         <Products/>
         <Review/>
      </div>
   );
};

export default Home;