import React from "react";
import "./header.css"
const Header = () => {
    return(
        <header className="header">
            <div className="header-section global-width">
                <a href="#" className="logo">
                    Sera Mariam George
                </a>
                <nav className="header-nav">
                    <ul className="ul-reset header-menu">
                        <li className="list-item">
                            <a href="#" className="link-item">Home</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="link-item">About</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="link-item">Skills</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="link-item">Portfolio</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="link-item">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
export default Header;
