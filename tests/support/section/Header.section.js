import LoginPage from "../pages/Login.pages";
import SearchPage from "../pages/Search.page";

export default class HeaderSection{
    constructor(page){
        this.page = page;
    }

    //locators
    inputSearchField = () => this.page.getByPlaceholder("Search")
    searchButton = () => this.page.locator("#submit_search")
    accountButton = () => this.page.locator("a.account")

    //actions
    searchProduct = async (productTitle) => {
        await this.inputSearchField().fill(productTitle);
        await this.searchButton().click();
        return new SearchPage(this.page);
    }

    clickAccountBtn = async () => {
        await this.accountButton().click();
        return new LoginPage(this.page);
    }
}