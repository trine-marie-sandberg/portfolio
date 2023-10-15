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
                My name is Trine Marie Sandberg, and I am a front end developer.
                I have been interested in web development and design since I got my first computer. This have remained a hobby for a long time while I 
                have mostly worked with people in the service and health industry. To make a long story short, after learning Html, css and JavaScript, it became more than just
                a hobby as I simply loved the learning prosess, and to create projects from start to finish.
            </p>
            <p>
                Today I am a front end development graduate, and can not wait to take on new challenges to grow my knowledge and experience. 
                I am not afraid to jump into uncharted waters, but also know when to ask for help.
            </p>
            <p>
                If you are interested, please send me an email at trine.marie.sandberg@gmail.com
            </p>
            <p>You can also find me at Linkedin and Facebook</p>
            <p>Looking forward to working with you 🙂</p>
            <SocialMediaLinks/>
        </SectionWrap>
    )
}