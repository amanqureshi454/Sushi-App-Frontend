import { React, useState } from "react";
import { Link } from "react-router-dom";
import HumbergerPage from "./HumbergerPage";
import "font-awesome/css/font-awesome.min.css";
import ContactCss from './Contact.module.css';

const Contact = () => {
  const [closeNavbar, setCloseNavbar] = useState(false);

  const onClickCloseNavbar = () => {
    setCloseNavbar(!closeNavbar);
  };
  return (
    <>
      <div
        className={`${ContactCss.book_page} flex justify-between align-center`}
      >
        <div className={`${ContactCss.left_side}`}>
          <div className={`${ContactCss.navbar_book}`}>
            <div className={`${ContactCss.navbar_content}`}>
              <div
                className={`${ContactCss.hamburger}  nav-links`}
                onClick={onClickCloseNavbar}
              >
                <div className={ContactCss.line1}></div>
                <div className={ContactCss.line2}></div>
                <div className={ContactCss.line3}></div>
              </div>
              <div className={ContactCss.logo}>
                <h5>
                  <span>Q</span>itchen
                </h5>
              </div>
              <div className={`${ContactCss.links_wrapper}`}>
                <Link className={` ${ContactCss.link} mobile `} to="/menu">
                  Menu
                </Link>
                <Link className={` ${ContactCss.link} mobile `} to="/about">
                  About
                </Link>
                <Link
                  to="/bookatable"
                  className={`${ContactCss.border} ${ContactCss.link} `}
                >
                  {" "}
                  Book A Table
                </Link>
              </div>
            </div>
          </div>
          <div className={`${ContactCss.book_heading}`}>
            <h1>Contact</h1>
          </div>
        </div>
        <div
          className={`${ContactCss.right_side}flex align-middle flex-col justify-center`}
        >
          <div
            className={`${ContactCss.div_three} flex align-middle gap-3 mb-5 justify-center`}
          >
            <div className={ContactCss.left_side_d_three}>
              <h2 className={ContactCss.opening_head}>
                Opening <br />
                hours
              </h2>
              <div
                className={`${ContactCss.day_time_wrapper} flex justify-center align-middle flex-col`}
              >
                <div
                  className={`${ContactCss.list} flex justify-center align-middle`}
                >
                  <h5 className={ContactCss.day}>monday</h5>
                  <h5 className={ContactCss.dots}>
                    ...................................
                  </h5>
                  <h5 className={ContactCss.time}>16:00-22:00</h5>
                </div>
                <div
                  className={`${ContactCss.list} flex justify-center align-middle`}
                >
                  <h5 className={ContactCss.day}>tuesday</h5>
                  <h5 className={ContactCss.dots}>
                    ...................................
                  </h5>
                  <h5 className={ContactCss.time}>16:00-22:00</h5>
                </div>
                <div
                  className={`${ContactCss.list} flex justify-center align-middle`}
                >
                  <h5 className={ContactCss.day}>wednesday</h5>
                  <h5 className={ContactCss.dots}>
                    ...................................
                  </h5>
                  <h5 className={ContactCss.time}>16:00-22:00</h5>
                </div>
                <div
                  className={`${ContactCss.list} flex justify-center align-middle`}
                >
                  <h5 className={ContactCss.day}>thursday</h5>
                  <h5 className={ContactCss.dots}>
                    ...................................
                  </h5>
                  <h5 className={ContactCss.time}>16:00-22:00</h5>
                </div>
                <div
                  className={`${ContactCss.list} flex justify-center align-middle`}
                >
                  <h5 className={ContactCss.day}>firday</h5>
                  <h5 className={ContactCss.dots}>
                    ...................................
                  </h5>
                  <h5 className={ContactCss.time}>16:00-22:00</h5>
                </div>
                <div
                  className={`${ContactCss.list} flex justify-center align-middle`}
                >
                  <h5 className={ContactCss.day}>Sat&Sun</h5>
                  <h5 className={ContactCss.dots}>
                    ...................................
                  </h5>
                  <h5 className={ContactCss.time}>16:00-22:00</h5>
                </div>
              </div>
            </div>
            <div
              className={`${ContactCss.right_side_d_three} flex flex-col g-4 justify-center align-middle `}
            >
              <div
                className={`${ContactCss.img_1} flex  justify-around align-middle`}
              >
                <div className={ContactCss.img_wrapper}>
                  <img
                    src="https://framerusercontent.com/images/InB1qO4eodYHQXKOVBszhLURHE.webp"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className={ContactCss.img_wrapper}>
                  <img
                    src="https://framerusercontent.com/images/EKJJBnLQzSzsS1Sp8JrOMfZgqw.webp"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className={ContactCss.img_2}>
                <div
                  className={`${ContactCss.img_1} mt-3 flex justify-around align-middle`}
                >
                  <div className={ContactCss.img_wrapper}>
                    <img
                      src="https://framerusercontent.com/images/EKJJBnLQzSzsS1Sp8JrOMfZgqw.webp"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className={ContactCss.img_wrapper}>
                    <img
                      src="https://framerusercontent.com/images/slPotYXPFXAfEsa1a4GJhZIk.webp"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${ContactCss.div_three} flex align-middle gap-3 justify-center`}
          >
            <div className={ContactCss.left_side_d_two}>
              <div className={`${ContactCss.menu}`}>
                <div
                  className={`${ContactCss.img_menu} flex align-middle justify-around`}
                >
                  <h5> Route</h5>
                  <div className={ContactCss.circle_right}>
                    {/* <svg
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
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={ContactCss.right_side_d_two}>
              <h2 className={ContactCss.opening_head}>get in touch</h2>
              <div
                className={`${ContactCss.list_con_1} flex justify-start align-middle`}
              >
                <h5 className={ContactCss.getintouch}>Address</h5>
                <h5 className={ContactCss.day}>
                  23 greenfield avenue prague 120 00
                </h5>
              </div>
              <div
                className={`${ContactCss.list_con} flex justify-start align-middle`}
              >
                <h5 className={ContactCss.getintouch}>Phone</h5>
                <h5 className={ContactCss.day}>+2211133365</h5>
              </div>
              <div
                className={`${ContactCss.list_con} flex justify-start align-middle`}
              >
                <h5 className={ContactCss.getintouch}>Email</h5>
                <h5 className={ContactCss.day}>sushisentation@gmail.com</h5>
              </div>
              <div
                className={`${ContactCss.list_con} flex justify-start align-middle`}
              >
                <h5 className={ContactCss.getintouch}>Follow</h5>
                <h5 className={ContactCss.day}>
                  <div
                    className={`${ContactCss.links_wrapper} flex justify-start align-center`}
                  >
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                  </div>
                </h5>
              </div>
            </div>
          </div>
          <div
            className={`${ContactCss.right_side_bottom} flex justify-center align-middle rounded gap-12`}
          >
            <h4>©️ Pawel Gola</h4>
            <h4>Licensing</h4>
            <h4>StyleGuide</h4>
          </div>
        </div>
      </div>
      {closeNavbar && <HumbergerPage />}
    </>
  );
};

export default Contact;
