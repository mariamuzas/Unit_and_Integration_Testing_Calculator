// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should have working number buttons', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '3456')
  });

  it('should update to display of the running total', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '7')
  });
  
  // it('should update the display with the result of the operation', () => {
  // });

  // it('should perform multiple operations chained', () => {
  // });

  // it('should work with positive numbers', () => {
  // });
})
