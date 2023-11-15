import HomePage from "./support/pages/Home.page.js";
import HeaderSection from "./support/section/Header.section";

import { test, expect } from "playwright/test"

const firstName = 'test'
const lastName = 'test'
const email = 'test@qweqwe.qweqwe'
const password = 'qweqwe'

test("Verify that page title is 'Black Friday Deals – TP Toys'", async ({ browser, page }) => {
  await page.goto("https://www.tptoys.com/collections/black-friday-deals");
  await console.log(page.title());
  await expect(page).toHaveTitle('Black Friday Deals – TP Toys');
})

/* E2E TEST STEPS
1. goto page
2. Click on the account icon in the header
3. Click on the Sigh Up button
4. Fill the fields 
5. Click on the Sign Up button
6. close the pop up
7. Select the product by title and add it ti the cart
8. Go to the cart page
9. Verify that titles are equal
10. Go to the checkout page
11. Title and quantity are expected
12. Fill all the required fields
13. Verify that Klarna page is loaded*/

test("Verify that search is correctly working", async ({ browser, page }) => {
  //go to home page
  let homePage = new HomePage(page);
  await homePage.visit();
  let headerSection = new HeaderSection(page);
  let loginPage = await headerSection.clickAccountBtn();
  let signUpPage = await loginPage.clickSignUpBtn();
  await signUpPage.fillFirstNameField(firstName);
  await signUpPage.fillLastNameField(lastName);
  await signUpPage.fillEmailField(email);
  await signUpPage.fillPasswordField(password);
  await signUpPage.clickSignUpBtn();
  await expect(page).toHaveURL('https://www.tptoys.com/?register_popup=show');
})

