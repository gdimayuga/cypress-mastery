describe('Registration', () => {
  beforeEach(() => {
      cy.clearAllCookies()
      cy.clearLocalStorage()
      cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    });

    it('Registers an account', () => {
      cy.fillRegistrationForm()
    })

});