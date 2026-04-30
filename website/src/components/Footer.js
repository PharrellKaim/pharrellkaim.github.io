import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // react-icons für LinkedIn und GitHub

export default function Footer() {
    return (
        <footer className="bg-background flex flex-col items-center ">
            <div className="flex  space-x-6">
                <a
                    href="https://www.linkedin.com/in/pharrell-kaim-091a6a22a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgrey hover:text-primary"
                >
                    <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                    href="https://github.com/PharrellKaim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgrey hover:text-primary"
                >
                    <FaGithub className="w-8 h-8" />
                </a>
            </div>
            <div >
                <HashLink smooth to="/Impressum" className="text-darkgrey hover:text-primary font-thin">
                    Impressum
                </HashLink>
            </div>
        </footer>
    );
}
