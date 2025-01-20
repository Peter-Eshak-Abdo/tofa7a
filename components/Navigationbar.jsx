"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MyNavbar = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top rounded-5 pe-3 bg-primary-subtle shadow-lg opacity-75">
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
                #Home
              </Link>
            </li>
            <li className={`nav-item ${isActive("/about")}`}>
              <Link href="/about" className="nav-link">
                #About
              </Link>
            </li>
            <li className={`nav-item ${isActive("/projects")}`}>
              <Link href="/projects" className="nav-link">
                #Projects
              </Link>
            </li>
            <li className={`nav-item ${isActive("/skills")}`}>
              <Link href="/skills" className="nav-link">
                #Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;

