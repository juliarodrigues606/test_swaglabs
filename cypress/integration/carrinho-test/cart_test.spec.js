const productsElements = require('../../support/resources/pages/products/products_page').ELEMENTS_PRODUCTS;

describe('Suíte de teste para realizar testes referentes ao comportamento do carrinho', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.realizarLogin()
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
  
    it('Deve somar contador pertencente ao carrinho ao clicar para adicionar item ao carrinho', () => {
      cy.get(productsElements.btnAddBackpack).click()
      cy.get('.shopping_cart_badge').should('have.text','1')
      cy.get(productsElements.btnAddBikeLight).click()
      cy.get('.shopping_cart_badge').should('have.text','2')
    })

    it('Deve subtrair contador pertencente ao carrinho ao clicar para remover item', ()=>{
      cy.get(productsElements.btnAddBackpack).click()
      cy.get(productsElements.btnAddBikeLight).click()
      cy.get(productsElements.btnAddJacket).click()
      cy.get('.shopping_cart_badge').should('have.text','3')
      cy.get(productsElements.btnRemoveBackpack).click()
      cy.get('.shopping_cart_badge').should('have.text','2')
      cy.get(productsElements.btnRemoveBikeLight).click()
      cy.get('.shopping_cart_badge').should('have.text','1')
    })

    afterEach(() => {
      cy.realizarLogout()
    })


  })