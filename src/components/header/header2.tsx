// components/Header.jsx

import React from "react";

export default function Header2() {
  return (
    <header className="bg-black text-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center">
        {/* Left Logo */}
        <div className="mr-8">
          {/* Placeholder for your stylized "n" or other logo */}
          {/* You can replace this with an actual SVG or Image */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 0C22.387 0 0 22.387 0 50s22.387 50 50 50 50-22.387 50-50S77.613 0 50 0zm0 92C27.386 92 8 72.614 8 50S27.386 8 50 8s42 19.386 42 42-19.386 42-42 42z" />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="55"
              fontWeight="bold"
              fill="white"
              fontFamily="sans-serif"
            >
              N
            </text>
          </svg>
        </div>

        {/* Nav Items */}
        <nav className="text-2xl font-bold flex items-center space-x-3">
          <span className="text-gray-500">BIO,</span>
          <span className="text-gray-500">WORKS(8),</span>
          <span className="text-white">GALLERY,</span>
          <span className="text-gray-500">CONTACT</span>
        </nav>
      </div>
    </header>
  );
}
