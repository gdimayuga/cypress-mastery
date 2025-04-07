describe('login test suite', () => {
  it('login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('contain', 'Swag Labs')
    cy.get('.app_logo').should('be.visible')
    cy.url().should('include', 'inventory.html')
  })

  it('invalid login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_saucse')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('be.visible')
  })

})