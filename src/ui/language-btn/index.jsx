import React from "react";
import { LanguageWrap, LangText, LangImg } from "./style";

export default function LanguageBtn() {

    return(
        <LanguageWrap>
            <LangImg src="flag-un.jpg" alt="English" />
            <LangText>EN</LangText>
        </LanguageWrap>
    )
}