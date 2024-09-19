import React from "react";

export default function Projects() {
    return(
        <div>
            <h1 className=" mx-10 px-10 text-white font-mono text-3xl mb-5 bg-darkgrey inline-block rounded-2xl">Projects</h1>
            <div className="mx-auto px-10">
                <span className="text-primary mr-5 text-2xl">HobbyConnect</span>
            </div>
            <div className="mx-auto px-10">
                <span className="font-thin mt-3"> Hobby Connect is an app designed to help users find friends who share the same hobbies. Originally developed as a school project, the app has since evolved into an ongoing passion project. Its mission is simple: to connect people with shared interests, fostering new friendships and communities around common activities. Whether you're into sports, gaming, arts, or any other hobby, Hobby Connect helps bring like-minded individuals together to enjoy their passions. </span>
            </div>
            <div className="mx-auto px-10 mt-3">
                <a href="https://github.com/HobbyConnect" className="mx-auto px-5 py-2 rounded-xl bg-darkgrey text-white">Learn More</a>
            </div>
            <div className="mx-auto px-10 mt-5 ">
                <span className="text-primary mr-5 text-2xl">TypeScript Todo</span>
            </div>
            <div className="mx-auto px-10">
                <span className="font-thin mt-3"> I developed a ToDo app using TypeScript as a personal project to deepen my understanding of the TypeScript programming language. This project served as a practical exercise to enhance my skills in TypeScript, allowing me to explore its features and benefits in a real-world application. The ToDo app includes essential functionalities such as adding, removing, and marking tasks as complete, all while leveraging TypeScript's strong typing and object-oriented features to build a robust and scalable solution. Through this project, I gained valuable experience in TypeScript's type system and improved my overall development proficiency. </span>
            </div>
            <div className="mx-auto px-10 mt-3">
                <a href="https://github.com/PharrellKaim/TypeScriptTodo" className="mx-auto px-5 py-2 rounded-xl bg-darkgrey text-white">Learn More</a>
            </div>
        </div>
    );
}