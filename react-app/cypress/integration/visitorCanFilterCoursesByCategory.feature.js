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
      cy.get("[data-cy=course-section-1]").within(() => {
        cy
          .get("[data-cy=course-header-1]")
          .should("contain.text", "Test Automation using Cypress");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy
          .get("[data-cy=course-category-1]")
          .should("contain.text", "Category: testing");
        cy
          .get("[data-cy=course-instructors-1]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman, Emma-Maria Thalén"
          );
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy
          .get("[data-cy=course-price-1]")
          .should("contain.text", "Price: 24 500 SEK - €2.450");
      });
    });

    it("is expected to not see Work the Web course section", () => {
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

  describe("by clicking Vue subheader", () => {
    before(() => {
      cy.get("[data-cy=vue-subheader]").click();
    });

    it("is expected to display Introduction to Vue3 course section", () => {
      cy.get("[data-cy=course-section-1]").within(() => {
        cy
          .get("[data-cy=course-header-1]")
          .should("contain.text", "Introduction to VUE3");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy
          .get("[data-cy=course-category-1]")
          .should("contain.text", "Category: vue");
        cy
          .get("[data-cy=course-instructors-1]")
          .should(
            "contain.text",
            "Instructors: Simon Wikstrand, Thomas Ochman"
          );
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy
          .get("[data-cy=course-price-1]")
          .should("contain.text", "13 000 SEK - €1.300");
      });
    });

    it("is expected to display Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-2]").within(() => {
        cy
          .get("[data-cy=course-header-2]")
          .should("contain.text", "Building Web Applications using VUE 3");
        cy.get("[data-cy=course-description-2]").should("be.visible");
        cy
          .get("[data-cy=course-category-2]")
          .should("contain.text", "Category: vue");
        cy
          .get("[data-cy=course-instructors-2]")
          .should(
            "contain.text",
            "Instructors: Simon Wikstrand, Thomas Ochman"
          );
        cy.get("[data-cy=course-info-2]").should("be.visible");
        cy
          .get("[data-cy=course-price-2]")
          .should("contain.text", "24 500 SEK - €2.450");
      });
    });

    it("is expected to not see Work the Web course section", () => {
      cy.get("[data-cy=course-section-3]").should("not.exist");
    });

    it("is expected to not see Test Automation using Cypress course section", () => {
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

  describe("by clicking Productivity subheader", () => {
    before(() => {
      cy.get("[data-cy=productivity-subheader]").click();
    });

    it("is expected to display Version Control with Git course section", () => {
      cy.get("[data-cy=course-section-1]").within(() => {
        cy
          .get("[data-cy=course-header-1]")
          .should("contain.text", "Version Control with Git");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy
          .get("[data-cy=course-category-1]")
          .should("contain.text", "Category: productivity");
        cy
          .get("[data-cy=course-instructors-1]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman, Emma-Maria Thalén."
          );
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy
          .get("[data-cy=course-price-1]")
          .should("contain.text", "24 500 SEK - €2.450");
      });
    });

    it("is expected to not see Work the Web course section", () => {
      cy.get("[data-cy=course-section-2]").should("not.exist");
    });

    it("is expected to not see Test Automation using Cypress course section", () => {
      cy.get("[data-cy=course-section-3]").should("not.exist");
    });

    it("is expected to not see Introduction to Vue3 course section", () => {
      cy.get("[data-cy=course-section-4]").should("not.exist");
    });

    it("is expected to not see Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-5]").should("not.exist");
    });

    it("is expected to not see API development with NodeJS course section", () => {
      cy.get("[data-cy=course-section-6]").should("not.exist");
    });

    it("is expected to not see ReactJs - Getting Started (2020 edition) course section", () => {
      cy.get("[data-cy=course-section-7]").should("not.exist");
    });
  });

  describe("by clicking Node subheader", () => {
    before(() => {
      cy.get("[data-cy=node-subheader]").click();
    });

    it("is expected to display API development with NodeJS course section", () => {
      cy.get("[data-cy=course-section-1]").within(() => {
        cy
          .get("[data-cy=course-header-1]")
          .should("contain.text", "API development with NodeJS");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy
          .get("[data-cy=course-category-1]")
          .should("contain.text", "Category: node");
        cy
          .get("[data-cy=course-instructors-1]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman"
          );
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy
          .get("[data-cy=course-price-1]")
          .should("contain.text", "35 500 SEK - €3.500");
      });
    });

    it("is expected to not see Work the Web course section", () => {
      cy.get("[data-cy=course-section-2]").should("not.exist");
    });

    it("is expected to not see Test Automation using Cypress course section", () => {
      cy.get("[data-cy=course-section-3]").should("not.exist");
    });

    it("is expected to not see Introduction to Vue3 course section", () => {
      cy.get("[data-cy=course-section-4]").should("not.exist");
    });

    it("is expected to not see Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-5]").should("not.exist");
    });

    it("is expected to not see Version Control with Git course section", () => {
      cy.get("[data-cy=course-section-6]").should("not.exist");
    });

    it("is expected to not see ReactJs - Getting Started (2020 edition) course section", () => {
      cy.get("[data-cy=course-section-7]").should("not.exist");
    });
  });

  describe("by clicking React subheader", () => {
    before(() => {
      cy.get("[data-cy=react-subheader]").click();
    });

    it("is expected to display ReactJs - Getting Started (2020 edition) course section", () => {
      cy.get("[data-cy=course-section-1]").within(() => {
        cy
          .get("[data-cy=course-header-1]")
          .should("contain.text", "ReactJs - Getting Started (2020 edition)");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy
          .get("[data-cy=course-category-1]")
          .should("contain.text", "Category: react");
        cy
          .get("[data-cy=course-instructors-1]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman."
          );
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy
          .get("[data-cy=course-price-1]")
          .should("contain.text", "24 500 SEK - €2.450");
      });
    });

    it("is expected to not see Work the Web course section", () => {
      cy.get("[data-cy=course-section-2]").should("not.exist");
    });

    it("is expected to not see Test Automation using Cypress course section", () => {
      cy.get("[data-cy=course-section-3]").should("not.exist");
    });

    it("is expected to not see Introduction to Vue3 course section", () => {
      cy.get("[data-cy=course-section-4]").should("not.exist");
    });

    it("is expected to not see Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-5]").should("not.exist");
    });

    it("is expected to not see Version Control with Git course section", () => {
      cy.get("[data-cy=course-section-6]").should("not.exist");
    });

    it("is expected to not see API development with NodeJS course section", () => {
      cy.get("[data-cy=course-section-7]").should("not.exist");
    });
  });

  describe("by clicking at COURSE LIST main header", () => {
    before(() => {
      cy.get("[data-cy=course-list-header]").click();
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

    it("is expected to display Introduction to Vue3 course section", () => {
      cy.get("[data-cy=course-section-3]").within(() => {
        cy
          .get("[data-cy=course-header-3]")
          .should("contain.text", "Introduction to VUE3");
        cy.get("[data-cy=course-description-3]").should("be.visible");
        cy
          .get("[data-cy=course-category-3]")
          .should("contain.text", "Category: vue");
        cy
          .get("[data-cy=course-instructors-3]")
          .should(
            "contain.text",
            "Instructors: Simon Wikstrand, Thomas Ochman"
          );
        cy.get("[data-cy=course-info-3]").should("be.visible");
        cy
          .get("[data-cy=course-price-3]")
          .should("contain.text", "13 000 SEK - €1.300");
      });
    });

    it("is expected to display Building Web Applications using VUE 3 course section", () => {
      cy.get("[data-cy=course-section-4]").within(() => {
        cy
          .get("[data-cy=course-header-4]")
          .should("contain.text", "Building Web Applications using VUE 3");
        cy.get("[data-cy=course-description-4]").should("be.visible");
        cy
          .get("[data-cy=course-category-4]")
          .should("contain.text", "Category: vue");
        cy
          .get("[data-cy=course-instructors-4]")
          .should(
            "contain.text",
            "Instructors: Simon Wikstrand, Thomas Ochman"
          );
        cy.get("[data-cy=course-info-4]").should("be.visible");
        cy
          .get("[data-cy=course-price-4]")
          .should("contain.text", "24 500 SEK - €2.450");
      });
    });

    it("is expected to display Version Control with Git course section", () => {
      cy.get("[data-cy=course-section-5]").within(() => {
        cy
          .get("[data-cy=course-header-5]")
          .should("contain.text", "Version Control with Git");
        cy.get("[data-cy=course-description-5]").should("be.visible");
        cy
          .get("[data-cy=course-category-5]")
          .should("contain.text", "Category: productivity");
        cy
          .get("[data-cy=course-instructors-5]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman, Emma-Maria Thalén."
          );
        cy.get("[data-cy=course-info-5]").should("be.visible");
        cy
          .get("[data-cy=course-price-5]")
          .should("contain.text", "24 500 SEK - €2.450");
      });
    });

    it("is expected to display API development with NodeJS course section", () => {
      cy.get("[data-cy=course-section-6]").within(() => {
        cy
          .get("[data-cy=course-header-6]")
          .should("contain.text", "API development with NodeJS");
        cy.get("[data-cy=course-description-6]").should("be.visible");
        cy
          .get("[data-cy=course-category-6]")
          .should("contain.text", "Category: node");
        cy
          .get("[data-cy=course-instructors-6]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman"
          );
        cy.get("[data-cy=course-info-6]").should("be.visible");
        cy
          .get("[data-cy=course-price-6]")
          .should("contain.text", "35 500 SEK - €3.500");
      });
    });

    it("is expected to display ReactJs - Getting Started (2020 edition) course section", () => {
      cy.get("[data-cy=course-section-7]").within(() => {
        cy
          .get("[data-cy=course-header-7]")
          .should("contain.text", "ReactJs - Getting Started (2020 edition)");
        cy.get("[data-cy=course-description-7]").should("be.visible");
        cy
          .get("[data-cy=course-category-7]")
          .should("contain.text", "Category: react");
        cy
          .get("[data-cy=course-instructors-7]")
          .should(
            "contain.text",
            "Instructors: Thomas Ochman."
          );
        cy.get("[data-cy=course-info-7]").should("be.visible");
        cy
          .get("[data-cy=course-price-7]")
          .should("contain.text", "24 500 SEK - €2.450");
      });
    });
  });
});
