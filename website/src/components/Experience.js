import React from "react";

export default function Experience() {
    return(
        <div>
            <h1 className=" mx-10 px-10 text-white font-mono text-3xl mb-5 bg-darkgrey inline-block rounded-2xl">Experience</h1>
            <div className="mx-auto px-10">
                <div className="flex-1">
                    <span className="text-primary mr-5 text-2xl">2024-Present</span>
                    <span className="text-2xl font-normal">Software Quality Tester, Garmin Würzburg GmbH</span>
                </div>
                <span className="font-thin mt-3">I had the opportunity to test Garmin's iOS applications, where I became familiar with automated testing using Swift. This involved setting up and managing test plans, designing and executing test procedures, and ensuring that the automated tests aligned with the app’s functional and performance requirements. My experience in this role helped me develop a strong understanding of Swift's testing frameworks, enabling me to create reliable and efficient tests that support continuous integration and development processes. </span>
                <div className="flex-1 mt-3 ">
                    <a className=" bg-secondary rounded-xl p-2 text-white font-extralight text-sm">Automated Testing</a>
                    <a className="m-3 bg-secondary rounded-xl p-2 text-white font-extralight text-sm">Swift</a>
                    <a className="bg-secondary rounded-xl p-2 text-white font-extralight text-sm">Test Procedures</a>
                    <a className="m-3 bg-secondary rounded-xl p-2 text-white font-extralight text-sm">Test Plans</a>
                </div>
                <div className="mt-10">
                    <span className="text-primary mr-5 text-2xl">2021-2024</span>
                    <span className="text-2xl font-normal">Trainee IT Specialist Application Development, Garmin Würzburg GmbH</span>
                </div>
                <span className="font-thin">During my apprenticeship as a IT Specialist for Application Development at Garmin, I had the opportunity to work across several departments, gaining hands-on experience in various fields of software development. This rotation exposed me to a wide range of technologies and development practices, from embedded systems to web development. Throughout this journey, I worked with multiple programming languages, including Java, C++, and Python, each of which deepened my understanding of software engineering. The diverse nature of these experiences helped me build a solid foundation in both the theoretical and practical aspects of software development, giving me the ability to adapt to different environments and challenges."</span>
                <div className="flex-1 mt-3 mb-10 ">
                    <a className=" bg-secondary rounded-xl p-2 text-white font-extralight text-sm">C++</a>
                    <a className="m-3 bg-secondary rounded-xl p-2 text-white font-extralight text-sm">Python</a>
                    <a className="bg-secondary rounded-xl p-2 text-white font-extralight text-sm">Java</a>
                </div>
            </div>
        </div>
    );
}