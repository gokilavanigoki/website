import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header (){
    const [menu, setMenu]=useState(true)
    return <header className='flex justify-between px-5 py-5 bg-primary '>
    <a className= "font-bold text-white"href='/'> EduHub
    </a>
    <nav className="hidden md:block">
    <ul className='flex font-medium text-white items-center'>
      <li><a href='/'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#project'>Project</a></li>
      <li><a href='#resume'>Resume</a></li>
      <li><a href='#contact'>Contect</a></li>
    </ul>
    </nav>
    { menu && <nav className="block md:hidden ">
    <ul onClick={()=>setMenu (!menu)} className='flex  flex-col font-medium text-white mobile-nav'>
      <li><a href='/'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#project'>Project</a></li>
      <li><a href='#resume'>Resume</a></li>
      <li><a href='#contact'>Contect</a></li>
    </ul>
    </nav>}
    <button  onClick={() =>setMenu(!menu)}className='block md:hidden'><Bars3Icon  className='text-white h-6'/></button>
    </header>
    
}