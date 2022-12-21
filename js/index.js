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
avatarHoverEffect();

export function moonBtn() {

    const btn = document.querySelector(".projects-btn");
    const text = document.querySelector(".projects-btn-text");
    text.style.display = "none";

    btn.addEventListener("mouseover", (event) => {
        text.style.display = "block";
    });

    btn.addEventListener("mouseout", (event) => {

        setTimeout(() => {
            text.style.display = "none";
        }, 500);
    });
};

moonBtn();