//import { avatarHoverEffect } from "./avatar";
export function avatarHoverEffect() {

    const avatar = document.getElementById("avatar");
    
    avatar.addEventListener("mouseover", (event) => {
        avatar.src = "/img/myprofile-sm.jpg";
    });

    avatar.addEventListener("mouseout", (event) => {

        setTimeout(() => {
            avatar.src = "/img/myprofile-sm-pixel-blue.jpg"
        }, 500);
    });
};
avatarHoverEffect(avatar);