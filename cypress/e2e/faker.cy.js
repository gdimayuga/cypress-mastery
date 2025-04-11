describe('Registration', () => {
  before(() => {
    cy.clearAllCookies()
    cy.clearLocalStorage()
  });
  
  it('should create an account and login with the account', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.fillRegistrationForm()
  })
})