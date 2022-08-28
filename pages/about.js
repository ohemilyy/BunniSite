import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDrowning, faPersonDigging, faPersonWalkingLuggage, faHashtag, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faReact, faLinux, faJs, faWindows, faDocker, faHtml5, faRust, faPython, faDiscord, faJava } from "@fortawesome/free-brands-svg-icons";
import links from "/lib/socials";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
    return (
        <div className="px-12 flex flex-col gap-x-4 gap-y-8">
            <div className="flex flex-col gap-y-6">
                <div>
                    <Image src="https://media.giphy.com/media/Wj7lNjMNDxSmc/giphy.gif" width="249" height="181" alt="wave" className="rounded-xl" />
                </div>
                <h1 className="font-AegixHeader font-bold text-left text-2xl sm:text-4xl"><FontAwesomeIcon icon={faPersonDrowning} className="w-16" /> Who are you?</h1>
                <div className="font-AegixText text-left text-lg xl:pr-[24rem] 2xl:pr-[36rem]">
                    Hi there! 👋
                    I&apos;m Bunni, but you can call me Emily*. 
                    I do many things, but primarily, I&apos;m a Systems Administrator. I&apos;m also (sometimes) a Software Developer. 
                    <br /> <br />
                    In terms of my development experience, I work on a variety of projects with many technologies. 
                    However, as a web developer, I mostly work with JavaScript and frameworks like {" "}
                    <Link href="https://reactjs.org">
                        <a target="_blank" rel="noreferrer noopener" className="text-blue-400"> 
                            <FontAwesomeIcon icon={faReact} className="w-5" /> React
                        </a>
                    </Link>.
                    But when it comes to software/application development, I work with Kotlin or Java and frames works like {" "}
                    <Link href="https://spring.io/projects/spring-boot">
                        <a target="_blank" rel="noreferrer noopener" className="text-blue-400"> 
                            <FontAwesomeIcon icon={faJava} className="w-5" /> Spring and ktor
                        </a>
                        </Link>. When it is not development related you can find me working in the Cyber Security field. I have a passion for Threat Intelligence and System Administration and some times Ethical Hacking.
                </div>
                <h1 className="font-AegixHeader font-bold text-left text-2xl sm:text-4xl"><FontAwesomeIcon icon={faPersonDigging} className="w-16" /> What experience do you have?</h1>
                <div className="font-AegixText text-left text-lg xl:pr-[24rem] 2xl:pr-[36rem]">
                    I have a wide range of experience in various programming languages and design fields.
                    <ul className="list-disc ml-8 mt-4">
                        <li>
                            <b>Software development</b>: 8 years

                        </li>
                        <li className="ml-4">
                                <b>Languages</b>: <FontAwesomeIcon icon={faJs} className="w-5" /> JavaScript/TypeScript, <FontAwesomeIcon icon={faRust} className="w-5" /> Rust, <FontAwesomeIcon icon={faJava} className="w-5" /> Java and Kotlin, <FontAwesomeIcon icon={faPython} className="w-5" /> Python
                            </li>
                        <li>
                            <b>Backend website development</b>: 4 years
                        </li>
                        <li className="ml-8">
                                <b>API Frameworks</b>: Next.js, Express.js and Fastify, ASP.NET Core and Blazor
                            </li>
                            <li className="ml-8">
                                <b>Databases</b>: PostgreSQL, MySQL, MongoDB, Redis
                            </li>
                        <li>
                            <b>Web development</b>: 2-3 years

                        </li>
                        <li className="ml-8"><b><FontAwesomeIcon icon={faReact} className="w-5" /> React</b>: Half a year</li>
                        <li className="ml-8"><b><FontAwesomeIcon icon={faHtml5} className="w-5" /> Pure HTML/CSS</b>: 2-3 years</li>
                        <li className="ml-8"><b><FontAwesomeIcon icon={faJava} className="w-5" /> Springboot</b>: 5 months</li>
                        <li className="ml-8"><b><FontAwesomeIcon icon={faJava} className="w-5" /> ktor</b>: 3 months</li>

                        <li>
                            <b>Systems administration</b>: 6 years
                        </li>
                        <li className="ml-8">
                        <b><FontAwesomeIcon icon={faLinux} className="w-5" /> Linux</b>: 4 years
                        </li>
                        <li className="ml-14">
                                    <b>Expertise</b>: Containerization and orchestration (e.g. <FontAwesomeIcon icon={faDocker} className="w-5" /> Docker/Podman), infrastructure and system security, network security, DevOps
                                </li>
                    </ul>
                </div>
                <h1 className="font-AegixHeader font-bold text-left text-2xl sm:text-4xl"><FontAwesomeIcon icon={faPersonWalkingLuggage} className="w-16" /> How can I contact you?</h1>
                <div className="font-AegixText text-left text-lg xl:pr-[24rem] 2xl:pr-[36rem]">
                    If you would like to contact me regarding a potential web design commission, backend project, you should see the
                    {" "}
                    <Link href="https://hydrabank.systems">
                        <a target="_blank" rel="noreferrer noopener" className="text-blue-400"> 
                            Hydrabank
                        </a>
                    </Link>
                    {" "}
                    website - this site contains information about my pricing and more details about my work (alongside other information on how to hire my team in general for work).
                    <br /> <br />
                    For other commissions (e.g. minecraft development, management, system administration), business enquiries, or if you just want to say hello - you can reach me at{" "}
                    <Link href={links.email}>
                        <a target="_blank" rel="noreferrer noopener" className="text-blue-400"> 
                            <FontAwesomeIcon icon={faEnvelope} className="w-5" /> ohemilyy@proton.me
                        </a>
                    </Link>.
                    You can also reach me via <br />
                    <Link href={links.discord}>
                        <a target="_blank" rel="noreferrer noopener" className="text-blue-400"> 
                            <FontAwesomeIcon icon={faDiscord} className="w-5" /> Discord (always active)
                        </a>
                    </Link> if you need live communication.

                    <br /> <br />

                    Thank you for taking a look at my website!
                </div>
            </div>
        </div>
    );
};