describe('Github User Search', () => {
  it('has input for username', () => {
    cy.visit('/');
    cy.get('input');
  });
  it('has "User not found" caption', () => {
    cy.visit('/');
    cy.contains('User not found');
  });
  it("finds Linus Torvalds' GitHub page", () => {
    cy.visit('/');
    cy.get('input').type('torvalds');
    cy.contains('Linus Torvalds');
    cy.get('img');
    cy.contains('span', 'Repos');
    cy.contains('span', 'Gists');
    cy.contains('span', 'Followers');
  });
  it("doesn't find nonexistent page", () => {
    cy.visit('/');
    cy.get('input').type('_some_random_name_6m92msz23_2');
    cy.contains('User not found');
  });
});
