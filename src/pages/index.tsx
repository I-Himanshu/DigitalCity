import React from "react";
import "../../styles/globals.css";
import Navbar from "components/home/Navbar";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div className="relative flex flex-col">
        <Navbar />
        <main className="h-screen z-10 flex flex-col justify-center w-full bg-cover bg-white px-[10vmin] lg:px-[20vmin] bg-[url(/Home/Mobilebackground.png)] lg:bg-[url(/Home/Background.svg)]">
          <p className="font-bold robot text-[#3852CE] text-[8vmin] mt-[30vmin] lg:mt-0">
            Digital TownHall
          </p>
          <p className="font-bold robot tracking-tighter text-[#000] text-[5vmin] leading-[5.1vmin]">
            Modern people, Modern town
          </p>
          <p className="text-[#aaa] text-[2.5vmin] mt-[5vmin] lg:max-w-[35vw] tracking-[0.2vmin]">
            A Dream City that everybody wish, it's fully digitalised and give
            you access to everything of your city. Explore your city virtually.{" "}
          </p>
          <Link
            href="/dashboard"
            className="bg-[#3852ce] rounded-sm shadow-sm text-white text-[3.5vmin] transition-all hover:bg-[#3852ce]/80 p-[2vmin] max-w-[30vmin] mt-[5vmin] text-center robot"
          >
            Get Started
          </Link>
        </main>
      </div>
    </>
  );
}
