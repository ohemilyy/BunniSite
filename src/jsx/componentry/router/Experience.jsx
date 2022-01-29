import "../../css/Experience.css";
import { faJsSquare, faPython, faJava, faKorvue, faRedhat } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "../GenericFasIcon";
import { Zoom } from "react-awesome-reveal";


const row2Style = { marginLeft: "15%", marginRight: "15%" };

export default function Experience() {
    
    return (
        <Zoom>
        <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center">
            <div className="Skills-Section">
                <h1 className="Title">Experience</h1>
                <h2 className="Subtitle">TL;DR - i have 2+ years of experience in js, and more experience in various other languages and fields.</h2>
            </div>
            <div className="Skills-Row">
                <GenericFasIcon icon={faJsSquare} size="2x" tooltip="JavaScript, 2 years (began July 2019)" />
                <GenericFasIcon icon={faPython} size="2x" tooltip="Python, ~1 year (began January 2020)" />
                <GenericFasIcon icon={faJava} size="2x" tooltip="Java, ~1 year (began January 2021)" />
                <GenericFasIcon icon={faKorvue} size="2x" tooltip="Kotlin, ~2 Months (began December 2021)" />
            </div>
            <div className="Skills-Row">
                <GenericFasIcon icon={faRedhat} size="2x" tooltip="Linux, 4 years (began April 2017; Ubuntu and RHEL is my preferred server distro)" style={row2Style} />
            </div>
        </div>
        </Zoom>
    )   
}
