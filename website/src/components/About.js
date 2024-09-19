import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4">
            {/* System.out.println() Zeile oben */}
            <h1 id="about" className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <code className="text-text text-xl md:text-2xl">
                    System.out.println(<span className="text-primary">"Pharrell Kaim"</span>);
                </code>
            </h1>
            <a className="text-lg md:text-xl text-buttons mb-4 block text-center">
                <span className="text-secondary">Software-Quality-Analyst</span>
            </a>

            {/* Hauptinhalt: Text und Bild übereinander auf mobilen Geräten */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
                {/* Textbereich */}
                <div className="md:w-1/2 text-center md:text-left md:pr-6 mb-6 md:mb-0">
                    <div className="text-justify font-thin text-sm md:text-base leading-relaxed">
                        <p className="mb-4">
                            I’m a dedicated Software Developer with a passion for creating high-quality software solutions. My development journey began at the age of 15, and since then, I have refined my skills through a combination of hands-on experience and formal education.
                        </p>
                        <p className="mb-4">
                            With a robust foundation in software development, supported by professional training, I focus on designing and implementing reliable systems that deliver exceptional performance. I approach each project with a deep understanding of programming principles and a commitment to best practices, ensuring that the solutions I develop are both efficient and scalable.
                        </p>
                        <p>
                            Outside of work, I enjoy indulging in a good book, exploring the great outdoors through hiking, and spending quality time with friends and family. These activities not only provide a refreshing balance to my professional life but also inspire creativity and relaxation.
                        </p>
                    </div>
                </div>

                {/* Bildbereich */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="/Profilbild.JPG"
                        alt="Pharrell Kaim"
                        className="rounded-lg shadow-lg max-w-[200px] md:max-w-sm"
                    />
                </div>
            </div>
        </div>
    );
}
