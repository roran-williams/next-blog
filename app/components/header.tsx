// components/header.tsx
import React from "react";
import Topics from "./topics";
import Link from "next/link";


const Header = () => {
  return (
    <div className="container">
      <header className="border-b lh-1 py-3">
        <div className="flex justify-between items-center">
          <div className="pt-1">
            <Link href="#" className="text-blue-500 hover:text-blue-700">
              Subscribe
            </Link>
          </div>
          <div className="text-center">
            <Link href="#" className="text-xl font-bold text-gray-800">
              roran-williams
            </Link>
          </div>
          <div className="flex justify-end items-center">
            <Link href="#" className="text-blue-500 hover:text-blue-700 mr-4" aria-label="Search">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
            </Link>
            <Link href="#" className="btn btn-sm btn-outline-secondary">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <Topics />
    </div>
  );
}

export default Header;
