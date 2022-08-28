import Card from "/components/Portfolio/Card";
import { opensource, closedsource } from "/lib/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import links from "/lib/socials";

export default function Portfolio() {
    return (
        <div className="px-12 flex flex-col gap-x-4 gap-y-8 items-center justify-center sm:items-start sm:justify-start">
            <div className="flex flex-row gap-x-4 items-center">
                <h1 className="font-AegixHeader font-bold text-center sm:text-left text-2xl sm:text-4xl">Project Showcase</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                {
                    closedsource.map((project, index) => {
                        return (
                            <Card key={index} {...project} />
                        );
                    })
                }
            </div>

            {/* Non-Phone */}
                <div className="hidden sm:flex flex-row gap-x-4 items-center">
                    <Link href={links.github}>
                        <a target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faGithub} className="hidden sm:inline-flex text-4xl hover:text-gray-300 transition ease-in-out duration-250" /> 
                        </a>
                    </Link>
                    <h1 className="font-AegixHeader font-bold text-center sm:text-left text-2xl sm:text-4xl">Open Source</h1>
                </div>
            {/* Non-Phone */}
                
            {/* Phone */}
                <div className="sm:hidden flex flex-row gap-x-4 items-center">
                        <h1 className="font-AegixHeader font-bold text-center sm:text-left text-2xl sm:text-4xl">Open Source</h1>
                </div>
            {/* Phone */}
            
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                {
                    opensource.map((project, index) => {
                        return (
                            <Card key={index} {...project} />
                        );
                    })
                }
            </div>
        </div>
    );
};