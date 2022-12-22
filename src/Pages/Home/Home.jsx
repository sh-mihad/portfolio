import React from 'react';
import About from '../../componetns/About';
import MySkills from '../../componetns/MySkills';
import ContactMe from './ContactMe';
import Hero from './Hero';
import Portfolio from './Portfolio';



const Home = () => {
    return (
        <div className="mx-6 py-10">
        <Hero></Hero>
        <About/>
        <MySkills/>
        <Portfolio/>
        <ContactMe/>
      </div>
    );
};

export default Home;