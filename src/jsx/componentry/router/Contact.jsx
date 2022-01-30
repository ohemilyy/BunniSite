import "../../css/contact.css";
import { Zoom } from "react-awesome-reveal";

export default function Contact() {
    return (
        <Zoom>
        <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center">
            <div className="Contact-Section">
                <h1 className="Title">Contact Me!</h1>
                <h2 className="Subtitle">Need to enquire about a commission? Have a question that you've been dying to ask? Just want to say hello? You can contact me on Telegram: @ChaosLOL</h2>
            </div>
        </div>
        </Zoom>
    )   
}
