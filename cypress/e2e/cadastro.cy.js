/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
const cadastroPage = require('../support/pages/cadastro.page')

describe('Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve realizar o cadastro de novo usuário', () => {
    
    let nome = faker.person.firstName()
    let sobrenome = faker.person.lastName()
    let telefone = faker.phone.number('## ####-####')
    let email = faker.internet.email(nome)    

    cadastroPage.cadastroUsuario(nome, sobrenome, telefone, email, 'senha123', 'senha123')
    cy.get('[href="/Tab/Account"]').click()
    cy.get('[data-testid="CustomerName"]').should('contain', `${nome}`)
  })
})