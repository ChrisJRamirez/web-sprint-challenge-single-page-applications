import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios"
import * as yup from "yup"
import schema from "./Schema"
import {validate} from "uuid"
import PizzaForm from "./PizzaForm"
import OrderPizza from "./OrderPizza"
// setting up codegrade

const initialFormValues = {
  //text inputs
  name: "",
  address: "",
  email: "",

  //dropdown for size only
  size: "",

  //booleans for toppings & checkboxes
  pepperoni: false,
  pineapple: false,
  sausage: false,
  peppers: false,
  //needs id of special-text
  special: "",
 
}

const initialFormErrors = {
  name: "",
  size: "",
  address: "",
  email: "",
  //do i need anything for special or no cuz its not necessary/wont provide an error
  
}

const initialOrders = []
const initialDisabled = true

const App = () => {

  //States
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //helper functions
  // const getOrders = () =>{
  //   axios.get("https://reqres.in/api/users")
  //     .then(res => {
  //       setOrders(res.data.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/users", newOrder)
      .then(res => {
        setOrders([...orders, res.data])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
  }


  //event handler

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      address: formValues.address.trim(), 
      email: formValues.email.trim(),
      toppings: ["pepperoni", "pineapple", "sausage", "peppers"].filter(toppings => formValues[toppings]), 
      special: formValues.special.trim()
      
    }
    postNewOrder(newOrder)
  }

  ///side effects
  // useEffect(() => {
  //   getOrders()
  // }, [])


  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues, schema])
  



  return (
  <div className="App">
    <header>
      <h1>Lambda Eats</h1>
    </header>

    <section>
      <PizzaForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        orders.map(order => {
          return (
            <OrderPizza key={order.id} details = {order}/>
          )

        })
      }
     

    </section>
    
  </div>
    
  );
};
export default App;
