import Zoom from "react-reveal/Zoom";
import "../../css/Contact.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

function Contact() {
    return (
        <Zoom bottom>
            <div className="Contact-Section">
                <h1 className="Title">Contact Me</h1>
                <h2 className="Subtitle">Need to enquire about a commission? Have a question that you've been dying to ask? Just want to say hello? click the button below to be sent to the top of the page, where you can find all of my socials!</h2>
                <Link to="top" smooth={true} duration={500} data-tip="Return to top">
                    <a href="/#" style={{color: "white"}}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} style={{marginBottom: "50%"}} size="2x" />
                    </a>
                </Link>
            </div>
        </Zoom>
    );
};

export default Contact;