import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { FaLaptopCode } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import { LiaBarsSolid } from 'react-icons/lia'
import './Nav.css'

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const handleToogle = () => {
        setToggle(!toggle);
    }

    return (
        <section>
            <section className='test'>
                <div className='nav-container'>
                    {/* logo */}

                    <a href="/"><img src="./icon-software.png" width={50} color='white' alt="logo" /></a>


                    {/* menu */}
                    <div className={!toggle ? 'Nav-links' : 'expanded-Nav-links'}>
                        <a className='Nav-link' href="/"> <AiOutlineHome /> Home</a>
                        <a className='Nav-link' href="/Project"><FaLaptopCode />Project</a>
                        <a className='Nav-link' href="/About"> <AiOutlineUser />About</a>
                        <a className='Nav-link' href="/Contact"> <AiOutlinePhone />Contact</a>
                        <a href="./deen-resume.pdf" class="button">Resume</a>
                    </div>

                    {/* toggle-bar */}
                    <div className='toggle-bar'
                        onClick={(handleToogle)}
                    >
                        {toggle ? <LiaBarsSolid size={30} color='white' /> : <BiMenuAltRight size={30} color='white' />}
                    </div>


                </div>
            </section>
        </section>

    )
}

export default Nav