import Particles from "react-tsparticles";
import "../css/Background.css";

import { default as config } from "./Configuration/BackgroundConf";

function Background() {
    return (
        <Particles
            className="Background"
            id="Background"
            options={config}
        />
    );
};

export default Background;