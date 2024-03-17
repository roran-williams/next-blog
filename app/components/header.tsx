import React from "react";
import Topics from "./topics";
import Link from "next/link";

interface HeaderProps {
  handleTopicClick: (topic: string) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="container">
      <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <Link href="#" className="link-secondary">
              Subscribe
            </Link>
          </div>
          <div className="col-4 text-center">
            <Link href="/" className="blog-header-logo text-body-emphasis text-decoration-none">
              Home
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link href="#" className="link-secondary" aria-label="Search">
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
            <Link className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </Link>
          </div>
        </div>
      </header>
      <Topics handleTopicClick={props.handleTopicClick}/>
    </div>
  );
}

export default Header;
