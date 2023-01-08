import NextLink from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
const Header = () => {
  const themeValues = ["cupcake", "dark"];

  useEffect(() => {
    themeChange(false);
  });
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NextLink href="/">
                    <a>Home</a>
                  </NextLink>
                </li>

                <li>
                  <NextLink href="/project">
                    <a>Projects</a>
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <NextLink href="/">
                <a className="normal-case text-4xl font-bold text-primary-focus">
                  SEHAJ
                </a>
              </NextLink>
            </div>
          </div>
          <div className="navbar-end ">
            <ul className="menu menu-horizontal px-1">
              <li className="hidden lg:flex">
                <NextLink href="/">
                  <a>Home</a>
                </NextLink>
              </li>
              <li className="hidden lg:flex">
                <NextLink href="/project">
                  <a>Projects</a>
                </NextLink>
              </li>
              {/* <li tabIndex={0}>
                <a>
                  Themes
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Dark</a>
                  </li>
                  <li>
                    <a>Light</a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <select className="select select-secondary" data-choose-theme>
              <option value="">Default</option>
              <option value="light">Light</option>
              <option value="synthwave">Synthwave</option>
              <option value="cupcake">Cupcake</option>
              <option value="valentine">Valentine</option>
              <option value="forest">Forest</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
