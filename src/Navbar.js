import React from 'react'

const NavBar = () => {
  return (
    <nav className='nav'>
    
        <ul>
            <li>
                <a href='/'>
                    Home
                </a>
            </li>

            <li>
                <a href='/Contact'>
                    Contact
                </a>
            </li>

            <li>
                <a href='/reviews'>
                    Reviews 
                </a>
            </li>

        </ul>

        
    </nav>
  )
}

export default NavBar;