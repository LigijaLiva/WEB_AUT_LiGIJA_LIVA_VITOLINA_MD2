export class BasePage {
    static visit() {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    }
}