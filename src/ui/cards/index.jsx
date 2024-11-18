import { useState } from "react";
import { CardWrap, ProjectImg, ProjectTitle, CardsWrap, CardBack, LinksWrap, InnerBorder } from "./style";

export default function ProjectCards() {

    const [ card1Front, setCard1Front ] = useState(true);
    const [ card2Front, setCard2Front ] = useState(true);
    const [ card3Front, setCard3Front ] = useState(true);

    const cards = [
        {
            title: "Holidaze",
            img: "holidaze.png",
            id: "card1",
            repoLink: "https://github.com/trine-marie-sandberg/Holidaze",
            demolink: "https://lustrous-raindrop-4630e1.netlify.app/",
            description: "A booking webpage for venues. Features both booking for guests and a venue management for venue owners",
            state: card1Front,
            setter: setCard1Front,
        },
        {
            title: "Fashion Auctions",
            img: "fashion-auctions.png",
            id: "card2",
            repoLink: "https://github.com/trine-marie-sandberg/fashion-auctions",
            demolink: "https://trine-marie-sandberg.github.io/fashion-auctions/index.html",
            description: "An auction webpage for fashion items. Logged in users are able to list or bid on items.",
            state: card2Front,
            setter: setCard2Front,
        },
        {
            title: "Recom",
            img: "recom.png",
            id: "card3",
            repoLink: "https://github.com/trine-marie-sandberg/js-frameworks-ca",
            demolink: "https://delightful-basbousa-b5b287.netlify.app/",
            description: "An ecomerse webpage. Features products, search, shopping cart and contact form",
            state: card3Front,
            setter: setCard3Front,
        }
    ];

    return(
        <CardsWrap aria-label="Click to turn card">
            {cards.map((data) => {
                return(
                    <CardWrap
                        key={data.id}
                        onClick={() => data.setter(!data.state)}
                        onMouseOut={(event) => {
                            event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                        }}
                        onMouseMove={(e) => {
                            const target = e.currentTarget;
                            const rect = target.getBoundingClientRect();
                    
                            // Mouse position relative to card
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                    
                            // Card center
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                    
                            // Calculate rotation (limit to ±10 degrees)
                            const xRotation = ((y - centerY) / centerY) * 10; // Tilt up/down
                            const yRotation = ((centerX - x) / centerX) * 10; // Tilt left/right
                    
                            target.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
                        }}
                    >
                        <InnerBorder>
                        {data.state &&
                            <div>
                                <ProjectTitle>{data.title}</ProjectTitle>
                                <ProjectImg src={data.img} />
                            </div>
                        }
                        {!data.state &&
                            <CardBack>
                                <ProjectTitle>{data.title}</ProjectTitle>
                                <LinksWrap>
                                    <a target="_blank" href={data.repoLink} aria-label="link to repository">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a target="_blank" href={data.demolink} aria-label="Link to live demo">
                                        <i className="fa-solid fa-link"></i>
                                    </a>
                                </LinksWrap>
                                <p>{data.description}</p>
                            </CardBack>
                        }
                        </InnerBorder>
                    </CardWrap>
                )
            })}
        </CardsWrap>
    )
}