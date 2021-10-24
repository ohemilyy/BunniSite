import "../../css/Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkItem(props) {
    function hrefOpener() {
        const newWindow = window.open(props.href, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="LinksMember">
            <a onClick={() => hrefOpener()} href="#navigated" className="LinksColour" data-tip={props["data-tip"]}>
                <FontAwesomeIcon icon={props.icon} />
            </a>
        </div>
    );
};

export default LinkItem;

