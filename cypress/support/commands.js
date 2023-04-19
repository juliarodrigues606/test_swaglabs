import user from '../fixtures/user.json'
const loginElements = require('./resources/pages/login/login_page').ELEMENTS_LOGIN;
const menuElements = require('./resources/pages/menu/menu_page').ELEMENTS_MENU;
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
Cypress.Commands.add('realizarLogin', () => { 
    cy.get(loginElements.inputUsername).type(user.username)
    cy.get(loginElements.inputPassword).type(user.password)
    cy.get(loginElements.btnLogin).click()
 })

 Cypress.Commands.add('realizarLogout', () => { 
    cy.get(menuElements.btnHamburguer).click()
    cy.get(menuElements.linkLogout).click()
 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
