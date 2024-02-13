import { React, useState } from "react";
import BlogCss from "./Blog.module.css";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import HumbergerPage from "./HumbergerPage";

const BlogPage = () => {
  const [closeNavbar, setCloseNavbar] = useState(false);

  const onClickCloseNavbar = () => {
    setCloseNavbar(!closeNavbar);
  };
  return (
    <>
      <div className={`${BlogCss.book_page} flex justify-between align-center`}>
        <div className={`${BlogCss.left_side}`}>
          <div className={`${BlogCss.navbar_book}`}>
            <div className={`${BlogCss.navbar_content}`}>
              <div
                className={`${BlogCss.hamburger}  nav-links`}
                onClick={onClickCloseNavbar}
              >
                <div className={BlogCss.line1}></div>
                <div className={BlogCss.line2}></div>
                <div className={BlogCss.line3}></div>
              </div>
              <div className={BlogCss.logo}>
                <h5>
                  <span>Q</span>itchen
                </h5>
              </div>
              <div className={`${BlogCss.links_wrapper}`}>
                <Link className={` ${BlogCss.link} mobile `} to="/">
                  Home
                </Link>
                <Link className={` ${BlogCss.link} mobile `} to="/about">
                  About
                </Link>
                <Link
                  to="/bookatable"
                  className={`${BlogCss.border} ${BlogCss.link} `}
                >
                  {" "}
                  Book A Table
                </Link>
              </div>
            </div>
          </div>
          <div className={`${BlogCss.book_heading}`}>
            <h1>Blog</h1>
          </div>
        </div>
        <div className={`${BlogCss.right_side}`}>
          <div className={BlogCss.menu_wrapper}>
            <div className={`${BlogCss.main_menu} mt-8 `}>
              <h3 className={BlogCss.heading}>LATEST NEWS</h3>
              {Blog.map((item) => (
                <div
                  className={`${BlogCss.list_menu} px-10 mb-6 py-3 flex justify-start align-middle`}
                  key={item.id}
                >
                  <div className={BlogCss.img_div}>
                    <img src={item.imgSrc} alt={item.foodName} />
                  </div>

                  <div
                    className={`${BlogCss.menu_name_wrapper} flex justify-center align-middle flex-col`}
                  >
                    <div className={`${BlogCss.name_price} `}>
                      <div className={BlogCss.date}>
                        <h5>{item.date}</h5>
                      </div>
                      <h3 className={BlogCss.menu_name}>{item.foodName}</h3>
                    </div>
                    <p className={BlogCss.menu_desc}>{item.shortDescription}</p>
                  </div>
                </div>
              ))}
              <div
                className={`${BlogCss.right_side_bottom} flex justify-center align-middle rounded gap-12`}
              >
                <h4>©️ Pawel Gola</h4>
                <h4>Licensing</h4>
                <h4>StyleGuide</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {closeNavbar && <HumbergerPage />}
    </>
  );
};

export default BlogPage;
