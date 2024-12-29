import React, { useEffect } from "react";
import anime from "animejs"; // Import anime.js
import "./animationCss.css"; // Ensure correct CSS file name

export default function Animation() {
  // Function to trigger the animation with random values
  function randomValues() {
    anime({
      targets: ".square, .circle, .triangle",
      translateX: function () {
        return anime.random(-500, 500);
      },
      translateY: function () {
        return anime.random(-300, 300);
      },
      rotate: function () {
        return anime.random(0, 360);
      },
      scale: function () {
        return anime.random(0.2, 2);
      },
      duration: 1000,
      easing: "easeInOutQuad",
      complete: randomValues, // Repeat the animation
    });
  }

  // Trigger animation on initial render
  useEffect(() => {
    randomValues();
  }, []);

  return (
    <div onClick={randomValues} className="flex flex-wrap justify-center gap-4">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>

      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
      <div className="triangle"></div>
    </div>
  );
}
