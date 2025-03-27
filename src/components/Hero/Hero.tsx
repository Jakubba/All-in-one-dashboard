import React, { useState } from "react";
import SplineScene from "./SplineScene";
import SignUp from "../SignUp/SignUp";
import "./Hero.styles.scss";

interface HeroProps {
  title?: string;
  description: string;
  buttonText: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Dashboard All-in-One – Twoje Centrum Zarządzania",
  description = "Zarządzaj wszystkim w jednym miejscu! Nasz intuicyjny dashboard łączy kluczowe funkcje, analizy i statystyki, abyś miał pełną kontrolę nad swoim biznesem lub projektem.",
  buttonText = "Rozpocznij teraz",
}) => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  return (
    <section className="hero">
      <div className="hero__background">
        <SplineScene />
      </div>
      <div className="hero__content">
        <h2 className="hero__title">
          {title.split("All-in-One").map((part, index) => (
            <React.Fragment key={`${part}-${index}`}>
              {index > 0 && <span className="accent">All-in-One</span>}
              {part}
            </React.Fragment>
          ))}
        </h2>
        <p className="hero__description">{description}</p>
        <button className="hero__button" onClick={() => setIsSignUpVisible(true)}>
          <span className="hero__button-text">{buttonText}</span>
        </button>
      </div>
      {isSignUpVisible && (
        <SignUp isOpen={isSignUpVisible} onClose={() => setIsSignUpVisible(false)} />
      )}
    </section>
  );
};

export default Hero;
