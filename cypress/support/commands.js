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

Cypress.Commands.add('auth', (username, password) => { // FUNCTION OR METHOD --> Then i-call natin sya sa spec or test file natin.
    cy.visit('https://www.saucedemo.com/', {timeout: 240000})
      cy.get('[data-test="username"]').type(username)
      cy.get('[data-test="password"]').type(password)
      cy.get('[data-test="login-button"]').click()
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

