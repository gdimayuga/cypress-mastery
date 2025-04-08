describe('E-Commerce Test Flow/Workflow', () => {
  // It will run before each test case (it block)
 /*if matagal mag run ang test
  * 1.possible na slow internet 
    2.mabagal ang test environment
    3. down yung Server (API, DB etc.)*/
 beforeEach(() => {
   cy.auth('standard_user', 'secret_sauce')
 });

 it('Should successfully login', () => {
   cy.url().should('include', '/inventory.html')
   cy.get('.inventory_list').should('be.visible')
 });

 it('Should successfully add to cart', () => {
  cy.addToCartAndVerify('[data-test="add-to-cart-sauce-labs-backpack"]', 'Sauce Labs Backpack')
})

it('should successfully checkout the items', () => {
  cy.addToCartAndCheckout(
    '[data-test="add-to-cart-sauce-labs-backpack"]', 
    'Sauce Labs Backpack', 
    'Arthur', 
    'Morgan', 
    '4217'
  );
});

});