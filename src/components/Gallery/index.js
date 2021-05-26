import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import codeQuiz from "../../images/quizimg.png";
import passWord from "../../images/passwordgeneratorimg.png";
import weatherDash from "../../images/weather.png";
import workDay from "../../images/schedulerimg.png";
import progBudget from "../../images/budgettrackerimg.png";
import andChill from "../../images/andchillimg.png";

function Gallery() {
  const projects = [
    {
      title: "Code Quiz",
      description: "JavaScript coding quiz with timer and score keeper.",
      image: codeQuiz,
      github: "https://github.com/mooreFL/Moore_Coding_Quiz",
      live:  "https://moorefl.github.io/Moore_Coding_Quiz/"
    },
    {
      title: "Password Generator",
      description: "Generates random passwords with user set parameters.",
      image: passWord,
      github: "https://github.com/mooreFL/password_generator",
      live: "https://moorefl.github.io/password_generator/"
    },
    {
      title: "Weather Dashboard",
      description: "Shows weather information for a user selected location.",
      image: weatherDash,
      github: "https://github.com/mooreFL/Weather-Dashboard",
      live: "https://moorefl.github.io/Weather-Dashboard/"
    },
    {
      title: "Work-Day Scheduler",
      description: "Dynamic hourly scheduler for 9-5 work day.",
      image: workDay,
      github: "https://github.com/mooreFL/Work-Day-Scheduler",
      live: "https://moorefl.github.io/Work-Day-Scheduler/"
    },
    {
      title: "Progressive Budget Tracker",
      description: "Tracks a budget both on and offline.",
      image: progBudget,
      github: "https://github.com/mooreFL/Progressive_Budget",
      live: "https://moore-progressive-budget.herokuapp.com/"
    },
    {
      title: "&Chill",
      description: "Matches users according to movie preferences.",
      image: andChill,
      github: "https://github.com/adamalcantara/andChill",
      live: "https://and--chill.herokuapp.com/"
    }
  ];

  return (
    <div>
      <Carousel id="carousel">
        {projects.map((project) => (
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={project.image} alt={project.title} />
            <Carousel.Caption>
              <h3>{project.title}</h3>
              <p>{project.description}</p> 
              <a href={project.github} target="_blank" rel="noreferrer"><button>Repo</button></a>
              <a href={project.live} target="_blank" rel="noreferrer"><button>Site</button></a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
