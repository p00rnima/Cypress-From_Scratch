// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('click_by_text', (text) => {
    cy
        .contains(text).click({ force: true });

});

Cypress.Commands.add('validate_element_by_text',(text)=>{
    cy.contains(text).should('be.visible')
});


Cypress.Commands.add('select_sku', (element) => {
    cy
        .get(element).click({ force: true });

});


Cypress.Commands.add('select_value', (element) => {
    cy
        .get(element).click({ force: true })
});



Cypress.Commands.add('dropdown_select_option', (element, option) => {
    cy
        .get(element).first.contains(option).click({ force: true })
});

Cypress.Commands.add('list_item_select_option', (element,option) => {
    cy.get('select').select(option).should('have.value', option)
    
    // cy.get('select').select(option, {force: true})
    //     .get(element).contains(option).parent().find('span').click({ force: true })
});

Cypress.Commands.add('check_box', (element, option) => {
    cy
        .get(element).check()

});

Cypress.Commands.add('click_by_el_name', (element, name) => {
    
    cy.get(element).contains(name).click({ force: true })

});

Cypress.Commands.add('assert_contain_string', (element, string) => {
    cy
        .get(element).contains(string)

});

//command to wait for an element - before it gets time out 
Cypress.Commands.add('explicitly_wait_for_element',(element , time) => {
    cy.get(element.cssloca, { timeout: parseInt(time)}).should('be.visible');
    
})
