import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 p-4 text-white fixed top-0 left-0">
      <h1 className="text-gradient text-4xl font-signature ml-2">
        <a
          className="link-underline link-underline-white hover:decoration-solid"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Shortify
        </a>
      </h1>
    </div>
  );
};

export default Navbar;
