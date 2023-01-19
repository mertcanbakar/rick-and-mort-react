import React from "react";


const Header = () => {

  return (
    <div className="sticky top-0 bg-neutral-800">
      <div className="container mx-auto h-12 flex items-center justify-between">
        <a href="/">
          <img
            className="w-30 h-16 mx-auto"
            src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
            alt="Rick and Morty Logo"
          />
        </a>
        <div className="flex gap-x-16 items-center">
          <nav className="ml-10 flex gap-x-6 text-xl">
            <a className="  text-green-400 text-opacity-70 transition-all hover:text-opacity-100" href="/">Home</a>
            <a className="  text-green-400 text-opacity-70 transition-all hover:text-opacity-100" href="/characters">Characters</a>
            <a className="  text-green-400 text-opacity-70 transition-all hover:text-opacity-100" href="/history">History</a>
          </nav>
          <div className="flex font-bold text-3xl text-white">
            <h1 className="ml-2 mb-1 font-sans shadow-inner select-none">[as]</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
