describe('E-Commerce Test Flow/Workflow', () => {
  beforeEach(() => {
    cy.auth('standard_user', 'secret_sauce')
  });
 
  it('Should successfully login', () => {
    cy.takeScreenshot('login')
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  });
 
  it('Should successfully add to cart', () => {
  cy.takeScreenshot('add-to-cart')
   cy.addToCartAndVerify('[data-test="add-to-cart-sauce-labs-backpack"]', 'Sauce Labs Backpack') 
 })
 
 it('should successfully checkout the items', () => {
  cy.takeScreenshot('checkout')
   cy.addToCartAndCheckout(
     '[data-test="add-to-cart-sauce-labs-backpack"]', 
     'Sauce Labs Backpack', 
     'Arthur', 
     'Morgan', 
     '4217'
   );
 });
 
 });