import { React, useState, useRef } from "react";
import HumberCss from "./HumbergerPage.module.css";
import { Link } from "react-router-dom";
import Home from "./Home";

const HumbergerPage = () => {
  const [closeNavbar, setCloseNavbar] = useState(false);


   const onClickOpenNavbar = () => {
     setCloseNavbar(closeNavbar);

}
  return (
    <>
      <div className={`${HumberCss.navlinks} `}>
        <div className={HumberCss.navlinks_inner}>
           {/* <div
            className={`${HumberCss.hamburger} nav-links`}
            onClick={onClickOpenNavbar}
           
          >
            <div className={HumberCss.line1}></div>
            <div className={HumberCss.line2}></div>
            <div className={HumberCss.line3}></div>
          </div>  */}
          <ul>
            <li className="flex flex-col justify-center align-middle mt-14">
              <Link className={HumberCss.links_navbar} to="/menu">
                MENU
              </Link>
              <Link className={HumberCss.links_navbar} to="/bookatable">
                RESERVATION
              </Link>
              <Link className={HumberCss.links_navbar} to="/about">
                ABOUT
              </Link>
              <Link className={HumberCss.links_navbar} to="/contact">
                CONTACT
              </Link>
              <Link className={HumberCss.links_navbar} to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* {closeNavbar && <Home/>} */}
    </>
  );
};

export default HumbergerPage;
