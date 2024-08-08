import Navbar from "./ui/navbar";
import Body from "./ui/Body";
import TableData from "./ui/table";

export default function Home() {
  return (
    <main className="bg-zinc-800 flex min-h-screen flex-col items-center justify-between p-24 pt-32 ">
      <Navbar />
      <div className="mt-8 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Body />
      </div>
      <div className="mt-8 z-10 max-w-5xl w-full items-center justify-between">
        <TableData />
      </div>
    </main>
  );
}
