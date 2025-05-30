export class LoginPage {
    static openLogin() {
        cy.get("#btn-make-appointment").click();
    }

    static login(username, password) {
        cy.get("#txt-username").type(username);
        cy.get("#txt-password").type(password);
        cy.get("#btn-login").click();
    }
}
