describe("A visitor visiting the application", () => {
  before(() => {
    cy.intercept("GET", "./data/courses.json", {
      fixture: "coursesIndexResponse.json"
    }).as("coursesList");
    cy.visit("/");
  });

  it.only('is expected to receive a collection of x courses', () => {
    cy.wait("@coursesList").its("response.body").should("be.an", "array");
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

  describe("can see all the courses available", () => {
    it("is expected to see Work the Web course section", () => {
      cy.get("[data-cy=worktheweb-section]").within(() => {
        cy
          .get("[data-cy=worktheweb-header]")
          .should("contain.text", "WORK THE WEB");
        cy.get("[data-cy=worktheweb-description]").should("be.visible");
        cy
          .get("[data-cy=worktheweb-category]")
          .should("contain.text", "Category: Workshops");
        cy
          .get("[data-cy=worktheweb-instructors]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman, Emma-Maria Thalén"
          );
        cy.get("[data-cy=worktheweb-info]").should("be.visible");
        cy
          .get("[data-cy=worktheweb-price]")
          .should(
            "contain.text",
            "Price: From 1 000 SEK - €100 (Contact us for details)"
          );
      });
    });

    // it("", () => {});
  });
});
