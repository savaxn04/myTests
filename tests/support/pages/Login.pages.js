import SignUpPage from "./SignUp.page";

export default class LoginPage{
    constructor(page){
        this.page = page;
    }

    //locators
    signUpBtn = () => this.page.locator("a[href='/account/register']")

    //actions
    clickSignUpBtn = async () => {
        await this.signUpBtn().click();
        return new SignUpPage(this.page);
    }
}