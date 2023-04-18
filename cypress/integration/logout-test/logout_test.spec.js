const menuElements = require('../../support/resources/pages/menu/menu_page').ELEMENTS_MENU;

describe('Suíte de teste para realizar logout', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('Deve realizar logout após fazer login', () => {
      cy.realizarLogin()
      cy.get(menuElements.btnHamburguer).click()
      cy.get(menuElements.linkLogout).click()
      cy.url().should('eq', 'https://www.saucedemo.com/')
    })
  })