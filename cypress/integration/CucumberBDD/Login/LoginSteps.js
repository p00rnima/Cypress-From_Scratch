import { Given,When,Then,After,And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../support/PageObjects/Login";
const login = new Login

Given('the user navigates to lichess home page', ()=>
{
    cy.visit(Cypress.env('baseURL'))
    cy.wait(1000)
})

When('the user clicks login', ()=>
{
 login.navigateToLogin()
})

And('lands on login page',()=>
{
    login.validateLoginPage()

})
And ('on logging in as a user',()=>
{
login.loginAsuser()
})

Then ('user can validate logged in state',()=>
{
// login.validateLogin()
})