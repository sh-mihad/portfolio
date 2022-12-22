import React from 'react';

import htmllPhoto from "../../src/assest/html-removebg-preview.png"
import cssPhoto from "../../src/assest/css-removebg-preview.png"
import bootstrapPhoto from "../../src/assest/bootstrap-stack-removebg-preview.png"
import taailwindPhoto from "../../src/assest/tailwind-removebg-preview-removebg-preview.png"
import jsPhoto from "../../src/assest/js-removebg-preview.png"
import reactPhoto from "../../src/assest/reactLogo.png"
import muiPhoto from "../../src/assest/mui.png"
import firebasePhoto from "../../src/assest/firebase-removebg-preview.png"
import nodeJsPhoto from "../../src/assest/nodejs__2_-removebg-preview.png"
import expressPhoto from "../../src/assest/exprss_js-removebg-preview.png"
import mongoPhoto from "../../src/assest/mongodb-removebg-preview.png"
import gitPhoto from "../../src/assest/GitHub-Mark-removebg-preview.png"


const MySkills = () => {
    return (
        <div className='mt-20  w-11/12 lg:w-3/4 mx-auto text-center'>
            <h className="text-4xl font-bold">My Skils</h>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-16 place-items-stretch gap-10'>
              <div className='bg-slate-600 p-3 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={htmllPhoto} className=" mx-auto w-full" alt="" />
                <h1 className='mt-0'>HTML</h1>
              </div>
              <div className='bg-slate-600 p-3 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={cssPhoto} className=" mx-auto w-full" alt="" />
                <h1 className='mt-0'>CSS</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={bootstrapPhoto} className=" mx-auto w-full" alt="" />
                <h1 className='mt-0'>Bootstrap</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={taailwindPhoto} className=" mx-auto w-11/12" alt="" />
                <h1 className='mt-2'>Tailwind CSS </h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={jsPhoto} className=" mx-auto w-11/12" alt="" />
                <h1 className='mt-2'>JavaScript</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={reactPhoto} className=" mx-auto w-full" alt="" />
                <h1 className='mt-0'>React Js</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={muiPhoto} className=" mx-auto w-full" alt="" />
                <h1 className='mt-0'>Material  UI</h1>
              </div>
              <div className='bg-slate-600  rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={firebasePhoto} className=" mx-auto w-10/12" alt="" />
                <h1 className='mt-0'>Firebase</h1>
              </div>
              <div className='bg-slate-600 p-3 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={nodeJsPhoto} className=" mx-auto w-10/12" alt="" />
                <h1 className='mt-0'>Firebase</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={expressPhoto} className=" mx-auto w-10/12" alt="" />
                <h1 className='mt-0'>Express Js</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={mongoPhoto} className=" mx-auto w-10/12" alt="" />
                <h1 className='mt-0'>Mongo DB</h1>
              </div>
              <div className='bg-slate-600 p-8 rounded-2xl hover:bg-slate-700 ease-in duration-300'>
                <img src={gitPhoto} className=" mx-auto w-10/12" alt="" />
                <h1 className='mt-0'>Git-Hub</h1>
              </div>
                
            </div>
        </div>
    );
};

export default MySkills;