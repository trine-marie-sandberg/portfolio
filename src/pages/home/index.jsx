import { useRef } from "react";
import { Link } from "react-router-dom";
import { FlexWrap } from "../../ui/flex";
import FlexContent, { GridContent } from "../../ui/wrappers";
import { SectionWrap } from "../../ui/sectionwrap/style";
import { HeadingBgContrast, HeadingWrap, SkillIcon, SkillImg, SkillsContainer } from "./style";
import { BtnPrimary, BtnSecondary } from "../../ui/btns";
import ProjectCards from "../../ui/cards";

export default function HomePage() {
    const projectsRef = useRef(null);
    function scrollToProjects() {
        projectsRef.current.scrollIntoView({behavior: "smooth"});
    };
    return(
        <div>
            <FlexContent>
                <SectionWrap>
                    <HeadingWrap>
                        <HeadingBgContrast>
                        <i className="fa-solid fa-quote-left"></i>
                            <h1>Creating content with a passion❤️‍🔥for technical and creative work</h1>
                        </HeadingBgContrast>
                    </HeadingWrap>
                    <h2>Hello and welcome to my portfolio</h2>
                    <p>
                    I am a positive and creative girl that love to interact with computers and humans alike.
                    Check out my projects, or read the about me page to learn about what I do.
                    </p>
                    <FlexWrap>
                        <BtnPrimary>
                            <button
                              onClick={scrollToProjects}
                            >
                                Projects
                            </button>
                        </BtnPrimary>
                        <BtnSecondary>
                            <Link to={"/about"}>About me</Link>
                        </BtnSecondary>
                    </FlexWrap>
                    <h3>Keywords</h3>
                    <p>React, JavaScript, HTML, CSS, NPM, Wordpress, PHP, MongoDB, design, social, problem solver and optimistic.</p>
                    <h2>Do you want to work with me?</h2>
                    {/* <BtnSecondary>
                        <Link to="/contact">Contact form</Link>
                    </BtnSecondary> */}
                    <p>📨 Email me directly at:</p>
                    <a href="mailto:trine.marie.sandberg@gmail.com">trine.marie.sandberg@gmail.com</a>
                </SectionWrap>
                <SkillsContainer>
                    <div>
                        <h2>Technical</h2>
                        <FlexWrap>
                            <SkillImg src="/js.png" alt="Javascript"/>
                            <SkillImg src="/html.png" alt="html"/>
                            <SkillImg src="/css.png" alt="css"/>
                            <SkillIcon className="fa-brands fa-react"></SkillIcon>
                            <SkillImg src="/wp.png" alt="Wordpress"/>
                            <SkillImg src="/mbdb.png" alt="MongoDB"/>
                            <SkillImg src="/bootstrap.png" alt="Bootstrap"/>
                            <SkillImg src="/pa.png" alt="Power apps"/>
                            <SkillImg src="/styled.png" alt="Styled components"/>
                            <SkillImg src="/sass.png" alt="sass"/>
                        </FlexWrap>
                    </div>
                    <div>
                        <h2>Creative</h2>
                        <FlexWrap>
                            <SkillImg src="/ps.png" alt="Adobe Photoshop"/>
                            <SkillImg src="/ai.png" alt="Adobe Ilustrator"/>
                            <SkillImg src="/ae.png" alt="Adobe After Effects"/>
                            <SkillImg src="/xd.png" alt="Adobe xd"/>
                            <SkillImg src="/figma.png" alt="Figma"/>
                        </FlexWrap>
                    </div>
                </SkillsContainer>
            </FlexContent>
            <GridContent>
                <h2 ref={projectsRef}>Projects</h2>
                <ProjectCards/>
            </GridContent>
        </div>
    )
};