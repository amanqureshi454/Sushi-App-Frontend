import { React, useState } from "react";
import HumbergerPage from "./HumbergerPage";
import { Link } from "react-router-dom";
import sushiItems from "./Listfood";
import MenuCss from "./Menu.module.css";

const Menu = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

  // Define a function to toggle the visibility of the Hamburger Page
  const toggleHamburger = () => {
    setIsHamburgerVisible(!isHamburgerVisible);
  };
  return (
    <>
      <div className={`${MenuCss.book_page} flex justify-between align-center`}>
        <div className={`${MenuCss.left_side}`}>
          <div className={`${MenuCss.navbar_book}`}>
            <div className={`${MenuCss.navbar_content}`}>
              <div
                className={`${MenuCss.hamburger} nav-links`}
                onClick={toggleHamburger}
              >
                <div className={MenuCss.line1}></div>
                <div className={MenuCss.line2}></div>
                <div className={MenuCss.line3}></div>
              </div>
              <div className={MenuCss.logo}>
                <h5>
                  <span>Q</span>itchen
                </h5>
              </div>
              <div className={`${MenuCss.links_wrapper}`}>
                <Link className={` ${MenuCss.link} mobile `} to="/">
                  Home
                </Link>
                <Link className={` ${MenuCss.link} mobile `} to="/about">
                  About
                </Link>
                <Link
                  to="/bookatable"
                  className={`${MenuCss.border} ${MenuCss.link} `}
                >
                  {" "}
                  Book A Table
                </Link>
              </div>
            </div>
          </div>
          <div className={`${MenuCss.book_heading}`}>
            <h1>MENU</h1>
          </div>
        </div>
        <div className={`${MenuCss.right_side}`}>
          <div className={MenuCss.menu_wrapper}>
            <div
              className={`${MenuCss.heading_wrapper} mt-4 flex justify-center align-middle gap-4`}
            >
              <a href="#maki">maki</a>
              <a href="#uramaki">uramaki</a>
              <a href="#rolls">special rolls</a>
            </div>
            <div className={`${MenuCss.main_menu} mt-8 `}>
            <h3 className={MenuCss.heading}id="maki">MAKI</h3>
              {sushiItems.map((item) => (
                <div
                  className={`${MenuCss.list_menu} px-10  mb-6 py-3 flex justify-start align-middle`}
                  key={item.id}
                >
                  <div className={MenuCss.img_div}>
                    <img src={item.imgSrc} alt={item.foodName} />
                  </div>

                  <div
                    className={`${MenuCss.menu_name_wrapper} flex justify-center gap-3 align-middle flex-col`}
                  >
                    <div
                      className={`${MenuCss.name_price} flex justify-between align-middle`}
                    >
                      <h3 className={MenuCss.menu_name}>{item.foodName}</h3>
                      <div className={MenuCss.dots}>
                        <h6>
                          ................................................................................
                        </h6>
                      </div>
                      <div className={MenuCss.price}>
                        <h5>${item.price}</h5>
                      </div>
                    </div>
                    <p className={MenuCss.menu_desc}>{item.shortDescription}</p>
                  </div>
                </div>
              ))}
              <h3 className={MenuCss.heading} id="uramaki">URAMAKI</h3>
              {sushiItems.map((item) => (
                <div
                  className={`${MenuCss.list_menu} px-10 mb-6 py-3 flex justify-start align-middle`}
                  key={item.id}
                >
                  <div className={MenuCss.img_div}>
                    <img src={item.imgSrc} alt={item.foodName} />
                  </div>

                  <div
                    className={`${MenuCss.menu_name_wrapper} flex justify-center align-middle flex-col`}
                  >
                    <div
                      className={`${MenuCss.name_price} flex justify-between align-middle`}
                    >
                      <h3 className={MenuCss.menu_name}>{item.foodName}</h3>
                      <div className={MenuCss.dots}>
                        <h6>
                          ................................................................................
                        </h6>
                      </div>
                      <div className={MenuCss.price}>
                        <h5>${item.price}</h5>
                      </div>
                    </div>
                    <p className={MenuCss.menu_desc}>{item.shortDescription}</p>
                  </div>
                </div>
              ))}
              <h3 className={MenuCss.heading}id="rolls">SPECIAL ROLLS</h3>
              {sushiItems.map((item) => (
                <div
                  className={`${MenuCss.list_menu} px-10 mb-6 py-3 flex justify-start align-middle`}
                  key={item.id}
                >
                  <div className={MenuCss.img_div}>
                    <img src={item.imgSrc} alt={item.foodName} />
                  </div>

                  <div
                    className={`${MenuCss.menu_name_wrapper} flex justify-center align-middle flex-col`}
                  >
                    <div
                      className={`${MenuCss.name_price} flex justify-between align-middle`}
                    >
                      <h3 className={MenuCss.menu_name}>{item.foodName}</h3>
                      <div className={MenuCss.dots}>
                        <h6>
                          ................................................................................
                        </h6>
                      </div>
                      <div className={MenuCss.price}>
                        <h5>${item.price}</h5>
                      </div>
                    </div>
                    <p className={MenuCss.menu_desc}>{item.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isHamburgerVisible && <HumbergerPage />}
    </>
  );
};

export default Menu;
