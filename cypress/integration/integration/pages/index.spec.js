context('Actions', () => {
  it('Should open index page', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
