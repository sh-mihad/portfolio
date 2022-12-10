import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className="grid grid-cols-2">
           <div >
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
           <div>
            <h2>hello mello </h2>
            <img src="../../assest/developer.png" alt="" />
           </div>
        </div>
    );
};

export default Hero;