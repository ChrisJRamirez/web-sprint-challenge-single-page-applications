import React from "react"

export default function Order({details}) {
  if (!details) {
    return <h3>Fetching your order details</h3>
  }


  //needs pizza route
  return (
    <div className = "order-container">
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
      
    </div>
  )

}

//name: "",
// size: "",
// address: "",
// email: "",
// //booleans & checkboxes
// topping1: false,
// topping2: false,

// special: "",