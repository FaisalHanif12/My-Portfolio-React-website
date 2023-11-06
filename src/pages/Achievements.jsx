import React, { } from "react";
import "../components/Resume.css"
import Front from "../assets/projects/Front.PNG";
import Crash from "../assets/projects/Crash.PNG";
import UI from "../assets/projects/UI.PNG";
import Figma from "../assets/projects/Figma.PNG";
const Achievements = () => {

    return (

        <div>
            <h2 style={{ marginTop: 130, color: "white", marginBottom: 40 }}>Certificate of Frontend Dev</h2>

            <img style={{ width: 650 }} src={Front} alt="Something is Wrong">

            </img>

            <h2 style={{ marginTop: 90, color: "white", marginBottom: 40 }}>Crash course on Frontend Dev</h2>

            <img style={{ width: 650 }} src={Crash} alt="Something is Wrong">

            </img>

            <h2 style={{ marginTop: 90, color: "white", marginBottom: 40 }}>UX & UI Foundation</h2>

            <img style={{ width: 650 }} src={UI} alt="Something is Wrong">

            </img>

            <h2 style={{ marginTop: 90, color: "white", marginBottom: 40 }}>Certificate of Figma Designs</h2>

            <img style={{ width: 650 }} src={Figma} alt="Something is Wrong">

            </img>

        </div>
    )
}

export default Achievements