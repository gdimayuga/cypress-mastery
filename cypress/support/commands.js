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
// Cypress.Commands.add('login', (email, password) => { ... })
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
import { generateCustomerData } from './utils'

Cypress.Commands.add('auth', () => { // FUNCTION OR METHOD --> Then i-call natin sya sa spec or test file natin.
  cy.fixture('credentials').then((credentials) => {
    cy.visit('https://www.saucedemo.com/')
    const credentialz = credentials[0]
      cy.get('[data-test="username"]').type(credentialz.username)
      cy.get('[data-test="password"]').type(credentialz.password)
      cy.get('[data-test="login-button"]').click()
  });
});

Cypress.Commands.add('addToCartAndVerify', (productSelector, productName) => {
    cy.get(productSelector).should('be.visible')
      .click()
  
    cy.get('.shopping_cart_badge').should('contain', '1')
  
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 1)
    cy.get('.inventory_item_name').should('contain', productName)
  })

  Cypress.Commands.add('takeScreenshot', (name) => {
    const timestamp = new Date().toISOString().replace(/[:]/g, '-');
    cy.screenshot(`${name}-${timestamp}`);
  });

  Cypress.Commands.add('fillRegistrationForm', (customerData = generateCustomerData()) => {
    cy.get('input[id="customer.firstName"]').type(customerData.firstName);
    cy.get('input[id="customer.lastName"]').type(customerData.lastName);
    cy.get('input[id="customer.address.street"]').type(customerData.address);
    cy.get('input[id="customer.address.city"]').type(customerData.city);
    cy.get('input[id="customer.address.state"]').type(customerData.state);
    cy.get('input[id="customer.address.zipCode"]').type(customerData.zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(customerData.phoneNumber);
    cy.get('input[id="customer.ssn"]').type(customerData.ssn);
    cy.get('input[id="customer.username"]').type(customerData.username);
    cy.get('input[id="customer.password"]').type(customerData.password);
    cy.get('input[id="repeatedPassword"]').type(customerData.password);
    
    cy.get('input[value="Register"]').click();
    cy.contains('Log Out').should('be.visible').click();
    cy.get('input[name="username"]').type(customerData.username);
    cy.get('input[name="password"]').type(customerData.password);
    cy.get('input[value="Log In"]').click();

  });

  Cypress.Commands.add('addToCartAndCheckout', (productSelector, productName, firstName, lastName, postalCode) => {
    cy.addToCartAndVerify(productSelector, productName);
    cy.get('[data-test="checkout"]').click();
  
    cy.url().should('include', 'checkout-step-one.html');
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
      cy.get('[data-test="continue"]').should('be.visible').click();
  
    cy.get('[data-test="item-quantity"]').should('have.length', 1);

    cy.url().should('include', 'checkout-step-two.html');
    cy.get('[data-test="finish"]').should('be.visible').click();
  
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');


    cy.get('[data-test="back-to-products"]').should('be.visible').click();
    cy.url().should('include', 'inventory.html');
  });

