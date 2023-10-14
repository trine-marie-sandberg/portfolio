import { useState } from "react";
import { CardWrap, ProjectImg, ProjectTitle, CardsWrap, CardBack, LinksWrap } from "./style";

export default function ProjectCards() {

    const [ card1Front, setCard1Front ] = useState(true);
    const [ card2Front, setCard2Front ] = useState(true);
    const [ card3Front, setCard3Front ] = useState(true);

    const cards = [
        {
            title: "Holidaze",
            img: "/holidaze.png",
            id: "card1",
            repoLink: "https://github.com/trine-marie-sandberg/Holidaze",
            demolink: "https://lustrous-raindrop-4630e1.netlify.app/",
            description: "A booking webpage for venues. Features both booking for guests and a venue management for venue owners",
            state: card1Front,
            setter: setCard1Front,
        },
        {
            title: "Fashion Auctions",
            img: "/fashion-auctions.png",
            id: "card2",
            repoLink: "https://github.com/trine-marie-sandberg/fashion-auctions",
            demolink: "https://trine-marie-sandberg.github.io/fashion-auctions/index.html",
            description: "An auction webpage for fashion items. Logged in users are able to list or bid on items.",
            state: card2Front,
            setter: setCard2Front,
        },
        {
            title: "Recom",
            img: "/recom.png",
            id: "card3",
            repoLink: "https://github.com/trine-marie-sandberg/js-frameworks-ca",
            demolink: "https://delightful-basbousa-b5b287.netlify.app/",
            description: "An ecomerse webpage. Features products, search, shopping cart and contact form",
            state: card3Front,
            setter: setCard3Front,
        }
    ];

    return(
        <CardsWrap>
            {cards.map((data) => {
                return(
                    <CardWrap
                    onClick={() => {
                      data.setter(!data.state)
                    }}
                    key={data.id}
                  >
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
                                <a target="_blank" href={data.repoLink}>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a target="_blank" href={data.demolink}>
                                    <i className="fa-solid fa-link"></i>
                                </a>
                              </LinksWrap>
                              <p>{data.description}</p>
                          </CardBack>
                      }
                  </CardWrap>
                )
            })}
        </CardsWrap>
    )
}