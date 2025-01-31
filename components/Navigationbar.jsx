"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

const MyNavbar = () => {
// const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// useEffect(() => {
//   document.body.dataset.bsTheme = theme; // Apply theme to body
//   localStorage.setItem("theme", theme); // Save theme to localStorage
// }, [theme]);

// const toggleTheme = () => {
//   setTheme(theme === "light" ? "dark" : "light");
// };
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top rounded-5 pe-3 bg-primary-subtle shadow-lg opacity-75">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Tofa7a
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item ${isActive("/")}`}>
              <Link href="/" className="nav-link">
                #Peter Eshak
              </Link>
            </li>
            <li className={`nav-item ${isActive("/personalData")}`}>
              <Link href="/personalData" className="nav-link">
                #PersonalData
              </Link>
            </li>
            <li className={`nav-item ${isActive("/projects")}`}>
              <Link href="/projects" className="nav-link">
                #Projects
              </Link>
            </li>
            <li className={`nav-item ${isActive("/proLang")}`}>
              <Link href="/proLang" className="nav-link">
                #Programming Languages
              </Link>
            </li>
            <li className={`nav-item ${isActive("/certifications")}`}>
              <Link href="/certifications" className="nav-link">
                #Certifications
              </Link>
            </li>
          </ul>
          {/* <button className="btn btn-primary" onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button> */}
          {/* <div className="form-check form-switch mx-2">
            <label
              htmlFor="checkTheme text-body"
              className="text-white">
              Dark Mode
            </label>
            <input
              type="checkbox"
              className="form-check-input p-2"
              title="Theme Mode"
              role="switch"
              id="checkTheme flexSwitchCheckChecked"
              // checked
              onClick={myFunction()}
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;




















