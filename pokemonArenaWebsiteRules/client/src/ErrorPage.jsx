import { Link } from "react-router";

// Shown by react-error-boundary (see Navbar.jsx) when a page crashes.
// resetErrorBoundary clears the error so the page can render again.
export default function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <div className="mx-auto mt-40 w-[min(90%,600px)] rounded-[15px] border-[3px] border-black bg-white p-6 text-center">
      <h1 className="mb-2 text-2xl font-bold">Something went wrong</h1>
      <p className="mb-4 text-red-600">{error.message}</p>
      <Link
        to="/home"
        onClick={resetErrorBoundary}
        className="rounded-lg bg-[#333] px-4 py-2 text-white hover:text-red-500"
      >
        Go back to the Home page
      </Link>
    </div>
  );
}
