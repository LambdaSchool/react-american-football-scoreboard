import React, { useState } from "react";
import ReactDOM from "react-dom";

function Timer () {

  const [secondsElapsed] = useState(65);
  console.log(secondsElapsed);
  const getSeconds = function () {
    return (`0${secondsElapsed % 60}`).slice(-2);
  }
  console.log(getSeconds);
  const getMinutes = function () {
    return Math.floor(secondsElapsed / 60);
  }

  const startGame = () =>
    alert('Starting game');
    setInterval(function () {
      setState({
        secondsElapsed: secondsElapsed +1
      })
    }, 1000)


    return (
      <div className="timer">
        <p className ="timer"> {getMinutes()}:{ getSeconds() } </p>
        <button type="button" onClick={ () => startGame()}>Start Game</button>
      </div>
    );
  }

export default Timer;
