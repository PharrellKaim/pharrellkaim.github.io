import React from "react";

export default function Projects() {
    return (
        <div className="px-4 py-6 md:px-10 md:py-10">
            <h1 id="projects" className="mx-auto text-white font-mono text-2xl md:text-3xl mb-5 bg-darkgrey inline-block px-6 py-3 rounded-2xl">
                Projects
            </h1>

            {/* Project 1: HobbyConnect */}
            <div className="mx-auto w-full mx-10">
                <div className="flex flex-col md:flex-row mb-5 items-center md:items-start">
                    <div className=" md:mr-6 mb-4 md:mb-0">
                        <img
                            src="/hcImage.png"
                            alt="HobbyConnect"
                            className="rounded-lg shadow-md  max-w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-primary text-lg md:text-2xl mr-5">
                            HobbyConnect
                        </span>
                        <p className="font-thin text-justify text-sm md:text-base mt-3 mb-4">
                            Hobby Connect is an app designed to help users find friends who share the same hobbies. Originally developed as a school project, the app has since evolved into an ongoing passion project. Its mission is simple: to connect people with shared interests, fostering new friendships and communities around common activities. Whether you're into sports, gaming, arts, or any other hobby, Hobby Connect helps bring like-minded individuals together to enjoy their passions.
                        </p>
                        <div className="text-center md:text-left">
                            <a href="https://github.com/HobbyConnect" className="inline-block hover:bg-primary px-5 py-2 rounded-xl bg-darkgrey text-white">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

            {/* Project 2: CronJob Monitor */}
            <div className="mx-auto w-full mx-10">
                <div className="flex flex-col md:flex-row mb-5 items-center md:items-start">
                    <div className=" md:mr-6 mb-4 md:mb-0">
                        <img
                            src="/cronJobMonitorOverview.png"
                            alt="CronJobMonitor"
                            className="rounded-lg shadow-md w-80 h-56 max-w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-primary text-lg md:text-2xl mr-5">
                            CronJob Monitor
                        </span>
                        <p className="font-thin text-justify text-sm md:text-base mt-3 mb-4">
                            I developed a lightweight Cron Job Dashboard using Angular and Angular Material as a personal project to deepen my understanding of Angular and TypeScript. This project served as a hands-on exercise to enhance my skills in building modern web applications, allowing me to explore Angular’s component-based architecture and Material’s design system. The dashboard provides a clear and user-friendly interface to monitor, trigger, and inspect background jobs running on a server. 
                        </p>
                        <div className="text-center md:text-left">
                            <a href="https://github.com/PharrellKaim/cronJobMonitor" className="inline-block hover:bg-primary px-5 py-2 rounded-xl bg-darkgrey text-white">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div> 

                {/* Project 3: TypeScript Todo */}
                <div className="flex flex-col md:flex-row mb-5 items-center md:items-start">
                    <div className=" md:mr-6 mb-4 md:mb-0">
                        <img
                            src="/todoApp.png"
                            alt="TypeScript Todo"
                            className="rounded-lg shadow-md w-80 h-56 object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-primary text-lg md:text-2xl mr-5">
                            TypeScript Todo
                        </span>
                        <p className="font-thin text-justify text-sm md:text-base mt-3 mb-4">
                            I developed a ToDo app using TypeScript as a personal project to deepen my understanding of the TypeScript programming language. This project served as a practical exercise to enhance my skills in TypeScript, allowing me to explore its features and benefits in a real-world application. The ToDo app includes essential functionalities such as adding, removing, and marking tasks as complete, all while leveraging TypeScript's strong typing and object-oriented features to build a robust and scalable solution.
                        </p>
                        <div className="text-center md:text-left">
                            <a href="https://github.com/PharrellKaim/TypeScriptTodo" className="inline-block px-5 py-2 rounded-xl bg-darkgrey text-white hover:bg-primary">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
