/// <reference types="cypress"/>

import cadastroPage, { visitaUrl, cadastroUsuario } from '../support/pages/cadastro.page'
import { faker } from '@faker-js/faker'

describe('Login', () => {

    before(() => {
        cy.setCookie("ebacStoreVersion", "v2", {domain: "lojaebac.ebaconline.art.br",})
    })

    beforeEach(() => {
        let nome = faker.person.firstName()
        let sobrenome = faker.person.lastName()
        let numero = faker.phone.number('###########')
        let email = faker.internet.email(nome)
        let senha = faker.internet.password()
        cadastroPage.visitarUrl()
        cadastroPage.cadastroUsuario(nome, sobrenome, numero, email, senha)
    })
    it('Login', () => {
        cy.intercept('GET', '**/public/getProductDetails/66d60a1ea60ca1ef7fa04095', {fixture: 'checkout.json'}).as('intercept')
        cy.get('[data-testid="search-icon"]').click()
        cy.get('[data-testid="searchInput"]').click().type('Ingrid Running Jacket')
        cy.get('[data-testid="productDetails"]').contains('Ingrid').click({force: true})
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="productName"]').first().should('have.text', 'Ingrid Running Jacket')
        })
    })