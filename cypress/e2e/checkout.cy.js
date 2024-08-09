/// <reference types="cypress"/>
const checkout = require("../fixtures/checkout.json");
import { faker } from "@faker-js/faker";
import cadastroPage from "../support/pages/cadastro.page";

describe("Checkout", () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const telefone = faker.phone.number("###########");
  const email = faker.internet.email(nome);
  const senha = faker.internet.password();
  const { endereço, cidade, estado, cep } = checkout;

  before(() => {
    cy.setCookie("ebacStoreVersion", "v2", {domain: "lojaebac.ebaconline.art.br",});
  });

  beforeEach(() => {
    cy.visit('/')
    cadastroPage.cadastroUsuario(nome, sobrenome, telefone, email, senha)
  });

  it("Deve completar o processo de checkout", () => {
    cy.checkout(nome, telefone, endereço, cidade, estado, cep);
    cy.get(
      ':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1'
    ).should("have.text", "Order Success");
  });
});
