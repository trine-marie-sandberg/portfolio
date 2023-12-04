import { Nav, Ul, Li, I, MenuIconWrap } from "./style";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MobileMenuIcon } from "../mobile-menu-icon";

export function NavBar() {

    const [ visible, setVisible ] = useState("");
    const [ clicked, setClicked ] = useState("");

    function menuHideShow() {
        if (visible === "") {
            setVisible("visible");
            setClicked("clicked");
        }
        else {
            setVisible("");
            setClicked("");
        }
    }
    return(
        <>
        <MenuIconWrap onClick={menuHideShow}>
            <div className={clicked}>
                <MobileMenuIcon />
            </div>
        </MenuIconWrap>
        <Nav>
            <Ul id={visible}>
                <Li>
                    <NavLink to="portfolio/" aria-label="Homepage">
                        <p>Home</p>
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/about" aria-label="More about me">
                        <p>About</p>
                    </NavLink>
                </Li>
            </Ul>
        </Nav>
        </>
    )
}