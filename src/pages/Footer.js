import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import './Footer.css'


function Footer() {
  const data = [
    {
      type: "lazarev.agency",
      subTypes: [
        "Homepage",
        "Pricing",
        "Demo",
        "About",
      ],
    },
    {
      type: "FEATURES",
      subTypes: [
        "Overview",
        "EMR and Charting",
        "Integrated billing"
      ],
    },
    {
      type: "Company",
      subTypes: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    {
      type: "LEGAL",
      subTypes: ["Provacy Policy", "Terms & Condition", "Bussiness Associate Agreement"],
    },
  ];
  const socialLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>lazarev.agency</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
        We build engaging user experience for early-stage startups by connecting the dots between users’ needs and the client’s business model.
        </p>

        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a href="#">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;