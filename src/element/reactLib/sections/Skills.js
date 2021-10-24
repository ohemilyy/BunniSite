import "../../css/Skills.css";
import Zoom from "react-reveal/Zoom";

import { faJsSquare, faPython, faJava, faRedhat } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "../componentry/GenericFasIcon";

const row2Style = { marginLeft: "15%", marginRight: "15%" };

function Skills() {
    return (
        <Zoom bottom>
            <div className="Skills-Section">
                <h1 className="Title">Experience</h1>
                <h2 className="Subtitle">TL;DR - i have 2+ years of experience in js, and more experience in various other languages and fields.</h2>
            </div>
            <div className="Skills-Row">
                <GenericFasIcon icon={faJsSquare} size="2x" tooltip="JavaScript, 2 years (began July 2019)" />
                <GenericFasIcon icon={faPython} size="2x" tooltip="Python, ~1 year (began January 2020)" />
                <GenericFasIcon icon={faJava} size="2x" tooltip="Java, ~1 year (began January 2021)" />
            </div>
            <div className="Skills-Row">
                <GenericFasIcon icon={faRedhat} size="2x" tooltip="Linux, 4 years (began April 2017; Ubuntu and RHEL is my preferred server distro)" style={row2Style} />
            </div>
        </Zoom>
    );
};

export default Skills;