import { useState } from "react";
import { CardWrap, ProjectImg, ProjectTitle, CardsWrap, CardBack, LinksWrap, InnerBorder } from "./style";

export default function ProjectCards() {

    const [ card1Front, setCard1Front ] = useState(true);
    const [ card2Front, setCard2Front ] = useState(true);
    const [ card3Front, setCard3Front ] = useState(true);
    const [ card4Front, setCard4Front ] = useState(true);
    const [ card5Front, setCard5Front ] = useState(true);
    const [ card6Front, setCard6Front ] = useState(true);

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
            title: "Recom",
            img: "recom.png",
            id: "card2",
            repoLink: "https://github.com/trine-marie-sandberg/js-frameworks-ca",
            demolink: "https://delightful-basbousa-b5b287.netlify.app/",
            description: "An ecomerse webpage. Features products, search, shopping cart and contact form",
            state: card2Front,
            setter: setCard2Front,
        },
        {
            title: "Fashion Auctions",
            img: "fashion-auctions.png",
            id: "card3",
            repoLink: "https://github.com/trine-marie-sandberg/fashion-auctions",
            demolink: "https://trine-marie-sandberg.github.io/fashion-auctions/index.html",
            description: "An auction webpage for fashion items. Logged in users are able to list or bid on items.",
            state: card3Front,
            setter: setCard3Front,
        },
        {
            title: "Mountain Hiker Photography Blog",
            img: "https://user-images.githubusercontent.com/91562336/195579423-7d27482d-cdeb-43fa-9f0c-78772034eafa.jpg",
            id: "card4",
            demolink: "https://fabulous-quokka-b6c6e5.netlify.app/posts",
            repoLink: "https://github.com/Noroff-FEU-Assignments/project-exam-1-trine-marie-sandberg?tab=readme-ov-file",
            description: "Blog page about hiking, focusing on images. The blog posts are created from wordpress dashboard, and displayed using Wordpress REST API.",
            state: card4Front,
            setter: setCard4Front,
        },
        {
            title: "Community Science Museum",
            img: "https://user-images.githubusercontent.com/91562336/195583033-03d4820c-8bbb-4835-b450-00e3518c984e.jpg",
            id: "card5",
            demolink: "https://eager-payne-97f61d.netlify.app/",
            repoLink: "https://github.com/trine-marie-sandberg/HTML-CSS-course-asignment-museum",
            description: "A community science Museum homepage. Made with just css and html.",
            state: card5Front,
            setter: setCard5Front,
        },
        {
            title: "The Social Vegan",
            img: "https://user-images.githubusercontent.com/91562336/200136089-4fb524aa-452c-4ac2-ba10-1a77e8fc5cc0.PNG",
            id: "card6",
            demolink: "https://incredible-pixie-994c33.netlify.app/",
            repoLink: "https://github.com/trine-marie-sandberg/the-social-vegan",
            description: "A social media platform with a vegan theme.",
            state: card6Front,
            setter: setCard6Front,
        },
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