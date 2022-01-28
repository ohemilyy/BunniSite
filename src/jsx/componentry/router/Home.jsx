import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLastfm } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import ConfigurationFetch from "../../../lib/ConfigurationFetch.js";

export default function Home() {
    const [spotifyString, setSpotifyString] = useState("Not listening");
    const [discordString, setDiscordString] = useState("Offline");
    const [lastFmStyle, setLastFmStyle] = useState({ color: "white" });
    const [discordStyle, setDiscordStyle] = useState({ color: "white" });

    useEffect(() => {
        const executableAPIFunction = async () => {
            const configuration = await ConfigurationFetch();
            fetch(configuration.api.basePath + "/internal/bunni/spotify").then(response => response.json()).then(data => {
                setSpotifyString(data.response.listening ? `${data.response.title} by ${data.response.artist}` : "Not listening");
                setLastFmStyle(data.response.listening ? { color: "D51007" } : { color: "white" });
            }).catch(error => {
                console.error("Error fetching Spotify data:", error);
            });

            fetch(configuration.api.basePath + "/internal/bunni/status").then(response => response.json()).then(data => {
                if (data.response.general.type === "dnd") {
                    setDiscordString("Do not disturb");
                    setDiscordStyle({ color: "ED4245" });
                } else if (data.response.general.type === "idle") {
                    setDiscordString("Idle");
                    setDiscordStyle({ color: "FEE75C" });
                } else if (data.response.general.type === "online") {
                    setDiscordString("Online");
                    setDiscordStyle({ color: "57F287" });
                } else {
                    setDiscordString("Offline");
                    setDiscordStyle({ color: "white" });
                };
            }).catch(error => {
                console.error("Error fetching status data:", error);
            });
        };
        const interval = setInterval(executableAPIFunction, 5000);
        executableAPIFunction();
        

            return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
                <video src="/assets/mp4/watercolour.mp4" autoPlay={true} muted={true} loop={true} style={{ zIndex: "-1", position: "absolute" }} className="hidden sm:block" />
                <div className="PageBannerPhotoOverlay" style={{ zIndex: "-1" }} />
                <h1 className="PageBanner" style={{ zIndex: "1" }}>Home</h1>
            </div>
            <div className="flex gap-y-6 flex-col py-6 h-screen items-center bg-gray-900">
                <img src="https://cdn.discordapp.com/avatars/869311033351749632/e25182db0f5cfda719f49eb11ecaf48b.png?size=2048" alt="My icon" className="w-64 h-64 mt-12 bg-gray-800" style={{ borderRadius: "50%" }} />
                <h1 className="Header">Emily // Bunni</h1>
                <h2 className="Tagline">CyberSecurity Analyst, Cyber Threat Intelligence, System Administrator, Java and Kotlin Software Developer</h2>
                <div className="flex gap-x-6">
                    <Tooltip title="Email" placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="mailto:emily@bunni.me">
                            <FontAwesomeIcon size="2x" icon={faMailBulk} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title="GitHub" placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/ItzBunniYT">
                            <FontAwesomeIcon size="2x" icon={faGithub} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title={`Discord: ${discordString}`} placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="https://discords.com/bio/p/qtemilyy">
                            <FontAwesomeIcon size="2x" icon={faDiscord} style={discordStyle} />
                        </a>
                    </Tooltip>
                    <Tooltip title={`Spotfy: ${spotifyString}`} placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/user/3wwnrnwiszl2i42goq7h4d58q?si=310e7e0a7c6e46ff">
                            <FontAwesomeIcon size="2x" icon={faSpotify} style={{ color: "#1DD05D" }} />
                        </a>
                    </Tooltip>
                </div>
            </div> 
        </div>
    );
};