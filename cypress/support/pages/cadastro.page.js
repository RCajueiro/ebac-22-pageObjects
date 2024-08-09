class cadastroPage {
    visitarUrl() {
       cy.visit('/') 
    }

    cadastroUsuario(nome, sobrenome, telefone, email, senha) {
        cy.get('[href="/Tab/Account"]').click()
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
        cy.get('[data-testid="firstName"]').type(nome)
        cy.get('[data-testid="lastName"]').type(sobrenome)
        cy.get('[data-testid="phone"]').type(telefone)
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email)
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha)
        cy.get('[data-testid="repassword"]').type(senha)
        cy.get('[data-testid="create"]').click()
    }

}

export default new cadastroPage()