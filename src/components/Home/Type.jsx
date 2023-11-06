import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter  
          options={{
            strings: [
              "Frontend Developer",
              "Specialization in Frontend Mob|Web",
              "Proficient in React Native",
              "Passionate in Development",
              "Committed Open Source Contributor",
              "Effective Problem Solver",
              "Expertise in Firebase",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type