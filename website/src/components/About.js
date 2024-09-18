import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            <h1 className="text-4xl font-bold ">
                <code className="text-text text-2xl">
                    System.out.println(<span className="text-primary">"Pharrell Kaim"</span>);
                </code>
            </h1>
            <a className="text-xl text-buttons mb-4">
                <span className="text-secondary">Software-Quality-Analyst</span>
            </a>
            <div className="text-justify mx-auto px-10">
                <a className="mb-4">I’m a dedicated Software Developer with a passion for creating high-quality software solutions. My development journey began at the age of 15, and since then, I have refined my skills through a combination of hands-on experience and formal education.</a>
                <br/>
                <a className="mb-4">With a robust foundation in software development, supported by professional training, I focus on designing and implementing reliable systems that deliver exceptional performance. I approach each project with a deep understanding of programming principles and a commitment to best practices, ensuring that the solutions I develop are both efficient and scalable.</a>
                <br/>
                <a className="block">Outside of work, I enjoy indulging in a good book, exploring the great outdoors through hiking, and spending quality time with friends and family. These activities not only provide a refreshing balance to my professional life but also inspire creativity and relaxation.</a>
            </div>
        </div>
    );
}
