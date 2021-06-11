import React from 'react'
import './header.scss';
const Header = ({title}) => {
        return (
            <>
            <header className="header">
                <h1>{title}</h1>
            </header>
            </>
        )
}

export default Header;
