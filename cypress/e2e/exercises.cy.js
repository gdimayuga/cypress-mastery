describe('Exercises 14-16', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('http://automationexercise.com')
  });
 
  it('Place Order: Register while Checkout', () => {
    cy.get('.productinfo a[data-product-id="1"]:visible').click()
    cy.contains('View Cart').click()
    cy.contains('Proceed To Checkout').click()
    cy.contains('a', 'Register / Login').click()
    cy.authSauceDemo()
    cy.RegisterwhileCheckout()
    cy.screenshot('exercise14-4-16-2025')
  });

  it('Place Order: Register before Checkout', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.authSauceDemo()
    cy.RegisterBeforeCheckout()
    cy.screenshot('exercise15-4-16-2025')
  });

  it('Place Order: Login before Checkout', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.LoginBeforeCheckout()
    cy.screenshot('exercise16-4-16-2025')
  });
});
