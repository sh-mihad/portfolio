import React from 'react';
import logo from '../../src/assest/logo.png'
const Navbar = () => {
    const menuList = <>
    <li><a>Home</a></li>
    <li><a href='https://form.jotform.com/223553356494462'>Contact </a></li>
    <li><a>Resume</a></li>
    </>
    return (
        <div>
            <div className="navbar text-white ">
                <div className="flex-1 ">
                    <a className="btn btn-ghost normal-case text-xl" href="/" >
                        <img src={logo} alt="" className='w-44'/>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    {
                                 menuList
                             }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;