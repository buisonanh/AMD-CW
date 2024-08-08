'use client';
import React from 'react';

const Body = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full'>
      <div className="text-center">
        <h1 className="text-gradient text-4xl font-bold sm:text-6xl p-2">
          Shorten Your Long Links
        </h1>
        <p className="p-6 text-lg leading-8 text-gradient">
          Shortify is an efficient and easy-to-use URL shortening service that streamlines your online experience.
        </p>
      </div>


      <div className="mt-6 flex w-full max-w-lg gap-x-4">
        <input
          id="link"
          name="link"
          type="url"  
          required
          placeholder="Enter your link"
          autoComplete="link"
          className="min-w-0 flex-grow rounded-md border-0 bg-white/5 px-3.5 py-2 ring-white text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-slate-50 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="flex-none shadow-sm shadow-white ring-white ring-1 rounded-md bg-beige px-3.5 py-2.5 text-sm font-semibold hover:text-white focus-visible:outline-2"
        >
          Shorten now!!
        </button>
      </div>
    </div>
  );
};

export default Body;
