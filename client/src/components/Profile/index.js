import React from "react";
import "./styles.scss";

function Profile() {
  return (
    <div className="Profile section">
      <p className="section-title">Profile</p>
      <div className="topic">
        <p className="summary">
          Senior Frontend Engineer with deep experience in React, Next.js, and
          TypeScript. Proven track record of delivering scalable,
          high-performance web applications with a strong focus on SEO,
          internationalization, and modern UI architecture. Solid full-stack
          experience supported by Node.js and cloud technologies.
          <br />
          <br /> •{" "}
          <a
            href="https://www.w3are.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3are
          </a>{" "}
          — a financial management platform that allows users to create
          invoices, generate payment links, and accept payments in
          cryptocurrency.
          <br />•{" "}
          <a
            href="https://www.swaps.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crypto Swaps
          </a>{" "}
          — a cryptocurrency exchange platform that enables users to buy and
          sell various cryptocurrencies quickly and securely.
          <br />•{" "}
          <a href="https://bigbi.io/" target="_blank" rel="noopener noreferrer">
            BigBI
          </a>{" "}
          — a business intelligence platform that helps organizations manage,
          process, and visualize large-scale data.
          <br />•{" "}
          <a
            href="https://originreports.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Origin Reports
          </a>{" "}
          — data visualization platform designed for academic publishers to
          monitor and analyze journal performance.
          <br />•{" "}
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Active Flow One (AFO)
          </a>{" "}
          — Unity-based 3D application which helps people to work out at home
          using gamification techniques. (Non-commercial project, trying to
          implement my own ideas).
        </p>
      </div>
    </div>
  );
}

export default Profile;
