import React from 'react';
import reactPhoto from "../../src/assest/reactLogo.png"
const MySkills = () => {
    return (
        <div className='mt-20 w-3/4 mx-auto text-center'>
            <h className="text-4xl font-bold">My Skils</h>
            <div className='grid  mt-16 grid-cols-2 lg:grid-cols-4'>
              <div>
                <img src={reactPhoto} className="mb-0" alt="" />
                <h1 className='mt-0'>React Js</h1>
              </div>
              <div>
                <img src={reactPhoto} className="mb-0" alt="" />
                <h1 className='mt-0'>React Js</h1>
              </div>
              <div>
                <img src={reactPhoto} className="mb-0" alt="" />
                <h1 className='mt-0'>React jsx</h1>
              </div>
              <div>
                <img src={reactPhoto} className="mb-0" alt="" />
                <h1 className='mt-0'>React Js</h1>
              </div>
              <div>
                <img src={reactPhoto} className="mb-0" alt="" />
                <h1 className='mt-0'>React Js</h1>
              </div>
              <div>
                <img src={reactPhoto} className="mb-0" alt="" />
                <h1 className='mt-0'>React Js</h1>
              </div>
                
            </div>
        </div>
    );
};

export default MySkills;