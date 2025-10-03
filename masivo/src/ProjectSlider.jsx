import React, { useState, useRef, useEffect } from "react";

// Import all 17 images
import project1 from "../src/assets/projects/Project1.PNG";
import project2 from "../src/assets/projects/Project2.PNG";
import project3 from "../src/assets/projects/Project3.PNG";
import project4 from "../src/assets/projects/Project4.PNG";
import project5 from "../src/assets/projects/Project5.PNG";
import project6 from "../src/assets/projects/Project6.PNG";
import project7 from "../src/assets/projects/Project7.PNG";
import project8 from "../src/assets/projects/Project8.PNG";
import project9 from "../src/assets/projects/Project9.PNG";
import project10 from "../src/assets/projects/Project10.PNG";
import project11 from "../src/assets/projects/Project11.PNG";
import project12 from "../src/assets/projects/Project12.PNG";
import project13 from "../src/assets/projects/Project13.PNG";
import project14 from "../src/assets/projects/Project14.PNG";
import project15 from "../src/assets/projects/Project15.PNG";
import project16 from "../src/assets/projects/Project16.PNG";
import project17 from "../src/assets/projects/Project17.PNG";

// Array of images
const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
];

const ProjectSlider = ({ lang }) => {
  const [current, setCurrent] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(null);
  const length = projects.length;

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-slide every 5 seconds (disabled when popup is open)
  useEffect(() => {
    if (popupOpen) return; // stop when popup is open
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length, popupOpen]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev - 1 + length) % length);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const openPopup = (idx) => {
    setPopupIndex(idx);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupIndex(null);
  };

  const nextPopup = () => {
    setPopupIndex((prev) => (prev + 1) % length);
  };

  const prevPopup = () => {
    setPopupIndex((prev) => (prev - 1 + length) % length);
  };

  return (
    <section
      className="relative w-full overflow-hidden rounded-lg mt-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Title */}
      <h2
        id="projects"
        className="text-4xl font-serif font-bold mb-6 mt-16 text-center"
      >
        {lang === "mk" ? "Проекти" : "Projects"}
      </h2>

      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {projects.map((img, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 mx-auto relative cursor-pointer"
            onClick={() => openPopup(idx)}
          >
            <img
              src={img}
              className="w-full md:w-1/2 mx-auto h-64 md:h-96 object-cover rounded-lg shadow-lg"
              alt={`project ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        onClick={() => setCurrent((prev) => (prev - 1 + length) % length)}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        onClick={() => setCurrent((prev) => (prev + 1) % length)}
      >
        ›
      </button>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ×
          </button>
          <button
            onClick={prevPopup}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
          >
            ‹
          </button>
          <img
            src={projects[popupIndex]}
            alt="project popup"
            className="max-h-[80%] max-w-[80%] md:max-h-[70%] md:max-w-[50%] mx-auto rounded-lg shadow-2xl"
          />
          <button
            onClick={nextPopup}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSlider;
