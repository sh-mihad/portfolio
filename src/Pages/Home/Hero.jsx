import React from 'react';
import Typewriter from 'typewriter-effect';
import developerImage from "../../assest/developer.png"

const Hero = () => {
    return (
        <div className="flex items-center">
           <div  className='w-3/5'>
           <p className="text-xl">Hello,<span className="text-[#02bf96]">I'am</span> </p>
            <h1 className="text-5xl my-4 font-semibold text-[#02bf96]">Sabbir Hossen</h1>
            <h4 className="flex gap-2 text-2xl">I am a
                <Typewriter
                    options={{
                        strings: ['MERN Stack Developer', 'Front-End Developer', 'React-Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h4>
            <p className="mt-6 w-3/4">
                Web Development is my passion I never tierd for this, I have 2 years of expiriance on this fild. I can make lots of porject using MERN Technologis. I am expert in HTML, CSS , Javascript , React , Tailwind , Node js ,and other tacnologis
            </p>
            <button className="btn mt-7 bg-[#02bf96] border-0">Contact Me</button>
           </div>
           <div className='w-2/5'>
            <img src={developerImage} alt="" className='w-full'/>
           </div>
        </div>
    );
};

export default Hero;