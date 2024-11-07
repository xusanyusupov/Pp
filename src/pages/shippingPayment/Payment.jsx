import React from "react";
import "../shippingPayment/payment.scss";

const Payment = () => {
  return (
    <>
      <div className="container">
        <div className="payment__wrapper">
          <div className="payment__deliver">
            <p>Delivery and payment</p>
          </div>
          <div className="payment__text">
            <div className="payment__text1">
              <b>Delivery and payment</b>
              <p>
                We deliver from a warehouse in Moscow and the Moscow region
                using our own courier service. We deliver our products
                throughout the Russian Federation and to all CIS countries using
                transport companies. Delivery times: 4-6 weeks
              </p>
            </div>
            <div className="payment__text1">
              <b> Courier delivery</b>
              <p>
                FREE delivery within the Moscow Ring Road of any order over
                5,000 ₽. Orders over 30,000 ₽ have free delivery, including 15
                km from the Moscow Ring Road
              </p>
            </div>
            <div className="payment__text1">
              <b>Pickup</b>
              <p>
                Any order can be picked up in person at the address: Moscow,
                Dmitrovskoe shosse, 100s2
              </p>
            </div>
          </div>
        </div>
        <div className="payment__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8730069158732!2d69.27446927654007!3d41.31162620069019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f4960f131%3A0xe7d3ad898ef8844c!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INGO0YHRgtC40YbQuNC4!5e0!3m2!1sru!2s!4v1730993843329!5m2!1sru!2s"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Payment;
