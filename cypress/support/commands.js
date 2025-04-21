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
import { RegistrationPage } from './pages/registration.page'

Cypress.Commands.add('fillRegistrationForm', (customerData = generateCustomerData()) => {
  RegistrationPage.fillSignUpForm(customerData);
  RegistrationPage.submitSignUpForm();
  RegistrationPage.verifySignUpSuccess(customerData.username);
});

Cypress.Commands.add('authSauceDemo', (customerData = generateCustomerData()) => {
  cy.get('[name="name"]').type('Sova')
  cy.get('[data-qa="signup-email"]').type(customerData.username + '@gmail.com')
  cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('LoginBeforeCheckout', (customerData = generateCustomerData()) => {
  cy.url().should('contain','login')
  cy.get('[name="name"]').type('Sova')
  cy.get('[data-qa="signup-email"]').type(customerData.username + '@gmail.com')
  cy.get('[data-qa="signup-button"]').click()
  cy.get('#id_gender1').click()
  cy.get('[data-qa="password"]').type(customerData.password)
  cy.get('[data-qa="days"]').select('10')
  cy.get('[data-qa="months"]').select('October')
  cy.get('[data-qa="years"]').select('2000')
  cy.get('[data-qa="first_name"]').type('Sova')
  cy.get('[data-qa="last_name"]').type(customerData.lastName)
  cy.get('[data-qa="company"]').type(customerData.company)
  cy.get('[id="address1"]').type(customerData.address)
  cy.get('[id="address2"]').type(customerData.address2)
  cy.get('[data-qa="country"]').select('India')
  cy.get('[data-qa="state"]').type(customerData.state)
  cy.get('[data-qa="city"]').type(customerData.city)
  cy.get('[data-qa="zipcode"]').type(customerData.zipCode)
  cy.get('[data-qa="mobile_number"]').type(customerData.phoneNumber)
  cy.contains('Create Account').click()
  cy.url().should('contain','account_created')
  cy.get('[data-qa="continue-button"]').click()
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.get('[data-qa="login-email"]').type(customerData.username + '@gmail.com')
  cy.get('[data-qa="login-password"]').type(customerData.password)
  cy.get('[data-qa="login-button"]').click()
  cy.contains('Logged in as ' + 'Sova')
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').click()
  cy.url().should('contain', 'view_cart')
  cy.get('.col-sm-6 > .btn').click()
  cy.verifyDetails(customerData.address)
  cy.get('.form-control').type('N/A')
  cy.contains('Place Order').click()
  cy.url().should('contain','payment')
  cy.get('[data-qa="name-on-card"]').type('Sova ' + customerData.lastName)
  cy.get('[data-qa="card-number"]').type('1234 4567 7890 1235')
  cy.get('[data-qa="cvc"]').type('123')
  cy.get('[data-qa="expiry-month"]').type('10')
  cy.get('[data-qa="expiry-year"]').type('2030')
  cy.get('[data-qa="pay-button"]').click()
  cy.contains('Congratulations! Your order has been confirmed!')
  cy.get('.nav > :nth-child(5)').click()
  cy.url().should('contain','delete_account')
  cy.contains('Your account has been permanently deleted!')

})

Cypress.Commands.add('RegisterBeforeCheckout', (customerData = generateCustomerData()) => {
  cy.url().should('contain','signup')
  cy.get('#id_gender1').click()
  cy.get('[data-qa="password"]').type(customerData.password)
  cy.get('[data-qa="days"]').select('10')
  cy.get('[data-qa="months"]').select('October')
  cy.get('[data-qa="years"]').select('2000')
  cy.get('[data-qa="first_name"]').type('Sova')
  cy.get('[data-qa="last_name"]').type(customerData.lastName)
  cy.get('[data-qa="company"]').type(customerData.company)
  cy.get('[id="address1"]').type(customerData.address)
  cy.get('[id="address2"]').type(customerData.address2)
  cy.get('[data-qa="country"]').select('India')
  cy.get('[data-qa="state"]').type(customerData.state)
  cy.get('[data-qa="city"]').type(customerData.city)
  cy.get('[data-qa="zipcode"]').type(customerData.zipCode)
  cy.get('[data-qa="mobile_number"]').type(customerData.phoneNumber)
  cy.contains('Create Account').click()
  cy.contains('Account Created!')
  cy.url().should('contain','account_created')
  cy.contains('Continue').click()
  cy.contains('Logged in as ' + 'Sova')
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').click()
  cy.url().should('contain', 'view_cart')
  cy.get('.col-sm-6 > .btn').click()
  cy.verifyDetails(customerData.address)
  cy.get('.form-control').type('N/A')
  cy.contains('Place Order').click()
  cy.url().should('contain','payment')
  cy.get('[data-qa="name-on-card"]').type('Sova ' + customerData.lastName)
  cy.get('[data-qa="card-number"]').type('1234 4567 7890 1235')
  cy.get('[data-qa="cvc"]').type('123')
  cy.get('[data-qa="expiry-month"]').type('10')
  cy.get('[data-qa="expiry-year"]').type('2030')
  cy.get('[data-qa="pay-button"]').click()
  cy.contains('Congratulations! Your order has been confirmed!')
  cy.get('.nav > :nth-child(5)').click()
  cy.url().should('contain','delete_account')
  cy.contains('Your account has been permanently deleted!')

})

Cypress.Commands.add('RegisterwhileCheckout', (customerData = generateCustomerData()) => {
  cy.url().should('contain','signup')
  cy.get('#id_gender1').click()
  cy.get('[data-qa="password"]').type(customerData.password)
  cy.get('[data-qa="days"]').select('10')
  cy.get('[data-qa="months"]').select('October')
  cy.get('[data-qa="years"]').select('2000')
  cy.get('[data-qa="first_name"]').type('Sova')
  cy.get('[data-qa="last_name"]').type(customerData.lastName)
  cy.get('[data-qa="company"]').type(customerData.company)
  cy.get('[id="address1"]').type(customerData.address)
  cy.get('[id="address2"]').type(customerData.address2)
  cy.get('[data-qa="country"]').select('India')
  cy.get('[data-qa="state"]').type(customerData.state)
  cy.get('[data-qa="city"]').type(customerData.city)
  cy.get('[data-qa="zipcode"]').type(customerData.zipCode)
  cy.get('[data-qa="mobile_number"]').type(customerData.phoneNumber)
  cy.contains('Create Account').click()
  cy.contains('Account Created!')
  cy.url().should('contain','account_created')
  cy.contains('Continue').click()
  cy.contains('Logged in as ' + 'Sova')
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  cy.get('.col-sm-6 > .btn').click()
  cy.verifyDetails(customerData.address)
  cy.get('.form-control').type('N/A')
  cy.contains('Place Order').click()
  cy.url().should('contain','payment')
  cy.get('[data-qa="name-on-card"]').type('Sova ' + customerData.lastName)
  cy.get('[data-qa="card-number"]').type('1234 4567 7890 1235')
  cy.get('[data-qa="cvc"]').type('123')
  cy.get('[data-qa="expiry-month"]').type('10')
  cy.get('[data-qa="expiry-year"]').type('2030')
  cy.get('[data-qa="pay-button"]').click()
  cy.contains('Congratulations! Your order has been confirmed!')
  cy.get('.nav > :nth-child(5)').click()
  cy.url().should('contain','delete_account')
  cy.contains('Your account has been permanently deleted!')
})

Cypress.Commands.add('verifyDetails', (State) => {
  cy.get('#address_delivery > :nth-child(4)').contains(State)
  cy.get('#address_invoice > :nth-child(4)').contains(State)
})

Cypress.Commands.add('auth', () => { // FUNCTION OR METHOD --> Then i-call natin sya sa spec or test file natin.
  cy.fixture('credentials').then((credentials) => {
    const credential = credentials[0]
    cy.get('input[id="customer.firstName"]').type(credential.firstName);
    cy.get('input[id="customer.lastName"]').type(credential.lastName);
    cy.get('input[id="customer.address.street"]').type(credential.address);
    cy.get('input[id="customer.address.city"]').type(credential.city);
    cy.get('input[id="customer.address.state"]').type(credential.state);
    cy.get('input[id="customer.address.zipCode"]').type(credential.zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(credential.phoneNumber);
    cy.get('input[id="customer.ssn"]').type(credential.ssn);
    cy.get('input[id="customer.username"]').type(credential.username);
    cy.get('input[id="customer.password"]').type(credential.password);
    cy.get('input[id="repeatedPassword"]').type(credential.password);
    
    cy.get('input[value="Register"]').click();
    cy.contains('Log Out').should('be.visible').click();
    cy.get('input[name="username"]').type(credential.username);
    cy.get('input[name="password"]').type(credential.password);
    cy.get('input[value="Log In"]').click();
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

  Cypress.Commands.add('saveCart', () => {
    cy.window().then((win) => {
      const cart = win.localStorage.getItem('cart-contents') || '[]';
      Cypress.env('savedCart', cart);
    });
  });

  Cypress.Commands.add('restoreCart', () => {
    const cart = Cypress.env('savedCart') || '[]';
    cy.window().then((win) => {
      win.localStorage.setItem('cart-contents', cart);
    });
  });

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

