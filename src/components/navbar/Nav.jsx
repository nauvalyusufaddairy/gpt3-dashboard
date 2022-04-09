import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from "../../assets/logo.svg"
import "./navbar.css"

function Nav() {
  return (
 <>
 <div className='gpt3__navbar'>
   <div className='gpt3__navbar-links'>
     <div className='gpt3__navbar-links-logo'>
       <img src={logo} alt="logo"/>
     </div>
     <div className='gpt3__navbar-links-container'>
       <p><a href='#home'>Home</a></p>
       <p><a href='#wgpt3'>What is GPT?</a></p>
       <p><a href='#possibility'>Open AI</a></p>
       <p><a href='#features'>Case Study </a></p>
       <p><a href='#blog'> Library</a></p>

     </div>
<div className='gpt3__navbar-sign'>
  <p>sign in</p>
  <button type='button'>sign up</button>

</div>
   </div>

 </div>
 </>
  )
}

export default Nav