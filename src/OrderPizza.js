import React from "react"

export default function Order({details}) {
  if (!details) {
    return <h3>Fetching your order details</h3>
  }


  //needs pizza route
  return (
    <div className = "order-container">
      <h3>{details.name ? details.name : details.first_name} </h3>
      <p>Size</p>
      
      <p>Email: {details.email}</p>
      
      
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