import { Link } from "react-router-dom";
import { LinkIcon, LinkWrap } from "./style";

export default function SocialMediaLinks() {
    return(
        <LinkWrap>
            <Link 
              to={"https://www.linkedin.com/in/trine-sandberg-5aa86b206/"}
              aria-label="Link to my Linkedin profile"
            >
                <LinkIcon className="fa-brands fa-linkedin"></LinkIcon>
            </Link>
            <Link 
              to={"https://www.facebook.com/trine.m.sandberg/"}
              aria-label="Link to my Facebook profile"
            >
                <LinkIcon className="fa-brands fa-facebook"></LinkIcon>
            </Link>
        </LinkWrap>
    )
};