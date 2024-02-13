import { React, useState } from "react";
import { Link } from "react-router-dom";
import HumbergerPage from "./HumbergerPage";
import AboutCss from "./About.module.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
const About = () => {
  const [closeNavbar, setCloseNavbar] = useState(false);

  const onClickCloseNavbar = () => {
    setCloseNavbar(!closeNavbar);
  };
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`${AboutCss.book_page} flex justify-between align-center`}
      >
        <div className={`${AboutCss.left_side}`}>
          <div className={`${AboutCss.navbar_book}`}>
            <div className={`${AboutCss.navbar_content}`}>
              <div
                className={`${AboutCss.hamburger}  nav-links`}
                onClick={onClickCloseNavbar}
              >
                <div className={AboutCss.line1}></div>
                <div className={AboutCss.line2}></div>
                <div className={AboutCss.line3}></div>
              </div>
              <div className={AboutCss.logo}>
                <h5>
                  <span>Q</span>itchen
                </h5>
              </div>
              <div className={`${AboutCss.links_wrapper}`}>
                <Link className={` ${AboutCss.link} mobile `} to="/menu">
                  Menu
                </Link>
                <Link className={` ${AboutCss.link} mobile `} to="/about">
                  About
                </Link>
                <Link
                  to="/bookatable"
                  className={`${AboutCss.border} ${AboutCss.link} `}
                >
                  {" "}
                  Book A Table
                </Link>
              </div>
            </div>
          </div>
          <div className={`${AboutCss.book_heading}`}>
            <h1>ABOUT</h1>
          </div>
        </div>
        <div className={`${AboutCss.right_side}`}>
          <div
            className={`${AboutCss.right_side_wrapper} flex gap-8 flex-col justify-center`}
          >
            <div
              className={`${AboutCss.div_one} flex align-middle gap-5 justify-center`}
            >
              <div className={`${AboutCss.left_side_d_one} border`}>
                <h3 className={AboutCss.h3_left}>Sushi Artistry ReDefined</h3>
                <p className={AboutCss.para_left}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem illo quisquam praesentium blanditiis praesentium
                  blanditiis
                </p>
              </div>
              <div className={`${AboutCss.right_side_d_one} `}>
                <Slider {...settings}>
                  <div className={AboutCss.imgwrapper}>
                    <img
                      src="https://framerusercontent.com/images/EKJJBnLQzSzsS1Sp8JrOMfZgqw.webp"
                      alt=""
                    />
                  </div>
                  <div className={AboutCss.imgwrapper}>
                    <img
                      src="https://framerusercontent.com/images/slPotYXPFXAfEsa1a4GJhZIk.webp"
                      alt=""
                    />
                  </div>
                  <div className={AboutCss.imgwrapper}>
                    <img
                      src="https://framerusercontent.com/images/InB1qO4eodYHQXKOVBszhLURHE.webp"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div
              className={`${AboutCss.div_two} flex align-middle gap-6 mt-5 justify-center`}
            >
              <div className={AboutCss.center_side_d_two}>
                <div className={`${AboutCss.div_two_wrapper} mt-2`}>
                  <div className="flex align-middle justify-center">
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                  </div>
                  <h2 className={`${AboutCss.h2_wrapper}`}>trip advisor</h2>
                  <h4 className={`${AboutCss.h4_small}`}> best sushi</h4>
                </div>
              </div>
              <div className={AboutCss.center_side_d_two}>
                <div className={`${AboutCss.div_two_wrapper} mt-2`}>
                  <div className="flex align-middle justify-center">
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                  </div>
                  <h2 className={`${AboutCss.h2_wrapper}`}>michelin guide</h2>
                  <h4 className={`${AboutCss.h4_small}`}>quality food</h4>
                </div>
              </div>
              <div className={AboutCss.center_side_d_two}>
                <div className={`${AboutCss.div_two_wrapper} mt-2`}>
                  <div className="flex align-middle justify-center">
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                    <FaStar className="m-1" color="white" size={18} />
                  </div>
                  <h2 className={`${AboutCss.h2_wrapper}`}>start dining</h2>
                  <h4 className={`${AboutCss.h4_small}`}>cool vibe</h4>
                </div>
              </div>
            </div>
            <div
              className={`${AboutCss.div_three} flex align-middle gap-5 justify-center`}
            >
              <div className={AboutCss.left_side_d_three}>
                <Slider {...settings}>
                  <div className={AboutCss.imgwrapper}>
                    <img
                      src="https://framerusercontent.com/images/InB1qO4eodYHQXKOVBszhLURHE.webp"
                      alt=""
                    />
                  </div>
                  <div className={AboutCss.imgwrapper}>
                    <img
                      src="https://framerusercontent.com/images/EKJJBnLQzSzsS1Sp8JrOMfZgqw.webp"
                      alt=""
                    />
                  </div>
                  <div className={AboutCss.imgwrapper}>
                    <img
                      src="https://framerusercontent.com/images/slPotYXPFXAfEsa1a4GJhZIk.webp"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
              <div className={AboutCss.right_side_d_three}>
                <h3 className={`${AboutCss.h3_left} text-center`}>our story</h3>
                <p className={`${AboutCss.para_left} text-center`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem illo quisquam praesentium blanditiis praesentium
                  blanditiis Quidem illo quisquam praesentium blanditiis
                  praesentium blanditiis
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${AboutCss.right_side_bottom} flex justify-center align-middle rounded gap-12`}
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
export default About;
