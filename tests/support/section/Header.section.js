import SearchPage from "../pages/Search.page";

export default class HeaderSection{
    constructor(page){
        this.page = page;
    }

    //locators
    inputSearchField = () => this.page.getByPlaceholder("Search")
    searchButton = () => this.page.locator("#submit_search")
    //accountButton = () => this.page.

    //actions
    searchProduct = async (productTitle) => {
        await this.inputSearchField().fill(productTitle);
        await this.searchButton().click();
        return new SearchPage(this.page);
    }
}