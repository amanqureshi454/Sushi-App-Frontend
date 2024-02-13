import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import HumbergerPage from "./HumbergerPage";
import HomeCss from "./Home.module.css";
import "./responsive.css";

const Home = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

  // Define a function to toggle the visibility of the Hamburger Page
  const toggleHamburger = () => {
    setIsHamburgerVisible(!isHamburgerVisible);
  };
  return (
    <>
      <div className={HomeCss.home}>
        
           <div className={`${HomeCss.main_img}`}>
             {/* <video className={HomeCss.main_video} autoPlay loop muted>
              <source src="/foodimg/video.mp4" type="video/mp4" />
              Your browser does not support the video tag. */}
           
            <div className={`${HomeCss.navbar} bg-white rounded-lg`}>
              <div className={`${HomeCss.navbar_content}`}>
                <div
                  className={`${HomeCss.hamburger} nav-links`}
                  onClick={toggleHamburger}
                >
                  <div className={HomeCss.line1}></div>
                  <div className={HomeCss.line2}></div>
                  <div className={HomeCss.line3}></div>
                </div>

                <div className={HomeCss.logo}>
                  <h5>
                    <span>Q</span>itchen
                  </h5>
                </div>
                <div className={`${HomeCss.nav_link_wrapper}`}>
                  <Link
                    className={` ${HomeCss.link} mobile `}
                    to="/menu"
                  >
                    Menu
                  </Link>
                  <Link
                    className={` ${HomeCss.link} mobile `}
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    to="/bookatable"
                    className={`${HomeCss.border} ${HomeCss.link} `}
                  >
                    {" "}
                    Book A Table
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${HomeCss.heading_home}`}>
              <h1>
                SUSHI <br />
                SENSATION
              </h1>
            </div>
            <div className={`${HomeCss.social_links}`}>
              <div
                className={`${HomeCss.links_wrapper} flex justify-start align-center`}
              >
                <div className={`intsa ${HomeCss.circle}`}>
                  <i className="fa fa-instagram"></i>
                </div>
                <div className={`facebook ${HomeCss.circle}`}>
                  <i className="fa fa-facebook"></i>
                </div>
                <div className={`twitter ${HomeCss.circle}`}>
                  <i className="fa fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper">
            <Link to="/menu">
              <div className={`${HomeCss.menu}`}>
                <div
                  className={`${HomeCss.img_menu} flex align-middle justify-around`}
                >
                  <h5>Menu</h5>
                  {/* <div className={HomeCss.circle_right}>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                        fill="white"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            </Link>
            <Link to="/about">
              <div className={`${HomeCss.about}`}>
                <div
                  className={`${HomeCss.img_about} flex align-middle justify-around`}
                >
                  <h5>About</h5>
                  {/* <div className={HomeCss.circle_right}>
                    <svg
                      width="22"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                        fill="white"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            </Link>
            <Link to="/bookatable">
              <div className={`${HomeCss.book}`}>
                <div
                  className={`${HomeCss.img_book} flex align-middle justify-around`}
                >
                  <h5>Book A Table</h5>
                  {/* <div className={HomeCss.circle_right}>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                        fill="white"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
   
      {isHamburgerVisible && <HumbergerPage />}
    </>
  );
};

export default Home;
