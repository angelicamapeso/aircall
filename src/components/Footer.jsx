import React from "react";

import PhoneIcon from "../icons/phone.svg";
import PersonIcon from "../icons/person.svg";
import GridIcon from "../icons/grid.svg";
import GearIcon from "../icons/gear.svg";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <img src={PhoneIcon} />
          </li>
          <li>
            <img src={PersonIcon} />
          </li>
          <li>
            <div className="grid">
              <img src={GridIcon} />
            </div>
          </li>
          <li>
            <img src={GearIcon} />
          </li>
          <li>
            <span className="circle"></span>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
