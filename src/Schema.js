import * as yup from "yup"

export default yup.object().shape({
  name: yup.string()
  .required("Name is required")
  .min(2, "name must be at least 2 characters"),
  size: yup.string()
  .oneOf(["8", "12", "16"], "Size is required"),
  email: yup.string()
  .email("Must be a valid email")
  .required("Email is required"),
  address: yup.string()
  .required("Address is required"),
  //checkbox - must be boolean
  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  sausage: yup.boolean(),
  peppers: yup.boolean(),

  //special
  special: yup.string(),
  
})