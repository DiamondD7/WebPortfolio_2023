import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import emailjs from "@emailjs/browser";

import "../../styles/navstyles.css";
const Nav = forwardRef((props, ref) => {
  const form = useRef();
  const myRef = useRef(null);

  const [showSent, setShowSent] = useState(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqtts2v",
        "template_xqm29rw",
        form.current,
        "DwJN5taYq7_gUFIXk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setShowSent(true);
          }, 10);

          setTimeout(() => {
            setShowSent(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setTimeout(() => {
            setShowSent(false);
          }, 500);

          setTimeout(() => {
            setShowSent(null);
          }, 4000);
        }
      );

    e.target.reset();
  };

  return (
    <div ref={myRef}>
      <div className="nav-container__wrapper">
        <div>
          <h1 className="contanctme__text">Contact me</h1>
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <label htmlFor="name">Name</label>
            <br />
            <input class id="name" name="from_name" type="text" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" name="user_email" type="text" />
            <br />
            <label htmlFor="subject">Subject</label>
            <br />
            <input id="subject" name="subject" type="text" />

            <br />
            <label htmlFor="msg">Message</label>
            <br />
            <textarea
              id="msg"
              name="message"
              className="message-input"
              placeholder="what are your requests..."
            ></textarea>

            <div className="btn-container__wrapper">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>

          {showSent === true ? (
            <div className="success-fail__wrapper">
              <p id="success-p" className="success-contact">
                SENT!
              </p>
            </div>
          ) : showSent === false ? (
            <div>
              <p className="fail-contact">ERROR!</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
});

export default Nav;
