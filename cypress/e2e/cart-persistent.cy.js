describe('Cart Persistence Test', () => {
  beforeEach(() => {
    cy.visit('http://automationexercise.com')
    // cy.clearAllCookies()
    // cy.clearLocalStorage()
  });
 
  it.skip('Place Order: Register while Checkout', () => {
    cy.get('.productinfo a[data-product-id="1"]:visible').click()
    cy.contains('View Cart').click()
    cy.contains('Proceed To Checkout').click()
    cy.contains('a', 'Register / Login').click()
    cy.authSauceDemo()
    cy.RegisterwhileCheckout()
  });

  it.skip('Place Order: Register before Checkout', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.authSauceDemo()
    cy.RegisterBeforeCheckout()
  });

  it('Place Order: Login before Checkout', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.LoginBeforeCheckout()
    
  });
});
