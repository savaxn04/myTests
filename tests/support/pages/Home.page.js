export default class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    // Locators
    cardTitles = () => this.page.locator("//a[@class='product-title']");
  
    // Actions
    visit = async () => await this.page.goto("https://www.tptoys.com/");
  
    getCardTitles = async () => {
      const titles = await this.cardTitles.innerTexts();
      titles.forEach(title => {
        console.log(title);
      });
      return titles;
    }
  }