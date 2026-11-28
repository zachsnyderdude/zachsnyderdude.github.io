import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import "./index.css";
import Navbar from "./Navbar.jsx";
import App from "./App.jsx";
import PokemonPage from "./PokemonPage.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { tabs } from "./tabs.jsx";

const router = createBrowserRouter([
  {
    // The Navbar route wraps every page
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        // Home (App.jsx) with the tab routes nested inside it
        path: "home",
        element: <App />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          ...tabs.map((tab) => ({ path: tab.path, element: tab.element })),
        ],
      },
      // The other Navbar pages (blank for now)
      { path: "pokemon-page", element: <PokemonPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
