'use client'
import Navbar from "./ui/navbar";
import Body from "./ui/Body";
import TableData from "./ui/table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [shortenedLink, setShortenedLink] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/urls`);
      const formattedData = response.data.map(item => ({
        key: item._id,
        shortLink: item.short_url,
        originalLink: item.original_url,
        date: item.createdAt,
      }));
      setData(formattedData);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <main className="bg-zinc-800 flex min-h-screen flex-col items-center justify-between p-24 pt-32 ">
      <Navbar />
      <div className="mt-8 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Body setShortenedLink={setShortenedLink} shortenedLink={shortenedLink} data={data} fetchData={fetchData} />
      </div>
      <div className="mt-8 z-10 max-w-5xl w-full items-center justify-between">
        <TableData data={data} setData={setData} />
      </div>
    </main>
  );
}
