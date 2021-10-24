import React, { useEffect, useState } from "react";
import "../../css/Avatar.css";

let ColourBorder = true;

function ApiAvatar() {
    const [avatarURL, setAvatarURL] = useState("/kylar3.png");
    const [hex, setHex] = useState("747F8D");
    const [status, setStatus] = useState("Offline on Discord");
    useEffect(function () {
        getStatus();
        getAvatar();
    }, []);

    // No longer used, however it's still here if you'd like to enable it otherwise.
    // Just toggle the ColourBorder boolean at the top of the page to enable it.
    async function getStatus() {
        if (ColourBorder === false) {
            setStatus(null);
            return setHex("00000000");
        };
        let err = false;
        const request = await fetch("https://api.bunni.me/internal/bunni/status").then(r => r.json()).catch(e => {
            err = true;
        });
        if (err === true) return;
        const value = request.response.general.colour.replace("#", "".trim()).trim();
        const stat = request.response.general.type;
        setHex(value);
        if (stat === "dnd") {
            setStatus("Do Not Disturb on Discord");
        } if (stat === "idle") {
            setStatus("Idling on Discord");
        } if (stat === "online") {
            setStatus("Online on Discord");
        } if (stat === "offline") {
            setStatus("Offline on Discord");
        };
    };

    async function getAvatar() {
        let err = false;
        const request = await fetch("https://api.bunni.me/internal/bunni/avatar").then(r => r.json()).catch(e => {
            err = true;
        });
        if (err === true) return;

        setAvatarURL(request.response);
    };
    return (
        <img
        src={avatarURL}
        alt="Profile"
        data-tip={status}
        style={{ borderColor: `#${hex}` }}
        className="avatar-9hCM8K"
        />
    );
};

export default ApiAvatar;