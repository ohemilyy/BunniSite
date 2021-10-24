import "../../css/Links.css";
import LinkItem from "./Item";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function LinksRow() {
    return (
        <div className="Links" id="links">
            <LinkItem href="mailto:emily@bunni.me" icon={faEnvelope} data-tip="Email" />
            <LinkItem href="https://docs.google.com/document/d/1YT7uTUd8fQ7CxjkY1yBdSgMqgT-99aL2BEAof-b1670/edit?usp=sharing" icon={faAddressCard} data-tip="Resume" />
            <LinkItem href="https://dsc.bio/ItzBunniYT" icon={faDiscord} data-tip="Discord (dsc.bio)" />
            <LinkItem href="https://github.com/ItzBunniYT" icon={faGithub} data-tip="GitHub" />
        </div>
    );
};

export default LinksRow;

