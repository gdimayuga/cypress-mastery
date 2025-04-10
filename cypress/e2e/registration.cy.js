describe('Registration', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.contains('a', 'Admin Page').click();
    cy.get('button[value="CLEAN"]')
  });
  
  it('should create an account and login with the account', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.fillRegistrationForm()
  })
})