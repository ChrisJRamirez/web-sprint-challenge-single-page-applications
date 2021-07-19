import { getDefaultNormalizer } from "@testing-library/dom"

describe("Tests App", () => {
  
beforeEach(() => {
  cy.visit("http://localhost:3000/")
})


const textInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const sizeInput = () => cy.get('select').select('8')
const addressInput = () => cy.get('input[name="address"]')
const toppingsCheck = () => cy.get('[type="checkbox"]').check()
const submitBtn = () => cy.get('button[id=order-button]')

describe("can add text to the box and submit is enabled", () => {
  it("can type in the inputs", ()=> {
    textInput()
    .should("have.value", "")
    .type("Chris")
    .should("have.value", "Chris")
  })

  it("can submit the form", () => {
    textInput().type("Chris")
    emailInput().type("cjramirez53@gmail.com")
    addressInput().type("address")
    sizeInput().type("12")
    toppingsCheck().check()
    submitBtn().should("be.enabled")
  })

  it("can check multiple toppings", () => {
    toppingsCheck()
  })

})

})