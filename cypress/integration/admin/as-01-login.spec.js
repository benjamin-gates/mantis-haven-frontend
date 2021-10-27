/// <reference types="cypress" />
context("Admin Login", () => {
    it("returns user to previous url when clicking cancel", () => {
        cy.visit("/");
        cy.visit("/login");
        cy.get(".cancel").click();
        cy.url().should("not.include", "/admin/dashboard");
    })
    beforeEach(() => {
        cy.visit("/login");
    });

    it("redirects user to dashboard after clicking login", () => {
        cy.get(".login").click();
        cy.url().should("include", "/admin/dashboard");
    });
})