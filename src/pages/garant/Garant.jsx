import React from 'react'
import "../garant/garant.scss"
const Garant = () => {
  return (
    <>
    <div className="container">
      <div className="garant__wrapper">
        <div className='garant__title'>
        <p>Garand</p>
        </div>
        <div className='garant__text'>
          <b className='garand__exchange'>Exchange and return at the buyer's request</b>
          <p>All products in the NornLight store have a warranty. It is declared by the manufacturer and has a certain period of validity for various groups of products. If your product fails during the warranty period, you can contact us and get a free repair. To do this, you need</p>
          <ul>
            <li>Provide a receipt, invoice, or provide the email or phone number specified when placing the order</li>
            <li>Bring the goods to our warehouse or send them by a transport company</li>
            <li>Afterwards, the product is sent for examination and repair. If repair is not possible, we will exchange the product for a similar one or refund the money for the purchase.</li>
          </ul>
          <p>Please note that A-Svet is not a service center, but acts as an intermediary between the client and the supplier. Therefore, repair times may differ for products of different brands.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Garant