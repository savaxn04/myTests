import SearchPage from "./Search.page";
import HomePage from "./Home.page";

export default class SignUpPage{
    constructor(page){
        this.page = page;
    }

    //locators
    firstNameField = () => this.page.getByLabel("First Name*")
    lastNameField = () => this.page.getByLabel("Last Name*")
    emailField = () => this.page.getByLabel("Email Address*")
    passwordField = () => this.page.getByLabel("Password*")
    signUpBtn = () => this.page.getByRole("button", {name: "Sign Up"})

    //actions
    fillFirstNameField = async (firstName) => {
        await this.firstNameField().fill(firstName);
    }
    fillLastNameField = async (lastName) => {
        await this.lastNameField().fill(lastName);
    }
    fillEmailField = async (email) => {
        await this.emailField().fill(email);
    }
    fillPasswordField = async (password) => {
        await this.passwordField().fill(password);
    }
    clickSignUpBtn = async () => {
        await this.signUpBtn().click();
        return new HomePage(this.page);
    }
}