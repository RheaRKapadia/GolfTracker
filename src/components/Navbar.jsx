import React from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../constants';
import {styles} from '../styles';

const Navbar = () => {
  return (
    // <div>Navbar</div>
    <nav className='w-full flex items-center py-9 fixed top-0 z-20 bg-beige'>
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
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar