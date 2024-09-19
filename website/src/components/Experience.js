import React from "react";

export default function Experience() {
    return (
        <div className="px-4 py-6 md:px-10 md:py-10">
            <h1 id="experience" className="mx-auto text-white font-mono text-2xl md:text-3xl mb-5 bg-darkgrey inline-block px-6 py-3 rounded-2xl">
                Experience
            </h1>
            <div className="mx-auto w-full mx-10">
                {/* Erste Erfahrung */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-3">
                        <span className="text-primary text-lg md:text-2xl mr-4 mb-2 md:mb-0">
                            2024-Present
                        </span>
                        <span className="text-base md:text-2xl font-normal">
                            Software Quality Tester, Garmin Würzburg GmbH
                        </span>
                    </div>
                    <p className="font-thin text-justify text-sm md:text-base mb-4">
                        I had the opportunity to test Garmin's iOS applications, where I became familiar with automated testing using Swift. This involved setting up and managing test plans, designing and executing test procedures, and ensuring that the automated tests aligned with the app’s functional and performance requirements. My experience in this role helped me develop a strong understanding of Swift's testing frameworks, enabling me to create reliable and efficient tests that support continuous integration and development processes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            Automated Testing
                        </a>
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            Swift
                        </a>
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            Test Procedures
                        </a>
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            Test Plans
                        </a>
                    </div>
                </div>

                {/* Zweite Erfahrung */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-3">
                        <span className="text-primary text-lg md:text-2xl mr-4 mb-2 md:mb-0">
                            2021-2024
                        </span>
                        <span className="text-base md:text-2xl font-normal">
                            Trainee IT Specialist Application Development, Garmin Würzburg GmbH
                        </span>
                    </div>
                    <p className="font-thin text-justify text-sm md:text-base">
                        During my apprenticeship as an IT Specialist for Application Development at Garmin, I had the opportunity to work across several departments, gaining hands-on experience in various fields of software development. This rotation exposed me to a wide range of technologies and development practices, from embedded systems to web development. Throughout this journey, I worked with multiple programming languages, including Java, C++, and Python, each of which deepened my understanding of software engineering. The diverse nature of these experiences helped me build a solid foundation in both the theoretical and practical aspects of software development, giving me the ability to adapt to different environments and challenges.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            C++
                        </a>
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            Python
                        </a>
                        <a className="bg-secondary rounded-xl px-3 py-1 text-white font-extralight text-xs">
                            Java
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
