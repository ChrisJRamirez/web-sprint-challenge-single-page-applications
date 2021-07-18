import React from "react";
import './App.css';
import Axios from "axios"
// setting up codegrade

const initialFormValues = {
  //text inputs
  name: "",
  size: "",
  //booleans & checkboxes
  topping1: false,
  topping2: false,

  special: "",
 
}

const initialFormErrors = {
  name: "",
  size: "",
  
}

const initialOrders = []
const initialDisabled = true

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)




  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Welcome to Lambda Eats! Please place your order and let us know if
         you have any special instructions!</p>
    </>
  );
};
export default App;
