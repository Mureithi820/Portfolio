import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/wild-oasis.jpeg";
import IMG2 from "../../assets/pizzabox.jpeg";
import IMG3 from "../../assets/Travel-list.jpeg";
import IMG4 from "../../assets/worldwise.jpeg";
// import IMG5 from "../../assets/react quiz.jpeg";
import IMG6 from "../../assets/weather app.jpeg";
import IMG7 from "../../assets/Nightin.jpeg";
import IMG8 from "../../assets/Natours.jpeg";
import IMG9 from "../../assets/Trillo.jpeg";
import IMG10 from "../../assets/smefintech-logo.png";

const data = [
  {
    id: 1,
    image: IMG10,
    title: "SMEFinTech ",
    github: "https://github.com/Mureithi820/smefintech-landing",
    demo: "https://smefintech.co.ke/",
    brief:
      "https://github.com/Mureithi820/smefintech-landing/blob/main/README.md",
  },

  {
    id: 2,
    image: IMG1,
    title: "Wild Oasis Resort ",
    github: "https://github.com/Mureithi820/The-wild-oasis",
    demo: "https://bleach-oasis.netlify.app/",
    brief: "https://github.com/Mureithi820/The-wild-oasis/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG2,
    title: "Fast React Pizza ",
    github: "https://github.com/Mureithi820/fast-react-pizza",
    demo: "https://pizzafast.netlify.app/",
    brief:
      "https://github.com/Mureithi820/fast-react-pizza/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG3,
    title: "Travel-list",
    github: "https://github.com/Mureithi820/Travel-list",
    demo: "https://astonishing-dusk-d16c87.netlify.app",
    brief: "https://github.com/Mureithi820/Travel-list/edit/main/README.md",
  },
  {
    id: 5,
    image: IMG4,
    title: "WorldWise",
    github: "https://github.com/Mureithi820/Worldwise",
    demo: "https://worldweiss.netlify.app/",
    brief: "https://github.com/Mureithi820/Worldwise/blob/main/README.md",
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "React Quiz App",
  //   github: "https://github.com/Mureithi820/Quiz-app",
  //   demo: "https://reactquizkjj.netlify.app/",
  //   brief: "https://github.com/Mureithi820/Quiz-app/edit/main/README.md",
  // },
  {
    id: 7,
    image: IMG6,
    title: "Crimson weather app",
    github: "https://github.com/Mureithi820/crimson-weather",
    demo: "https://crimson-weather.netlify.app/",
    brief: "https://github.com/Mureithi820/crimson-weather/blob/main/README.md",
  },
  {
    id: 8,
    image: IMG7,
    title: "NightIn ",
    github: "https://github.com/Mureithi820/nightin",
    demo: "https://nightin.netlify.app/",
    brief: "https://github.com/Mureithi820/nightin/blob/main/README.md",
  },
  {
    id: 9,
    image: IMG8,
    title: "Natours landing page ",
    github: "https://github.com/Mureithi820/Natours-v2",
    demo: "https://bleach-natours.netlify.app/",
    brief: "https://github.com/Mureithi820/Natours-v2/blob/main/README.md",
  },
  {
    id: 10,
    image: IMG9,
    title: "Trillo ",
    github: "https://github.com/Mureithi820/Trillo",
    demo: "https://darling-entremet-0e38f3.netlify.app/",
    brief: "https://github.com/Mureithi820/Trillo/blob/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
