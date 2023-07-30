// ***********************************************
// This is a page object class in relation to
// Login page for self serve
// ***********************************************
//<reference types="Cypress" />;


import elements from '../../fixtures/login_page_locators.json'

export default class Login {

    navigateToLogin()
    {
        cy.get(elements.signin_button).click()
    }

    validateLoginPage(){
        cy.get(elements.login_modal).should("be.visible")
    }

    loginAsuser()
    {
        cy.get(elements.username_xpath).type(Cypress.env('userName'))
        cy.get(elements.password_xpath).type(Cypress.env('password'))
        cy.get(elements.app_login_button_xpath).click()
        cy.wait(1000)
    }
    validateLogin()
    {
        cy.get(elements.homePage_user_tag).invoke('text').should('contain',Cypress.env('userName'))
        cy.wait(10000)

    }
   
}