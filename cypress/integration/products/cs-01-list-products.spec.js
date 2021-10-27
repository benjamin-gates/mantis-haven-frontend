/// <reference types="cypress" />

context("Customer - List Products", () => {
  beforeEach(() => {
    cy.visit("/shop");
  });

  it("has title of Products", () => {
    cy.get("h1").should("contain", "Products");
  });

  it("has a button on the page", () => {
      cy.get(".product-button")
  })
  it("redirects to blank page when buy button is clicked", () => {
      cy.get(".product-button").first().click();
      cy.url().should("include", "/shop")
  })
});
