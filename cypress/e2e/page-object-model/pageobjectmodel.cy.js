describe('fjdjfdjf', () => {

    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
      });

      it('Page object model trial', () => {
        cy.fillRegistrationForm()
      })

});