import React from "react";
import "../return/return.scss";

const Return = () => {
  return (
    <>
      <div className="container">
        <div className="return__wrapper">
          <div className="return__main">
            <p>Return</p>
          </div>
          <div className="return__text">
            <b>Exchange and return at the buyer's request</b>
            <div className="return">
              <p>
                If the product does not suit you for some reason, you have the
                right to return it or exchange it for another one within 7 days*
                from the date of purchase, subject to the following conditions:
              </p>
            </div>
            <div className="return">
              <ul>
                <li>
                  The product has its original appearance and is in commercial
                  condition;
                </li>
                <li>
                  The product is fully assembled, including packaging materials;
                </li>
                <li>
                  The product is fully assembled, including packaging materials;
                </li>
                <li>
                  The product packaging is not damaged and has its original
                  commercial appearance;
                </li>
                <li>
                  There is a document confirming the purchase in our online
                  store.
                </li>
                <li>
                  Goods from other cities can be sent to us by a transport
                  company, in which case the services of the transport company
                  are paid by the client.
                </li>
                <li>
                  Within 14 days for certain brands. When placing an order,
                  check with the manager
                </li>
              </ul>

              <b>Exchange and return at the buyer's request</b>
              <p>Reasons for exchange or return due to seller error:</p>

              <ul>
                <li>Incomplete product set</li>
                <li>Defective or faulty product</li>
                <li>
                  If you find a defect, marriage or incomplete set of the goods,
                  you need to take a photo of the defect and send it to
                  mail@at-svet.ru, indicating a brief description of the nature
                  of the marriage/
                </li>
                <li>
                  We will replace the defective product or deliver the missing
                  parts. Delivery will be free of charge
                </li>
              </ul>
              <b>Refund of funds</b>
              <p>
                Refunds are made by transferring funds to the buyer's bank
                account upon receipt of a request from the buyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Return;
