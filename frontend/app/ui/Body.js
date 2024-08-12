'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'antd';

const Body = ({ shortenedLink, setShortenedLink, fetchData }) => {
  const [link, setLink] = useState('');
  const [alias, setAlias] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleAliasChange = (e) => {
    setAlias(e.target.value);
  };

  const handleShorten = async () => {
    if (!link) {
      alert("Please enter a link.");
      return;
    }

    try {
      let response;
      if (alias === '') {
        response = await axios.post('http://localhost:8888/urls', {
          original_url: link
        });
      } else {
        response = await axios.post('http://localhost:8888/urls', {
          original_url: link,
          alias: alias
        });
      }

      if (response.data && response.data.short_url) {
        const shortUrl = `http://localhost:8888/${response.data.short_url}`;
        setShortenedLink(shortUrl);
        fetchData();
        setIsModalOpen(true); // Open the modal after setting the shortened link
      } else {
        throw new Error('No short URL returned from server');
      }
    } catch (error) {
      setShortenedLink('');
      alert(error.response.data.error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

      <div className="mt-6 flex w-full max-w-full gap-x-4">
        <input
          id="link"
          name="link"
          type="url"
          required
          placeholder="Enter your link"
          autoComplete="link"
          value={link}
          onChange={handleLinkChange}
          className="min-w-0 flex-grow rounded-md border-0 bg-white/5 px-3.5 py-2 ring-white text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-slate-50 sm:text-sm sm:leading-6"
        />

        <input
          id="alias"
          name="alias"
          type="text"
          placeholder="Enter alias (optional)"
          value={alias}
          onChange={handleAliasChange}
          className="block min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 ring-white text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-slate-50 sm:text-sm sm:leading-6"
        />

        <button
          type="button"
          onClick={handleShorten}
          className="flex-none shadow-sm shadow-white ring-white ring-1 rounded-md bg-beige px-3.5 py-2.5 text-sm font-semibold hover:text-white focus-visible:outline-2"
        >
          Shorten now!!
        </button>
      </div>

      <Modal
        title="Link Shortened"
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        okText="OK"
      >
        {shortenedLink && (
          <div>
            <p>Your link has been shortened successfully!</p>
            <p><strong>Shortened Link:</strong></p>
            <a href={shortenedLink} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 underline">{shortenedLink}</a>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Body;
