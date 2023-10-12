import { FlexWrap } from "../../ui/flex";
import TopContent from "../../ui/pagewrapper";
import { SectionWrap } from "../../ui/sectionwrap/style";
import { SkillIcon, SkillImg } from "./style";

export default function HomePage() {
    return(
        <TopContent>
            <SectionWrap>
                <h1>
                  Making content with a passion for technical and creative work
                </h1>
                <p>Hello and welcome to my portfolio</p>
                <p>
                  I am a positive and creative girl that love to interact with computers and humans alike.
                </p>
                <button>Projects</button>
                <h2>Keywords</h2>
                <p>React, JavaScript, HTML, CSS, NodeJs, NPM, Wordpress, PHP, MongoDB, design, social, problem solver and optimistic.</p>
                <h2>Do you want to work with me?</h2>
                <a href="/contact">Contact form</a>
                <p>Email me directly at:</p>
                <a href="mailto:trine.marie.sandberg@gmail.com">trine.marie.sandberg@gmail.com 📨</a>
            </SectionWrap>
            <div>
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
            </div>
        </TopContent>
    )
};