import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FeJob from '../Featured Jobs/FeJob';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Category></Category>
            <FeJob></FeJob>
                <h2>This is Home</h2>
        </div>
    );
};

export default Home;