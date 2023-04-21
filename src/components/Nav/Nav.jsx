import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../../styles/navstyles.css";
const Nav = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div>
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
            ></textarea>

            <div className="btn-container__wrapper">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
