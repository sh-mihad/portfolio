import React from 'react';
import About from '../../componetns/About';
import MySkills from '../../componetns/MySkills';
import Hero from './Hero';
import Portfolio from './Portfolio';



const Home = () => {
    return (
        <div className="mx-6 py-10">
        <Hero></Hero>
        <About/>
        <MySkills/>
        <Portfolio/>
      </div>
    );
};

export default Home;