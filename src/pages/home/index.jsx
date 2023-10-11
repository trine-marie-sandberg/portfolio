import TopContent from "../../ui/pagewrapper";
import { SectionWrap } from "../../ui/sectionwrap/style";

export default function HomePage() {
    return(
        <TopContent>
            <SectionWrap>
                <h1>
                  Making content with a passion for technical and creative work
                </h1>
                <p>
                  Hello and welcome to my portfolio. 
                  I am a positive and creative girl that love to interact with computers and humans alike, 
                  and do not prefer one for the other.
                </p>
                <h2>Keywords</h2>
                <p>React, JavaScript, HTML, CSS, NodeJs, NPM, Wordpress, PHP, MongoDB, design, social, problem solver and optimistic.</p>
                <h2>Do you want to work with me?</h2>
                <button>Contact form</button>
                <p>Email me directly at</p>
                <p>trine.marie.sandberg@gmail.com</p>
            </SectionWrap>
        </TopContent>
    )
};