export default class HomePage{
    constructor(page){
        this.page = page;
    }

    //locators
    
    //actions
    visit = async () => await this.page.goto("https://www.tptoys.com/");
}