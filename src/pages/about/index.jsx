import { SectionWrap } from "../../ui/sectionwrap/style";
import SocialMediaLinks from "../../ui/social-media";
import { FlexImgHeading, ImgBg, Portrait } from "./style";

export default function About() {
    return(
        <SectionWrap>
            <FlexImgHeading>
                <h1>About me</h1>
                <Portrait>
                    <ImgBg></ImgBg>
                </Portrait>
            </FlexImgHeading>
            <h2>Hi 👋</h2>
            <p>
                My name is Trine Marie Sandberg Johansson, and I am a web developer.
                I have been interested in web development and design since I got my first computer. This have remained a hobby for a long time while I 
                have mostly worked with people in the service and health industry. To make a long story short, web development gradually became my passion, 
                and today I develop a wide range of web applications and solutions.
            </p>
            <p>
                If you need help with a web project, or simply need a full stack developer, please send me an email at trine.marie.sandberg@gmail.com
            </p>
            <p>You can also find me at Linkedin and Facebook</p>
            <p>I'm looking forward to work with you 🙂</p>
            <SocialMediaLinks/>
        </SectionWrap>
    )
}