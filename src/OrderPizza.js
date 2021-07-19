import React from "react"
import { Route, Link} from "react-router-dom";

export default function Order({details}) {
  if (!details) {
    return <h3>Fetching your order details</h3>
  }


  //needs pizza route
  return (
    <div className = "order-container">
      
      <Route path="/pizza">Order Pizza!
        <h2> Build your own pizza!
        </h2>
        <h3>{details.name ? details.name : details.first_name} </h3>
      
        <p>Address: {details.address}</p>
        <p>Email: {details.email}</p>
        <p>Size: {details.size}</p>
        
        {
          !!details.toppings && !!details.toppings.length &&
          <div>
            Toppings:
            <ul>
              {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
            </ul>
          </div>
        }

        <p>Special Instructions: {details.special}</p>
      </Route>
    </div>
  )

}