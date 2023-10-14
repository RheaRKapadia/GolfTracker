import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../constants';
import {styles} from '../styles';
import { useState } from "react";




const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = ()  => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  }

  return (
    // <div>Navbar</div>
    <nav className='w-full flex items-center py-9 fixed top-0 z-20 bg-beige dark:bg-blue-300'>
      <div className='w-full flex justify-between items-center px-9'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={()=> {
            setActive('');
            window.scroll(0, 0);
          }}
        >
          <p className={`${styles.navBarText}`}>GOLF PLANNER</p>
        </Link>
      
      <ul className={` ${styles.navBarText} text-[12px] flex flex-row gap-20`}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        <li >
          <div className='rounded-full ' onClick={handleThemeSwitch}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" 
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </div>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar