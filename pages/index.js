import { faGithub, faDiscord, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialLink from "/components/Home/SocialLink";
import env from "/lib/publicEnv";
import links from "/lib/socials";
import { useState, useEffect } from "react";
import Image from "next/future/image";

let titles = [
  "a user interface designer",
  "a web developer",
  "a systems administrator",
  "a full-stack software engineer",
  "a bedwars player",
  "a cyber security specialist"
];

export default function Home() {
  const [spotify, setSpotify] = useState({ listening: false, title: null, artist: "" });
  const [discord, setDiscord] = useState({ 
    status: {
      type: "offline",
      colour: "747F8D"
    },
    code: {
      active: false
    }
  });
  
  const [avatar, setAvatar] = useState({
    src: "/coffeedog.png",
    loading: true
  });

  useEffect(() => {
    async function getSpotify() {
      const res = await fetch(`${env.info.api}/internal/bunni/spotify`).then(res => res.json()).catch(e => {
        return {
          status: 500,
          response: {
            listening: false,
            title: null,
            artist: null
          }
        };
      });
      
      if (res.status === 200) {
        setSpotify({
          listening: res.response.listening,
          title: res.response.title,
          artist: res.response.artist
        });
      };
    };
    

    async function getDiscord() {
      const res = await fetch(`${env.info.api}/internal/bunni/status`).then(res => res.json()).catch(e => {
        return {
          status: 500,
          response: {
            "status": 200,
            "response": {
              "general": {
                "type": "offline",
                "colour": "747F8D"
              },
              "custom": null,
              "richPresence": [
                
              ],
              "code": {
                "file": null,
                "workspace": null
              }
            }
          }
        };
      });

      if (res.status === 200) {
        setDiscord({
          status: {
            type: res.response.general.type
          },
          code: {
            active: res.response.code.file !== null
          }
        });
      };
    };

    async function getAvatar() {
      const discordAvatar = await fetch(`${env.info.api}/internal/bunni/avatar`).then(res => res.json()).catch(e => {
        return {
          status: 500,
          response: "/coffeedog.png"
        }
      });

      setAvatar({
        src: discordAvatar.response,
        loading: false
      });
    };

    getSpotify();
    getDiscord();
    getAvatar();

  }, []);

  return (
    <>
      <div className="px-4 sm:px-0 sm:flex flex-col gap-x-4 gap-y-4 justify-center items-center h-[50vh]">
        <div className="px-24 card sm:px-16 flex flex-col sm:flex-row items-center justify-center sm:justify-around sm:w-[80%] gap-x-8 gap-y-8">
          <Image alt="Avatar" className={`w-auto sm:w-24 md:w-36 rounded-full ${avatar.loading ? "animate-pulse bg-gray-100" : ""}`} src={avatar.loading ? "/whitebg.png" : avatar.src} width={128} height={128} />
          <div className="flex flex-col gap-y-4 sm:gap-y-2">
            <h1 className="font-AegixHeader text-4xl font-bold text-center sm:text-right">{env.info.name}</h1>
            <h2 className="font-AegixSubheader text-center sm:text-right">
              I can do a lot of things, but I&apos;m mainly <br />a <b>Software Developer</b> and <b>a Systems Administrator</b>.
            </h2>
            <div className="flex flex-row gap-x-4 text-2xl justify-center sm:justify-end items-center">
              <SocialLink 
                href={`mailto:${links.email}`}
                tooltipColour={"#1e293b"}
                tooltip={
                  <span className="font-AegixHeader">
                    Email
                  </span>
                }
                icon={faEnvelope} 
              />
              <SocialLink 
                href={links.github}
                tooltipColour={"#1e293b"}
                tooltip={
                  <span className="font-AegixHeader">
                    GitHub
                  </span>
                }
                icon={faGithub} 
              />
                            <SocialLink 
                href={links.discord}
                icon={faDiscord}
                tooltipColour={discord.code.active ? "#0078b9" : "#1e293b"}
                tooltip={
                  discord.code.active ? <span className="font-AegixHeader">
                    Working in <b>Visual Studio Code</b>
                  </span> : <span className="font-AegixHeader">
                    Currently <b>{env.discord.discordStatusFriendlyMap[discord.status.type]}</b>
                  </span>
                }
                customColour
                className={
                  discord.code.active ? "text-code-default hover:text-code-darker"
                  :
                  `${discord.status.type === "offline" ? "hover:text-gray-300" : `${env.discord.discordColourMap[discord.status.type]?.default} ${env.discord.discordColourMap[discord.status.type]?.hover}`}`
                } 
              />
              <SocialLink href={links.spotify}
                icon={faSpotify}
                tooltipColour="#1e293b"
                tooltip={
                  <span className="font-AegixHeader">
                    {spotify.listening ? <>Listening to <b>{spotify.title}</b> by <b>{spotify.artist}</b></> : <>Not listening to anything</>}
                  </span> 
                }
                customColour 
                className={`${spotify.listening ? "text-green-400 hover:text-green-500" : "hover:text-gray-300"}`} 
              />
            </div>
          </div>
        </div>
        <iframe class="discord" src="https://discordapp.com/widget?id=1082749720872636518&theme=dark"/>

      </div>
    </>
  );
};