import Image from "next/future/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Card(props) {
    return (
        <>
            <div className="flex flex-row justify-between items-center gap-x-4 gap-y-4">
                <div className="relative rounded-xl overflow-hidden">
                    <Link href={props.href || "#"}>
                        <a target={props.href ? "_blank" : undefined} rel={props.href ? "noreferrer noopener" : undefined}>
                            <Image src={props.img} width="1920" height="1080" alt={props.title} className="object-cover w-full h-full text-[#92cded] z-0" style={{ backgroundPosition: "center" }} />
                        </a>
                    </Link>
                    <div className="flex flex-col absolute w-full h-[50%] px-4 py-2 sm:py-4 bottom-0 left-0 justify-end items-start text-white text-xs text-left leading-4 rounded-xl z-20 bg-gradient-to-b from-transparent to-cyan-900 bg-opacity-50">
                        <div className="flex flex-row gap-x-2 items-center">
                            {
                                (props.repository?.type === "github" && props.repository?.href) && (
                                    <Link href={props.repository?.href}>
                                        <a target="_blank" rel="noreferrer noopener" className="text-lg lg:text-2xl hover:text-gray-300 transition ease-in-out duration-250">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Link>
                                )
                            }
                            {
                                (props.repository?.type === "github" && !props.repository?.href) && (
                                    <div className="text-lg lg:text-2xl hover:text-gray-300 hover:cursor-not-allowed transition ease-in-out duration-250">
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                                )
                            }
                            {
                                (
                                    (props.repository?.type === "gitlab" && props.repository?.href) && (
                                        <Link href={props.repository?.href}>
                                            <a target="_blank" rel="noreferrer noopener" className="text-lg lg:text-2xl text-orange-400 hover:text-orange-500 transition ease-in-out duration-250">
                                                <FontAwesomeIcon icon={faGitlab} />
                                            </a>
                                        </Link>
                                    )                                    
                                )
                            }
                            {
                                (
                                    (props.repository?.type === "gitlab" && !props.repository?.href) && (
                                        <div className="text-lg lg:text-2xl text-orange-400 hover:text-orange-500 hover:cursor-not-allowed transition ease-in-out duration-250">
                                            <FontAwesomeIcon icon={faGitlab} />
                                        </div>
                                    )                                    
                                )
                            }
                            <Link href={props.href || "#"}>
                                <a target={props.href ? "_blank" : undefined} rel={props.href ? "noreferrer noopener" : undefined} className="font-AegixHeader text-sm lg:text-2xl text-left font-bold">
                                    {props.title}
                                </a>
                            </Link>
                        </div>
                        {
                                props.description && (
                                    <>
                                        <p className="hidden lg:inline-block font-AegixText text-md text-left font-normal">
                                            {props.description}
                                        </p>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};