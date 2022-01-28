import { ProjectCard } from "../Card";
export default function Projects() {
    return (
        <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center">
            <h1 className="Header">Projects</h1>
            <h2 className="Tagline">A few projects and small software utilities of mine. Some are big, some are small.</h2>
            <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProjectCard>
                    <ProjectCard.Title>Bunni Systems</ProjectCard.Title>

                    <ProjectCard.Description>
                        Systems administration, and development. You can hire me by contacting me on telegram @ChaosLOL!
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://bunni.me/</ProjectCard.Link>

                    <ProjectCard.Image>https://github.com/ItzBunniYT/BunniSite/blob/main/public/assets/img/icon.png</ProjectCard.Image>

                    <ProjectCard.ImageDescription>Bunni logo</ProjectCard.ImageDescription>
                    
                    <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                </ProjectCard>
                
                <ProjectCard>
                    <ProjectCard.Title>ScalaGG</ProjectCard.Title>

                    <ProjectCard.Description>
                        Software Development and Marketing Team ran by GrowlyX. I am the Manager of this Development Team and the Head of Security for this team.
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://scala.gg/</ProjectCard.Link>

                    <ProjectCard.Image>https://pbs.twimg.com/profile_images/1469410563939835911/FDMrzgeZ_400x400.jpg</ProjectCard.Image>

                    <ProjectCard.ImageDescription>Scala logo</ProjectCard.ImageDescription>
                    
                    <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>RavenGuard</ProjectCard.Title>
                    
                    <ProjectCard.Description>
                        Protect your Minecraft servers and websites from the worst of attacks. <b>Coming soon.</b>
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://ravenguard.space</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/projects/ravenguard.png</ProjectCard.Image>

                    <ProjectCard.ImageDescription>RavenGuard</ProjectCard.ImageDescription>

                    <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>Nexus</ProjectCard.Title>

                    <ProjectCard.Description>
                        A website-blog-forum solution thing. It's kind of like WordPress, but powered by Node instead of PHP, I suppose? The frontend is open source at the moment, with the backend coming later.
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://github.com/Dannnington/Fission</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/projects/fission.png</ProjectCard.Image>

                    <ProjectCard.ImageDescription>A screenshot of Fission's UI</ProjectCard.ImageDescription>

                    <ProjectCard.ButtonText>Fission Repository</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>MineRIP</ProjectCard.Title>

                    <ProjectCard.Description>
                        Minecraft Network. I am the Owner of this Network and the Head of Staff for this server.
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://mine.rip/</ProjectCard.Link>

                    <ProjectCard.Image>https://cdn.discordapp.com/attachments/888503734248812594/936727575663902730/favicon.png</ProjectCard.Image>

                    <ProjectCard.ImageDescription>MineRIP logo</ProjectCard.ImageDescription>
                    
                    <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                </ProjectCard>

            </div>
        </div>
    );
};