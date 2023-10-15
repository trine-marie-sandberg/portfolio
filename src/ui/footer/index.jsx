import SocialMediaLinks from "../social-media"
import { Foot, SocialIcons } from "./style"

export default function Footer() {

    return(
        <Foot>
            <p>© 2023 | Made with React and Vite</p>
            <SocialMediaLinks />
        </Foot>
    )
}