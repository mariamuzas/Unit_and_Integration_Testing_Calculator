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
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  });

  it('should update to display of the running total', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '3456')
  });
  
  it('should update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '7')
  });

  it('should update the display with the result of the operation', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  });

  it('should perform multiple operations chained', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_subtract').click();
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  });

  it('should work with positive numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '18')
  });

  it('should work with negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_subtract').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3')
  });

  it('should work with decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
     cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')
  });

  it('should work with very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
     cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '98755555456800000')
  });

  it('should give an error when devided by 0', () => {
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'ERROR')
  });
})
