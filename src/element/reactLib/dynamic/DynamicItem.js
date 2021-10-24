import React, { useEffect, useState } from "react";
import "../../css/Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DynamicItem(props) {
    const validTypes = ["development", "music"];
    const type = props.type;
    if (!validTypes.includes(type)) throw new TypeError("Type of DynamicItem is invalid!");

    const [status, setStatus] = useState("NO_STATUS");
    const [hidden, setHidden] = useState(true);

    async function getDevelopment() {
        if (type !== "development") return;
        let err = false;
        const request = await fetch("https://api.bunni.me/internal/bunni/status").then(res => res.json()).catch(e => {
            err = true;
        });
        if (err === true) return;
        let codeStr = "(stopped coding)";

        if (request.response.code.file == null) setHidden(true);
        if (request.response.code.file !== null) {
            setHidden(false);
            if (request.response.code.workspace === null) {
                if (request.response.code.file === "Idling") codeStr = "(visual studio code) idling";
                else {
                    codeStr = `(visual studio code) editing ${request.response.code.file}`;
                };
            } else {
                if (request.response.code.file === "Idling") codeStr = "(visual studio code) idling";
                else {
                    codeStr = `(visual studio code) editing ${request.response.code.file} in project ${request.response.code.workspace}`;
                };
            };
        };
        setStatus(codeStr);
    };

    async function getMusic() {
        if (type !== "music") return;
        let err = false;
        const request = await fetch("https://api.bunni.me/internal/bunni/spotify").then(res => res.json()).catch(e => {
            err = true;
        });
        if (err === true) return;
        let music = "(stopped listening to Spotify)";

        if (request.response.listening === null) setHidden(true);
        if (request.response.listening === true) {
            setHidden(false);
            music = `(spotify / last.fm) ${request.response.title} by ${request.response.artist}`
        };
        setStatus(music);
    };

    useEffect(() => {
        setTimeout(getDevelopment, (1000 * 2.5));
        setTimeout(getMusic, (1000 * 2.5));

        setInterval(function () {
            getDevelopment();
            getMusic();
        }, 1000 * 15);
    });

    const Result = (
        <div className="LinksMember" data-tip={status} hidden={hidden} style={props.style}>
            <FontAwesomeIcon icon={props.icon} hidden={hidden} />
        </div>
    );

    return Result;
};

export default DynamicItem;

