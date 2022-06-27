describe('Home', () => {
  it('should render examples table', () => {
    cy.visit('/');
    cy.contains('Example 1').should('be.visible');
    cy.contains('Example 2').should('be.visible');
  });
});
