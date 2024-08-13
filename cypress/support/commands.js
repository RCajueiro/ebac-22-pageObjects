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
//
//
// -- This is a child command --
Cypress.Commands.add('checkout', (nome, telefone, endereço, cidade, estado, cep) => { 
    cy.get('[data-testid="search-icon"]').click()
    cy.get('[data-testid="searchInput"]').click().type('Ingrid Running Jacket')
    cy.get('#root').find('.css-146c3p1.r-cqee49').contains('Ingrid').click({force: true})
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="addItem"] > .css-146c3p1').click()
    cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click()
    cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(nome)
    cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(telefone)
    cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(endereço)
    cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(cidade)
    cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(estado)
    cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(cep)
    cy.get('[data-testid="save"]').click()
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
 })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })