import { BasePage } from "../pageObjects/basePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { AppPage } from "../pageObjects/appPage";

describe("Make an Appointment", () => {
  it("Books an appointment and checks details", () => {
    BasePage.visit();
    LoginPage.openLogin();
    LoginPage.login("John Doe", "ThisIsNotAPassword");

    AppPage.fillAppointment({
      facility: "Tokyo CURA Healthcare Center",
      readmission: true,
      program: "Medicare",
      date: "07/07/2025",
      comment: "CURA Healthcare Service"
    });

    AppPage.validateAppointment({
      facility: "Tokyo CURA Healthcare Center",
      readmission: "Yes",
      program: "Medicare",
      date: "07/07/2025",
      comment: "CURA Healthcare Service"
    });
  });
});
