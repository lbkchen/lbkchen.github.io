import Link from "next/link";

import Globals from "../components/globals";
import theme from "../styles/theme";

export default ({ children }) => (
  <div className="main">
    <Link href="/">
      <a className="logo-text">
        <span className="logo-ken">KEN</span>
        <span> </span>
        <span className="logo-chen">CHEN</span>
      </a>
    </Link>

    {children}

    {/* global styles */}
    <Globals />

    {/* local styles */}
    <style jsx>
      {`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 64px 64px;
        }

        .logo-text {
          padding: 16px 48px;
          margin-bottom: 48px;
          background-color: ${theme.colors.offBlack};
          font-family: ${theme.fonts.headers};
          font-size: 24px;
          color: ${theme.colors.offWhite};
          text-decoration: none;
          letter-spacing: 1.8px;
          transition: 80ms;
        }

        .logo-text:hover {
          color: ${theme.colors.offWhite};
          opacity: 0.9;
        }

        .logo-ken {
          font-weight: 100;
        }

        .logo-chen {
          font-weight: 400;
        }
      `}
    </style>
  </div>
);
