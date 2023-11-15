export default class SearchPage{
    constructor(page){
        this.page = page;
    }

    cardTitlesLocator = "a.product-title";
    paginationNextArrow = "//a[contains(text(), '❯')]";
    paginationPrevArrow = "//a[contains(text(), '❮')]";

    getCardTitles = async () => {
        let titles = [];
        while(true){
            await this.page.waitForSelector(this.cardTitlesLocator);

            //Get titles and writing to the titles variable
            titles = titles.concat(await this.page.$$eval(
                this.cardTitlesLocator,
                elements => elements.map(element => element.textContent.replace(/[\n\t]/g, ''))
            ))

            // Click on the next page button if it exist else return titles
            if (await this.isElementExists(this.paginationNextArrow)) {
                await this.page.locator(this.paginationNextArrow).click(); 
            } else {
                return titles;
            }
        }
    }

    isElementExists = async (selector) => {
        const element = await this.page.$(selector);
        return element !== null;
    }
}