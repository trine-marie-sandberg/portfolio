import { CardWrap, ProjectImg, ProjectTitle, CardsWrap } from "./style";

export default function ProjectCards() {
    return(
        <CardsWrap>
            <CardWrap>
                <ProjectTitle>Holidaze</ProjectTitle>
                <ProjectImg src="/holidaze.png"/>
            </CardWrap>
            <CardWrap>
                <ProjectTitle>Fashion Auctions</ProjectTitle>
                <ProjectImg src="/fashion-auctions.png"/>
            </CardWrap>
            <CardWrap>
                <ProjectTitle>Recom</ProjectTitle>
                <ProjectImg src="/recom.png"/>
            </CardWrap>
        </CardsWrap>
    )
}