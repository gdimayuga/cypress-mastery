describe('Exercises 14-16', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('http://automationexercise.com')
  });
 
  it('Place Order: Register while Checkout', () => {
    cy.get('.active > :nth-child(1) > h2').should('contain', 'Full-Fledged practice website for Automation Engineers')
    cy.get('.productinfo a[data-product-id="1"]:visible').click()
    cy.contains('View Cart').click()
    cy.contains('Proceed To Checkout').click()
    cy.url().should('contain','view_cart')
    cy.contains('a', 'Register / Login').click()
    cy.authSauceDemo()
    cy.RegisterwhileCheckout()
    cy.get('b').should('contain', 'Account Deleted!')
    cy.screenshot('exercise14-4-16-2025'  , { capture: 'fullPage' })
  });

  it('Place Order: Register before Checkout', () => {
    cy.get('.active > :nth-child(1) > h2').should('contain', 'Full-Fledged practice website for Automation Engineers')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.authSauceDemo()
    cy.RegisterBeforeCheckout()
    cy.get('b').should('contain', 'Account Deleted!')
    cy.screenshot('exercise15-4-16-2025'  , { capture: 'fullPage' })
  });

  it('Place Order: Login before Checkout', () => {
    cy.get('.active > :nth-child(1) > h2').should('contain', 'Full-Fledged practice website for Automation Engineers')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.LoginBeforeCheckout()
    cy.get('b').should('contain', 'Account Deleted!')
    cy.screenshot('exercise16-4-16-2025' , { capture: 'fullPage' })
  });
});
