// https://on.cypress.io/api

describe('Sanity Test', () => {
  it('visits the app root url', () => {
    cy.visit("/");
    cy.contains("#header a:first-child", "VUE MUSIC PLAYER");
    cy.wait(1000)
  });
});
