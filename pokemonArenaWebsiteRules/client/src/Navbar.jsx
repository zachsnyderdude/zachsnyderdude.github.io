import { NavLink, Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";

const links = [
  { to: "/home", label: "Home" },
  { to: "/pokemon-page", label: "Pokemon Page" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// The Navbar route: draws the navbar, then shows the current page below it with <Outlet />.
export default function Navbar() {
  return (
    <div className="min-h-screen bg-[url(/images/background.jpg)] bg-fixed bg-cover bg-center bg-no-repeat">
      <nav>
        <ul
          className="fixed top-[3%] left-1/2 -translate-x-1/2 z-1000 flex flex-wrap justify-evenly gap-2.5
            w-[min(100%,1000px)] p-2.5 list-none bg-[#333] border-[3px] border-black rounded-[15px]
            font-['Trebuchet_MS',Arial,sans-serif] text-[clamp(16px,2vw,25px)]
            max-[600px]:w-[95%] max-[600px]:text-base max-[600px]:p-2"
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white hover:text-red-500")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* If a page crashes, show the error page instead of a blank screen */}
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}
