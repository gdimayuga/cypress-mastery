
// npx cypress run --record --key b57c8813-d09d-4baa-8d1f-e2ddeb129388
describe('login test suite', () => {
  it('should login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_saucse')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('be.visible')
  })

})