import { React, useState } from "react";
import { Link } from "react-router-dom";
import BookCss from "./BookTable.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HumbergerPage from "./HumbergerPage";

const BookTable = () => {
  const [closeNavbar, setCloseNavbar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onClickCloseNavbar = () => {
    setCloseNavbar(!closeNavbar);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${window.location.origin}/bookatable`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // const progressBar = toast.configure({
      //   hideProgressBar: false,
      //   progressStyle: { background: "blue" },
      // });
      toast("✅ Data Submitted Successfully !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }); // Show error notification
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      console.log(data); // Check the response from the server
    } catch (error) {
      console.error("💥Error submitting form:", error);
      toast.error("Failed to Submit Data", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }); // Show error notification
    }
  };
  return (
    <>
      <div className={`${BookCss.book_page} flex justify-between align-center`}>
        <div className={`${BookCss.left_side}`}>
          <div className={`${BookCss.navbar_book}`}>
            <div className={`${BookCss.navbar_content}`}>
              <div
                className={`${BookCss.hamburger}  nav-links`}
                onClick={onClickCloseNavbar}
              >
                <div className={BookCss.line1}></div>
                <div className={BookCss.line2}></div>
                <div className={BookCss.line3}></div>
              </div>
              <div className={BookCss.logo}>
                <h5>
                  <span>Q</span>itchen
                </h5>
              </div>
              <div className={`${BookCss.links_wrapper}`}>
                <Link className={` ${BookCss.link} mobile `} to="/">
                  Home
                </Link>
                <Link className={` ${BookCss.link} mobile `} to="/about">
                  About
                </Link>
                <Link
                  to="/bookatable"
                  className={`${BookCss.border} ${BookCss.link} `}
                >
                  {" "}
                  Book A Table
                </Link>
              </div>
            </div>
          </div>
          <div className={`${BookCss.book_heading}`}>
            <h1>
              Book <br />A Table
            </h1>
          </div>
        </div>
        <div className={`${BookCss.right_side}`}>
          <div
            className={`${BookCss.right_side_wrapper} flex flex-col justify-center`}
          >
            <div className={`${BookCss.heading_right} mt-8`}>
              <h3>Reservation</h3>
              <p>
                Secure the Spot at Qitchen, where Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Minima harum optio architecto,
                distinctio ullam e
              </p>
            </div>
            <form
              action="/bookatable"
              method="post"
              onSubmit={handleSubmit}
              className={`${BookCss.form} flex flex-col justify-center`}
            >
              <input
                className={`${BookCss.input}`}
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className={`${BookCss.input}`}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className={`${BookCss.input_textarea}`}
                type="text"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className={`${BookCss.btn_resevation} ${BookCss.input}  text-white rounded`}
              >
                Reserve
              </button>
              <ToastContainer
                style={{
                  width: "400px",
                  fontSize: "18px",
                  padding: "8px 20px",
                  fontFamily: "sushi-font-1",
                  borderRadius: "10px",
                  color: "#fff",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  border: "2px solid #555",
                }}
              />
            </form>
          </div>
          <div
            className={`${BookCss.right_side_bottom} flex justify-center align-middle rounded gap-12`}
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

export default BookTable;
