const loginElements = require('../../support/resources/pages/login/login_page').ELEMENTS_LOGIN;
import user from '../../fixtures/user.json'

describe('Suíte de teste para realizar login', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('Deve realizar login com sucesso ao enviar dados válidos', () => {
      cy.get(loginElements.inputUsername).should('have.attr','placeholder','Username')
      cy.get(loginElements.inputUsername).type(user.username)
      cy.get(loginElements.inputPassword).should('have.attr','placeholder','Password')
      cy.get(loginElements.inputPassword).type(user.password)
      cy.get(loginElements.btnLogin).should('have.value','Login')
      cy.get(loginElements.btnLogin).click()
      cy.url().should('include', '/inventory')
    })
  })