import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    
    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>Navbar</a>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>                          
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact'>Contact</Link>                          
                        </li>                      
                    </ul>
                </div>
            </nav>
        );
    }

}