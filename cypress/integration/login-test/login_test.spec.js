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

    it('Não deve realizar login ao enviar password incorreta', () => {
      cy.get(loginElements.inputUsername).should('have.attr','placeholder','Username')
      cy.get(loginElements.inputUsername).type(user.username)
      cy.get(loginElements.inputPassword).should('have.attr','placeholder','Password')
      cy.get(loginElements.inputPassword).type('user.password')
      cy.get(loginElements.btnLogin).should('have.value','Login')
      cy.get(loginElements.btnLogin).click()
      cy.get(loginElements.msnError).should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it.only('Não deve realizar login ao enviar username incorreto', () => {
      cy.get(loginElements.inputUsername).should('have.attr','placeholder','Username')
      cy.get(loginElements.inputUsername).type('user.username')
      cy.get(loginElements.inputPassword).should('have.attr','placeholder','Password')
      cy.get(loginElements.inputPassword).type(user.password)
      cy.get(loginElements.btnLogin).should('have.value','Login')
      cy.get(loginElements.btnLogin).click()
      cy.get(loginElements.msnError).should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
  })