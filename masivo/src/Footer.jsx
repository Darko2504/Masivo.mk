import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkBg text-textDark dark:text-textDark px-4 py-6 mt-12 border-t border-gray-700">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-sm">
          &copy; {new Date().getFullYear()} MASIVO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
