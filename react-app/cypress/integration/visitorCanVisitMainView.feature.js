describe("A visitor visiting the application", () => {
  before(() => {
    cy
      .intercept("GET", "**/data/courses.json", {
        fixture: "coursesIndexResponse.json"
      })
      .as("coursesList");
    cy.visit("/");
  });

  it("is expected to receive a collection of x courses", () => {
    cy
      .wait("@coursesList")
      .its("response.body")
      .should("be.an", "array")
      .and("have.length", 7);
  });

  it("is expected to see main header", () => {
    cy
      .get("[data-cy=course-list-header]")
      .should("contain.text", "COURSE LIST");
  });

  describe("can see subheaders with course section names", () => {
    it("is expected to see Workshops subheader", () => {
      cy
        .get("[data-cy=workshops-subheader]")
        .should("contain.text", "Workshops");
    });

    it("is expected to see Testing subheader", () => {
      cy.get("[data-cy=testing-subheader]").should("contain.text", "Testing");
    });

    it("is expected to see Vue subheader", () => {
      cy.get("[data-cy=vue-subheader]").should("contain.text", "Vue");
    });

    it("is expected to see Productivity subheader", () => {
      cy
        .get("[data-cy=productivity-subheader]")
        .should("contain.text", "Productivity");
    });

    it("is expected to see Node subheader", () => {
      cy.get("[data-cy=node-subheader]").should("contain.text", "Node");
    });

    it("is expected to see React subheader", () => {
      cy.get("[data-cy=react-subheader]").should("contain.text", "React");
    });
  });

  describe("can see first 2 courses available", () => {
    it("is expected to see Work the Web course section", () => {
      cy.get("[data-cy=course-section-1]").within(() => {
        cy
          .get("[data-cy=course-header-1]")
          .should("contain.text", "Work The Web");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy
          .get("[data-cy=course-category-1]")
          .should("contain.text", "Category: workshops");
        cy
          .get("[data-cy=course-instructors-1]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman, Emma-Maria Thalén"
          );
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy
          .get("[data-cy=course-price-1]")
          .should(
            "contain.text",
            "Price: From 1 000 SEK - €100 (Contact us for details)"
          );
      });
    });

    it("is expected to see Test Automation course section", () => {
      cy.get("[data-cy=course-section-2]").within(() => {
        cy
          .get("[data-cy=course-header-2]")
          .should("contain.text", "Test Automation using Cypress");
        cy.get("[data-cy=course-description-2]").should("be.visible");
        cy
          .get("[data-cy=course-category-2]")
          .should("contain.text", "Category: testing");
        cy
          .get("[data-cy=course-instructors-2]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman, Emma-Maria Thalén"
          );
        cy.get("[data-cy=course-info-2]").should("be.visible");
        cy
          .get("[data-cy=course-price-2]")
          .should(
            "contain.text",
            "Price: 24 500 SEK - €2.450"
          );
      });
    });
  });
});
