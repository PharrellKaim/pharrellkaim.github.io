import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Heroicons v2
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // react-icons für LinkedIn und GitHub

export default function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-background p-5">
            {/* Container für die Navigation */}
            <div className="flex items-center justify-between">
                {/* Name auf der linken Seite */}
                <h1 className="text-text font-mono text-2xl">Pharrell Kaim</h1>

                {/* Icons in der Mitte */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/pharrell-kaim-091a6a22a" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-text hover:text-primary" />
                    </a>
                    <a href="https://github.com/PharrellKaim" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 text-text hover:text-primary" />
                    </a>
                </div>

                {/* Burger-Button auf der rechten Seite */}
                <div className="relative z-50">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {/* Bedingter Wechsel zwischen Bars3Icon und XMarkIcon */}
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6 text-text" />
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-text" />
                        )}
                    </button>
                </div>
            </div>

            {/* Slider-Menü von rechts */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-background transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}>
                {/* Menü-Links */}
                <ul className="flex flex-col space-y-6 mt-20 text-center text-text text-xl">
                    <li>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
