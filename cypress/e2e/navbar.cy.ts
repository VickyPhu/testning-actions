describe("Navbar", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Should display navbar with links", () => {
		cy.get('[data-cy="navbar"]').should("exist");
		cy.get('placeholder[data-cy="book tickets"]').should("exist");
	});
});
