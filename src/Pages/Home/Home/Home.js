import React from 'react';
import NewsLatter from '../../Newlatter/NewsLatter';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
   return (
      <div>
         <Banner/>
         <Products/>
         <Review/>
         <NewsLatter/>
      </div>
   );
};

export default Home;