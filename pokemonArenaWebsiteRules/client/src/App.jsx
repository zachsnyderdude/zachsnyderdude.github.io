import { NavLink, Outlet } from "react-router";
import { tabs } from "./tabs";

// The two side boxes. Each link is [title, subtitle].
const relatedLinks = [
  ["Bulbapedia", "Pokemon Wiki"],
  ["Pokemon Database", "Pokemon Info"],
  ["The Offical Pokemon Website", "Everything Pokemon"],
  ["Pokemon Center", "The Pokemon Store"],
  ["Play! Pokemon", "How About Pokemon Arena!...?"],
  ["Pokeos", "TCG Info"],
];

const ads = [
  ["Poopoo Pedia", "Poop Wiki"],
  ["Poopy Database", "Poop Info"],
  ["Sharty Sharterson", "A Family Story"],
  ["On The Poop!", "Apply Now"],
  ["People's Poops", "Poopers Digest"],
  ["Peepers Intrigue?", "Hide!"],
];

function Aside({ image, imageWidth, links, side }) {
  return (
    <aside
      className={`fixed top-[5%] ${side} w-[min(20%,200px)] p-2.5 text-red-500 border-[5px] border-black rounded-[15px]
        bg-[url(/images/aside1.webp)] bg-cover bg-center bg-no-repeat [-webkit-text-stroke:0.25px_black]
        max-[1100px]:w-[140px] max-[1100px]:text-sm
        max-[850px]:static max-[850px]:w-[90%] max-[850px]:mx-auto max-[850px]:my-5`}
    >
      <img src={image} alt="related links" className={imageWidth} />
      {links.map(([title, subtitle]) => (
        <div key={title}>
          <h2 className="text-[1.5em] font-bold my-[0.83em]">{title}</h2>
          <p className="my-4">{subtitle}</p>
        </div>
      ))}
    </aside>
  );
}

// This is the "Home" page. It sits inside the Navbar route (see main.jsx)
export default function App() {
  return (
    <main className="relative mx-auto w-[min(100%,1400px)] px-2.5 pt-28">
      {/* Title area */}
      <section>
        <img src="/images/welcome_to_background3.png" alt="welcome message" className="block mx-auto my-5 max-w-[90%] w-1/4" />

        <div className="relative mx-auto my-5 max-[600px]:w-[90%]">
          <img
            src="/images/pokemon_logo.png"
            alt="title"
            className="block mx-auto my-5 w-[min(50%,1000px)] border-[3px] border-black rounded-[15px]"
          />
          <img
            src="/images/by_zach.png"
            alt="by Zach"
            className="absolute right-[20%] bottom-5 w-[min(24%,400px)] -rotate-20 max-[600px]:w-[45%] max-[600px]:-right-[4%]"
          />
        </div>
      </section>

      {/* Asides */}
      <Aside image="/images/related_links.png" imageWidth="w-[90%]" links={relatedLinks} side="left-[1%] max-[1100px]:left-[5px]" />
      <Aside image="/images/ads.png" imageWidth="w-[97%]" links={ads} side="right-[1%] max-[1100px]:right-[5px]" />

      <hr className="mx-auto my-8 w-[65%] border-t-[3px] border-black" />

      {/* Table of contents */}
      <img src="/images/table_of_contents.png" alt="table of contents" className="block mx-auto mt-[70px] mb-5 max-w-[90%] w-[35%] max-[600px]:mt-[90px]" />

      <section>
        <div className="flex flex-wrap border-b-2 border-[#ccc] bg-[#f1f1f1]">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={`/home/${tab.path}`}
              className={({ isActive }) =>
                `cursor-pointer px-4 py-3.5 text-[17px] transition duration-300 hover:bg-[#ddd] ${
                  isActive ? "bg-[#ccc] font-bold" : ""
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>

        {/* The Tab Content: react-router puts the chosen tab here */}
        <div className="px-2.5 py-5">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
