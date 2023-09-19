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
      </ul>
      </div>
    </nav>
  )
}

export default Navbar