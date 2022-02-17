describe("A visitor can filter the courses", () => {
  before(() => {
    cy.intercept("GET", "**/data/courses.json", {
      fixture: "coursesIndexResponse.json"
    });
    cy.visit("/");
  });

  describe("by click on the Workshops category subheader", () => {
    before(() => {
      cy.get("[data-cy=workshops-subheader]").click();
    });

    it("is expected to display Work the Web course section", () => {
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

    it("is expected to not see Test Automation course section", () => {
      cy.get("[data-cy=course-section-2]").should("not.exist");
    });

    it("is expected to not see Introduction to VUE3 course section", () => {
      cy.get("[data-cy=course-section-3]").should("not.exist");
    });

    it("is expected to not see Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-4]").should("not.exist");
    });

    it("is expected to not see Version Control with Git course section", () => {
      cy.get("[data-cy=course-section-5]").should("not.exist");
    });

    it("is expected to not see API development with NodeJS course section", () => {
      cy.get("[data-cy=course-section-6]").should("not.exist");
    });

    it("is expected to not see ReactJs - Getting Started (2020 edition) course section", () => {
      cy.get("[data-cy=course-section-7]").should("not.exist");
    });
  });

  describe("by clicking Testing subheader", () => {
    before(() => {
      cy.get("[data-cy=testing-subheader]").click();
    });

    it("is expected to display Test Automation using Cypress course section", () => {
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
          .should("contain.text", "Price: 24 500 SEK - €2.450");
      });
    });

    it("is expected to not see Work the Web course section", () => {
      cy.get("[data-cy=course-section-1]").should("not.exist");
    });

    it("is expected to not see Introduction to VUE3 course section", () => {
      cy.get("[data-cy=course-section-3]").should("not.exist");
    });

    it("is expected to not see Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-4]").should("not.exist");
    });

    it("is expected to not see Version Control with Git course section", () => {
      cy.get("[data-cy=course-section-5]").should("not.exist");
    });

    it("is expected to not see API development with NodeJS course section", () => {
      cy.get("[data-cy=course-section-6]").should("not.exist");
    });

    it("is expected to not see ReactJs - Getting Started (2020 edition) course section", () => {
      cy.get("[data-cy=course-section-7]").should("not.exist");
    });
  });
});
