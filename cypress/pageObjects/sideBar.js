export class SideBar {
    static openMenu() {
        cy.get("#menu-toggle").click();
        cy.get("#sidebar-wrapper").should("have.class", "active");
    }

    static checkHistory() {
        cy.contains("a", "History").click();
        cy.contains("No appointment.").should("be.visible");
    }
}
