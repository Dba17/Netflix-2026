import React from 'react'
import './header.css'
import Netflix from '../../assets/favicon.ico'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src={Netflix} alt="Netflix" /></li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><CiSearch /></li>
                    <li><IoMdNotificationsOutline /></li>
                    <li><MdOutlineAccountCircle /></li>
                    <li><IoIosArrowDown /></li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header