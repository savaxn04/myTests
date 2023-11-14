export default class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    // Locators
    cardTitlesLocator = "a.product-title";
    inputSearchField = () => this.page.getByPlaceholder("Search")
    searchButton = () => this.page.locator("#submit_search")
    
    // Actions
    visit = async () => await this.page.goto("https://www.tptoys.com/");
  
    getCardTitles = async () => {
      const titles = await this.page.$$eval(
        cardTitlesLocator,
        elements => elements.map(element => element.textContent)
      );
      return titles;
    }

    clickInputSearchField = async () => {
        await this.inputSearchField.click();
    }

    clickSearchButton = async () => {
      await this.searchButton.click();
  }

    fillInputSearchField = async (text) => {
        await this.inputSearchField.fill(text);
    }
}