import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import './navbar.css'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();
  

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar w-full flex justify-between fixed text-sm text-neutral-200'>
        <div className="navbar-left flex items-center gap-12">
          <img src={logo} alt="" />
          <ul className='flex list-none gap-5'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Tv Show</li>
            <li className='cursor-pointer'>Movies</li>
            <li className='cursor-pointer'>New & Popular</li>
            <li className='cursor-pointer'>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right flex items-center gap-5">
          <img src={search_icon} alt="" className='icons' />
          <p>Children</p>
          <img src={bell_icon} alt="" className='icons' />
          <div className="navbar-profile flex items-center gap-2.5 cursor-pointer">
          <img src={profile_img} alt="" className='profile rounded relative'/>
          <img src={caret_icon} alt="" />
          <div className="dropdown absolute">
            <p onClick={()=>{logout()}} className='text-sm cursor-pointer'>Sign Out of Netflix</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar