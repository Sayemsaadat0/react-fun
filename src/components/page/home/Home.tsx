import React, { useState } from 'react';
import './Home.css'; // Make sure to create this file for styles

const Home: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [textSize, setTextSize] = useState(24);
  const [question, setQuestion] = useState("Do you love me?");
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);

  const questions = [
    "Do you really love me? Shiza!",
    "Are you sure? Really?",
    "Think about it again. Do you really love me?",
    "Can you really stay with me forever?",
  ];

  const handleYesClick = () => {
    if (clickCount < questions.length) {
      setClickCount(prev => prev + 1);
      setTextSize(prev => prev + 4);
      setQuestion(questions[clickCount]);
    } else {
      setShowLoveMessage(true);
    }
  };

  const handleNoClick = () => {
    setShowWrongAnswer(true);
    setTimeout(() => setShowWrongAnswer(false), 1000);
  };

  const renderKisses = (): JSX.Element[] => { // Specify the return type
    const kisses: JSX.Element[] = []; // Declare the array type
    for (let i = 0; i < 100; i++) {
      kisses.push(
        <span
          key={i}
          className="kiss"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        >
          😘
        </span>
      );
    }
    return kisses;
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: textSize }}>{question}</h1>
      <div className="flex gap-10 justify-center mt-5">
        <button onClick={handleYesClick} className="button">Yes</button>
        <button onClick={handleNoClick} className="button">No</button>
      </div>
      {showWrongAnswer && <p className="wrongAnswer">Wrong answer!</p>}
      {showLoveMessage && (
        <div>
          <h1 className="loveMessage">Ok, I love you too!😘</h1>
          <div className="kissesContainer">{renderKisses()}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
