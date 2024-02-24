import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white h-full shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-1 rtl:space-x-reverse">
            <p>🎬</p>
            <span className="self-center text-2xl font-bold font-Outfit whitespace-nowrap">
              Movie Mate
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024 <h6 className="inline hover:underline">Movie Mate™</h6>. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
