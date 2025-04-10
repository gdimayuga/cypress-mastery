describe('E-Commerce Test Flow/Workflow', () => {
 beforeEach(() => {
   cy.auth()
 });

 it('Should successfully login', () => {
   cy.url().should('include', '/inventory.html')
   cy.get('.inventory_list').should('be.visible')
   cy.takeScreenshot('login')
 });

 it('Should successfully add to cart', () => {
  cy.addToCartAndVerify('[data-test="add-to-cart-sauce-labs-backpack"]', 'Sauce Labs Backpack')
  cy.takeScreenshot('add-to-cart')

})

it('should successfully checkout the items', () => {
  cy.addToCartAndCheckout(
    '[data-test="add-to-cart-sauce-labs-backpack"]', 
    'Sauce Labs Backpack', 
    'Arthur', 
    'Morgan', 
    '4217'
  );
  cy.takeScreenshot('checkout')
});

});