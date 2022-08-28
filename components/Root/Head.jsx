import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import Image from "next/future/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import links from "/lib/socials.js";
import env from "/lib/publicEnv.js";

const routes = env.nav.routes;

export default function Head() {
    const router = useRouter();
    const [disabledNav, setDisabledNav] = useState(false);
    const [title, setTitle] = useState(env.info.name);

    useEffect(() => {
        if (router.pathname === '/_error') {
            setDisabledNav(true);
            setTitle(`Oops! 404. - ${env.info.name}`);
        } else {
            setDisabledNav(false);
            setTitle(`${routes.find(r => r.path === router.pathname).title} - ${env.info.name}`)
        };
    }, [router.pathname]);

    let images = links.meta.images;
    images.url = env.info.public + images.url;

    return (
        <>
            <NextHead>
                <title>{title}</title>
            </NextHead>
            <NextSeo
                title={title}
                description={links.meta.description}
                additionalLinkTags={
                    [
                        {
                            rel: "icon",
                            href: "/favicon.ico",
                        }
                    ]
                }
                additionalMetaTags={
                    [
                        {
                            name: "theme-color",
                            content: links.meta.colour,
                        }
                    ]
                }
                openGraph={{
                    type: "website",
                    url: env.info.public,
                    title: title,
                    description: links.meta.description,
                    site_name: env.info.name,
                    images: images
                }}
            />
            <div className="py-6 sm:py-12">
                <div className="flex flex-col sm:flex-row py-4 rounded-2xl justify-center items-center gap-y-4 sm:justify-evenly">
                    <Link href="/">
                        <a className="flex flex-row items-center gap-x-4 px-4 py-2 rounded-xl">
                            <Image alt="Avatar" className="w-10 rounded-full" height="64" width="64" src="/coffeedog.png" />
                            <div className="flex flex-col gap-x-2">
                                <h1 className="font-AegixHeader text-gray-100 font-bold text-xl">{env.info.name}</h1>
                            </div>
                        </a>
                    </Link>
                    <div className="flex flex-row items-center gap-x-4 px-4 py-2 rounded-xl">
                        {
                            routes.map(({ path, title }) => (
                                <div key={path}>
                                    {
                                        disabledNav ? (
                                            <>
                                                {
                                                    path === "/" ? (
                                                        <Link href="/">
                                                            <a className={`
                                                                ${router.pathname === path ? 'bg-slate-800' : 'hover:bg-slate-700'} 
                                                                ${router.pathname === "/_error" ? "bg-slate-900 hover:bg-slate-800" : ""} 
                                                                text-gray-100 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                                                                transition ease-in-out duration-250
                                                                hidden sm:flex flex-row items-center gap-x-2
                                                            `}>
                                                                <FontAwesomeIcon icon={faArrowLeft} />
                                                                Back
                                                            </a>
                                                        </Link>
                                                    ) : (
                                                        <button className={`
                                                            ${router.pathname === path ? 'bg-slate-800' : 'hover:bg-slate-800'} 
                                                            ${router.pathname === "/_error" ? "hover:bg-slate-900" : ""} 
                                                            text-gray-100 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                                                            transition ease-in-out duration-250 disabled:cursor-not-allowed
                                                            hidden
                                                        `} disabled>
                                                            {title}
                                                        </button>
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <Link href={path}>
                                                <a className={`
                                                    ${router.pathname === path ? 'bg-slate-800' : 'hover:bg-slate-800'} 
                                                    ${router.pathname === "/_error" ? "hover:bg-slate-900" : ""} 
                                                    text-gray-100 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                                                    transition ease-in-out duration-250
                                                `}>
                                                    {title}
                                                </a>
                                            </Link>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};