import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactSection = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.submit();
  };

  return (
    <section
      className="px-4 py-16 bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-colors duration-500"
    >
      {/* Title */}
      <h2 
      id="contact"
       className="text-4xl font-serif font-bold mb-6 text-center">
        {lang === "mk" ? "Контакт" : "Contact"}
      </h2>

      {/* Contact Info */}
      <div className="text-center mb-8 space-y-4">
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faInstagram} className="text-xl text-accent" />
          <a
            href="https://www.instagram.com/masivo.mk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            masivo.mk
          </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faFacebook} className="text-xl text-accent" />
          <a
            href="https://www.facebook.com/masivo.mk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            MASIVO
          </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-xl text-accent" />
          <span className="text-lg font-semibold">070 662 677</span>
        </div>
      </div>

      {!submitted ? (
        <div className="max-w-xl mx-auto">
          {/* Intro text above form */}
          <p className="text-center text-xl font-bold font-serif mb-6">
            {lang === "mk" ? "Испратете ни е-пошта" : "Send us an email"}
          </p>

          <form
            action="https://formspree.io/f/meoranok"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col text-sm font-semibold">
              {lang === "mk" ? "Вашиот email:" : "Your email:"}
              <input
                type="email"
                name="email"
                required
                className="p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold">
              {lang === "mk" ? "Вашата порака:" : "Your message:"}
              <textarea
                name="message"
                required
                className="p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              {lang === "mk" ? "Испрати" : "Send"}
            </button>
          </form>
        </div>
      ) : (
        <p className="text-center text-lg mt-4">
          {lang === "mk"
            ? "Вашата порака е испратена! Ви благодариме."
            : "Your message has been sent! Thank you."}
        </p>
      )}
    </section>
  );
};

export default ContactSection;
