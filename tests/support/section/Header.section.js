export default class HeaderSection{
    constructor(page){
        this.page = page;
    }

    //locators
    inputSearchField = () => this.page.getByPlaceholder("Search")
    searchButton = () => this.page.locator("#submit_search")

    //actions
    searchProduct = async (productTitle) => {
        await this.inputSearchField().fill(productTitle);
        await this.searchButton().click();
    }
}