import "../../css/Links.css";
import DynamicItem from "./DynamicItem";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function DynamicRow() {
    return (
        <div className="DynamicRow">
            <a href="https://www.last.fm/user/ItzbunniYT">
                <DynamicItem type="music" icon={faSpotify} style={{ color: "#1DD05D" }} />
            </a>
            <DynamicItem type="development" icon={faCodeBranch} style={{ color: "#22A7F2" }} />
        </div>
    );
};

export default DynamicRow;

