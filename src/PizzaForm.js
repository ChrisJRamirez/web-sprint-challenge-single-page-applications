import React from "react"

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    
    const { name, value, type, checked } = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse)
  }

  return (

    <form className='pizza-form' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add your order</h2>

  
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.size}</div>
            <div>{errors.address}</div>
           

      <div className='form-group inputs'>
        <h4>Personal information</h4>
         {/* ////////// TEXT INPUTS ////////// */}
        <label id="name-input">Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Address
          <input
            value={values.address}
            onChange={onChange}
            name='address'
            type='text'
          />
        </label>

        <label>Special Instructions
          <input
            id="special-text"
            value={values.special}
            onChange={onChange}
            name='special'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
       <label>Size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select a size -</option>
            <option value='8'>8 Inches</option>
            <option value='12'>12 Inches</option>
            <option value='16'>16 Inches</option>
          </select>
        </label>


{/* ////////// CHECKBOXES ////////// */}
        <div className='form-group checkboxes'>
         <h4>Toppings</h4>

         <label>Pepperoni
           <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Pineapple
        <input
            type="checkbox"
            name="pineapple"
            checked={values.pineapple}
            onChange={onChange}
          />

        </label>

        <label>Sausage
        <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>Peppers
        <input
            type="checkbox"
            name="peppers"
            checked={values.peppers}
            onChange={onChange}
          />
        </label>

      </div>

    </form>
  )
}
