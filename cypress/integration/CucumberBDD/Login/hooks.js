
before(() => {
    cy.log('I Run for each feature before all the scenarios');
});

beforeEach(() => {
    cy.log('I Run for each feature before Every Scenario');
});


afterEach(() => {
    cy.log('I Run for each feature after Every Scenario');
});

after(() => {
    cy.log('I Run for each feature after all the scenarios');
});
