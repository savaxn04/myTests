export default class SearchPage{
    constructor(page){
        this.page = page;
    }

    //locators
    cardTitle = () => this.page.locator("//a[@class='product-title']");
    
    //actions
    
}