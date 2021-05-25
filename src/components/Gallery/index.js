import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import codeQuiz from "../../images/quizimg.png";
import passWord from "../../images/passwordgeneratorimg.png";
import weatherDash from "../../images/weather.png";
import workDay from "../../images/schedulerimg.png";
import progBudget from "../../images/budgettrackerimg.png";
import andChill from "../../images/andchillimg.png"

function Gallery() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={codeQuiz} alt="Code Quiz" />
          <Carousel.Caption>
            <h3>Code Quiz</h3>
            <p>JavaScript coding quiz with timer and score keeper.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={passWord}
            alt="Password Generator"
          />
          <Carousel.Caption>
            <h3>Password Generator</h3>
            <p>Generates random passwords with user set parameters.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={weatherDash}
            alt="Weather Dashboard"
          />
          <Carousel.Caption>
            <h3>Weather Dashboard</h3>
            <p>
              Shows weather information for a user selected location.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={workDay}
            alt="WorkDay Scheduler"
          />
          <Carousel.Caption>
            <h3>Work-Day Scheduler</h3>
            <p>Dynamic hourly scheduler for 9-5 work day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={progBudget}
            alt="Progressive Budget Tracker"
          />
          <Carousel.Caption>
            <h3>Progressive Budget Tracker</h3>
            <p>Tracks a budget both on and offline.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={andChill}
            alt="&Chill dating app"
          />
          <Carousel.Caption>
            <h3>&Chill Dating App</h3>
            <p>Matches users according to movie preferences.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
