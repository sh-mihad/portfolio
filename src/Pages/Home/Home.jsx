import React from 'react';
import About from '../../componetns/About';
import MySkills from '../../componetns/MySkills';
import Hero from './Hero';


const Home = () => {
    return (
        <div className="mx-6 py-16">
        <Hero></Hero>
        <About/>
        <MySkills/>
      </div>
    );
};

export default Home;