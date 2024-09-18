import React from "react";

export default function Navigationbar() {
    return(
        <div className="flex p-3">
            <h1 className="text-text font-mono text-2xl w-1/2">Pharrell Kaim</h1>
            <ul className=" flex space-x-4 text-background font-sans text-xl ">
                <li><a href="#about" className="bg-secondary rounded-2xl px-3 py-1">About</a></li>
                <li><a href="#experience" className="bg-primary rounded-2xl px-3 py-1 ">Experience</a></li>
                <li><a href="#projects" className="bg-accent rounded-2xl px-3 py-1 ">Projects</a></li>
            </ul>
        </div>
    )
}