import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'


//funckija za linkove da se skroluje na sekciju nakon klika na odredjeni navbar link.
const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#whpt3">What is GPT3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Stuides</a></p>
        <p><a href="#blog">Libraries</a></p>
    </>
)


//BEM -> Block Element Modifier
//[block]__[element]--[modifier]

const Navbar = () => {
    //toggleMenu is variable that's going to let us know are we currently
    //showing the mobile menu or not.

    //setToggleMenu it's function that is going to allow us to change
    //change that variable 
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {/* if toggleMenu  is currently open do first line, if not second line*/}
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {/* if toggleMenu is true  (mobile) render divs*/}
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <Menu />
                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign In</p>
                                <button type='button'>Sign Up</button>
                            </div>
                        </div >
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;