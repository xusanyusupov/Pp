import React from "react";
import "../contact/contact.scss";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact__wrapper">
          <p className="contact">Contact</p>
          <div className="contact__num">
            <b>8 (800) 890-46-56</b>
            <p>Mon-Fri 10:00 19:00</p>
          </div>
        </div>
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8730069158732!2d69.27446927654007!3d41.31162620069019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f4960f131%3A0xe7d3ad898ef8844c!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INGO0YHRgtC40YbQuNC4!5e0!3m2!1sru!2s!4v1730993843329!5m2!1sru!2s"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        <div className="location">
          <div className="loc__flex">
            <h3>Location</h3>
            <p>Use state</p>
          </div>
          <div className="loc__flex">
            <h3>Gmail</h3>
            <p>userONE@gmail.com</p>
          </div>
          <div className="loc__flex">
            <h3>Phone number</h3>
            <p>8 (800) 890-46-56</p>
          </div>
          <div className="loc__flex">
            <button>placing an order</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
