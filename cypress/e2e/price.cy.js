describe("Pricing page", () => {
  it("checks monthly individuals plan", () => {
    cy.visit("https://verisart.com/pricing");
    cy.get('[data-test="bToggleSwitch"]').within(() => {
      cy.get("span").eq(0).contains("Pay monthly").click();
    });
    cy.get("span").contains("Individuals").click();
    cy.get("h3")
      .contains("Starter")
      .parent()
      .within(() => {
        cy.get("div").contains("$9.99");
      });
    cy.get("h3")
      .contains("Premium")
      .parent()
      .within(() => {
        cy.get("div").contains("$19.99");
      });
    cy.get("h3")
      .contains("Pro")
      .parent()
      .within(() => {
        cy.get("div").contains("$49.99");
      });
  });

  it("checks monthly Businessess plan", () => {
    cy.visit("https://verisart.com/pricing");
    cy.get('[data-test="bToggleSwitch"]').within(() => {
      cy.get("span").eq(0).contains("Pay monthly").click();
    });
    cy.get("span").contains("Businesses").click();
    cy.get("h3")
      .contains("Starter")
      .parent()
      .within(() => {
        cy.get("div").contains("$29.99");
      });
    cy.get("h3")
      .contains("Premium")
      .parent()
      .within(() => {
        cy.get("div").contains("$59.99");
      });
    cy.get("h3")
      .contains("Pro")
      .parent()
      .within(() => {
        cy.get("div").contains("$199.99");
      });
  });

  it("checks yearly Individuals plan", () => {
    cy.visit("https://verisart.com/pricing");
    cy.get('[data-test="bToggleSwitch"]').within(() => {
      cy.get("span").eq(1).contains("Pay yearly").click();
    });
    cy.get("span").contains("Individuals").click();
    cy.get("h3")
      .contains("Starter")
      .parent()
      .within(() => {
        cy.get("div").contains("$7.99");
      });
    cy.get("h3")
      .contains("Premium")
      .parent()
      .within(() => {
        cy.get("div").contains("$15.99");
      });
    cy.get("h3")
      .contains("Pro")
      .parent()
      .within(() => {
        cy.get("div").contains("$39.99");
      });
  });

  it("checks yearly Businesses plan", () => {
    cy.visit("https://verisart.com/pricing");
    cy.get('[data-test="bToggleSwitch"]').within(() => {
      cy.get("span").eq(1).contains("Pay yearly").click();
    });
    cy.get("span").contains("Businesses").click();
    cy.get("h3")
      .contains("Starter")
      .parent()
      .within(() => {
        cy.get("div").contains("$23.99");
      });
    cy.get("h3")
      .contains("Premium")
      .parent()
      .within(() => {
        cy.get("div").contains("$47.99");
      });
    cy.get("h3")
      .contains("Pro")
      .parent()
      .within(() => {
        cy.get("div").contains("$159.99");
      });
  });
});
