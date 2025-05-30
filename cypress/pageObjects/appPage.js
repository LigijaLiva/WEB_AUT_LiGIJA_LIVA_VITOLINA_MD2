export class AppPage {
    static fillAppointment({ facility, readmission, program, date, comment }) {
        cy.get("#combo_facility").select(facility);
        if (readmission) cy.get("#chk_hospotal_readmission").check();
        cy.get(`#radio_program_${program.toLowerCase()}`).check();
        cy.get("#txt_visit_date").type(date);
        cy.get("#txt_comment").type(comment, { force: true });
        cy.get("#btn-book-appointment").click();
    }

    static validateAppointment({ facility, readmission, program, date, comment }) {
        cy.get("#facility").should("contain", facility);
        cy.get("#hospital_readmission").should("contain", readmission);
        cy.get("#program").should("contain", program);
        cy.get("#visit_date").should("contain", date);
        cy.get("#comment").should("contain", comment);
    }
}
