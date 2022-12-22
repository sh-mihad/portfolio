import React from 'react';
import logo from '../../src/assest/logo.png'
const Navbar = () => {
    const menuList = <>
    <li><a>Home</a></li>
    <li><a href='https://form.jotform.com/223553356494462'>Contact </a></li>
    <li><a>Resume</a></li>
    </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content bg-[#02bf96]  mt-3 p-2 shadow  rounded-box w-52 ">
             {
                menuList
             }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className='w-44' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                menuList
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#02bf96] border-0 mt-2"><a href="https://drive.google.com/file/d/1tEilDB4iGsE9qwKSRGQ8F3_794fz9EBZ/view">My Resume</a></a>
        </div>
      </div>
    );
};

export default Navbar;