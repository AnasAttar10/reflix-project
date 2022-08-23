import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='links'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/catalog"}>Catalog </Link>
                </div>
                <div className='logo'>REFLEX</div>
            </div>
        );
    }
}

export default Nav;