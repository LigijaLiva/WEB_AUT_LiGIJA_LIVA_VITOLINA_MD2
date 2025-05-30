import { BasePage } from "../pageObjects/basePage";
import { LoginPage } from "../pageObjects/loginPage";
import { SideBar } from "../pageObjects/sideBar";

describe("Check appointment history", () => {
    it("Shows no past appointments", () => {
        BasePage.visit();
        LoginPage.openLogin();
        LoginPage.login("John Doe", "ThisIsNotAPassword");

        SideBar.openMenu();
        SideBar.checkHistory();
    });
});
