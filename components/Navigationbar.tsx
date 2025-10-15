"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
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
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
