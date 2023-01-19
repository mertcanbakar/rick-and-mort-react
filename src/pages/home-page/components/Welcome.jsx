import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="flex flex-col justify-center items-center w-full h-[500px]">
        <h1 className="text-gray-200 text-7xl transition-all hover:text-8xl select-none">
          WELCOME TO
        </h1>
        <h2 className="text-green-600 text-8xl transition-all hover:text-9xl select-none">
          C-137 EARTH
        </h2>
        <br />
        <br />
        <a
          href="/history"
          className="text-white my-5 text-2xl transition-all hover:text-green-600 hover:text-3xl select-none"
        >
          Are you ready for adventure?
        </a>
        <a
          className="text-white text-2xl transition-all hover:text-green-600 hover:text-3xl select-none"
          href="https://www.adultswim.com/videos/rick-and-morty"
          target='_blank'
          rel="noopener"
        >
          Watch Rick and Morty
        </a>
      </div>
    </div>
  );
};

export default Welcome;
