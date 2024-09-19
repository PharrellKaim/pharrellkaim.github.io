import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // react-icons für LinkedIn und GitHub

export default function Footer() {
    return (
        <footer className="bg-background py-4">
            <div className="flex justify-center items-center space-x-6">
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgrey hover:text-primary"
                >
                    <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkgrey hover:text-primary"
                >
                    <FaGithub className="w-8 h-8" />
                </a>
            </div>
        </footer>
    );
}
