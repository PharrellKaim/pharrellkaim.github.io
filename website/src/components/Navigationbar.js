import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Heroicons v2
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // react-icons for LinkedIn and GitHub
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';

export default function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-background p-5">
            {/* Container for Navigation */}
            <div className="flex items-center justify-between">
                {/* name at the left side */}
                <h1 className="text-text font-mono text-2xl hover:text-primary">
                    <a href="/">Pharrell Kaim</a>
                </h1>

                {/* Icons in the middle */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/pharrell-kaim-091a6a22a" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-text hover:text-primary" />
                    </a>
                    <a href="https://github.com/PharrellKaim" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 text-text hover:text-primary" />
                    </a>
                </div>

                {/* Burger-Button ath the right hand side */}
                <div className="relative z-50">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {/* switch between Bars3Icon and XMarkIcon */}
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6 text-text" />
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-text" />
                        )}
                    </button>
                </div>
            </div>

            {/* Slider-Menu from the right*/}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-background transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}>
                {/* Menu-left */}
                <ul className="flex flex-col space-y-6 mt-20 text-center text-text text-xl">
                    <li>
                        <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
                            About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#experience" onClick={() => setIsOpen(false)}>
                            Experience
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/Blog" onClick={() => setIsOpen(false)}>
                            Blog
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/Impressum" onClick={() => setIsOpen(false)}>
                            Impressun
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
