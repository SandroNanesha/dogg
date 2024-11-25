import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState(generateDogImages(30));
  const [showNote, setShowNote] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNote(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const button = document.querySelector(".microphone-button");
    button.classList.add("blinking");
    setTimeout(() => {
      button.classList.remove("blinking");
    }, 4000);

    setImages((prevImages) => [...prevImages, ...generateDogImages(15)]);

    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <div className="banner">გაიგე რას გეუბნება შენი ოთხფეხა მეგობარი</div>

      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="random-dog"
          style={image.style}
        />
      ))}

      <button className="microphone-button" onClick={handleClick}>
        🎤
        {showNote && (
          <div className="note">გადათარგმნე შენი ოთხფეხა მეგობრის საუბარი</div>
        )}
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>აუსრულე სურვილი შენს ოთხფეხა მეგობარს!</h1>
            <p>
              ნილუ ამბობს:
              - მარიკოო...! მარიკოო! მომენატრა სანდრო...
              დაურეკე სანდროს და გამასეირნეთ დღეს შავნაბადას ჩაწერის მერე.
              საკონტაქტო ინფორმაცია
            </p>
            <ul>
              <li>
                <b>ტელ:</b> +995551236816
              </li>
              <li>
                <b>მეილი:</b> anane16@freeuni.edu.ge
              </li>
              <li>
                <b>საფოსტო კოდი:</b> 0186
              </li>
              <li>
                <b>მისამართი:</b> მაღალი, ძაან სიმპატიჩნი, გალობს...
              </li>
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const generateDogImages = (count) =>
  Array.from({ length: count }).map((_, index) => ({
    src: `https://placedog.net/200/200?random=${index + 1}`,
    alt: `Dog ${index + 1}`,
    style: {
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      width: `${Math.random() * 150 + 50}px`,
    },
  }));

export default App;
