import React from 'react';

const Navbar = () => {
    const menuList = <>
    <li><a>Home</a></li>
    <li><a>Contact </a></li>
    <li><a>Resume</a></li>
    </>
    return (
        <div>
            <div className="navbar text-white ">
                <div className="flex-1 ">
                    <a className="btn btn-ghost normal-case text-xl" href="/" >Protfolio</a>
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