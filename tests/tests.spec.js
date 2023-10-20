const { test, expect } = require('@playwright/test');
import HomePage from './support/pages/home.page';
import SearchPage from './support/pages/Search.page';
import HeaderSection from './support/section/header.section';

const firstName = 'test'
const lastName = 'test'
const email = 'test@qweqwe.qweqwe'
const password = 'qweqwe'

test('test with page object pattern', async ({ browser }) => {
  const context = await browser.newContext();
  const firstPage = new HomePage(await context.newPage());
  await firstPage.visit();
  const secondPage = new HomePage(await context.newPage());
  await secondPage.visit();
  const allPages = context.pages();

  //actions on first main page
  await allPages[0].bringToFront();
  const cardTitles = await firstPage.getCardTitles();
  /*const cardTitle = await fisrtCardTitle.textContent();
  await console.log(cardTitle);

  //redirecting to the second page and other actions
  await allPages[1].bringToFront();
  await inputSearchField.click();
  await inputSearchField.fill(cardTitle.trim());
  await searchButton.click();*/
  await expect (cardTitleSecondPageElement.first()).toBeVisible();
});


test('redirecting test', async ({ browser }) => {
  //browser and page initialize 
  const context = await browser.newContext();

  // Create two pages
  const firstPage = await context.newPage();
  await firstPage.goto("https://www.tptoys.com/");
  const secondPage = await context.newPage();
  await secondPage.goto("https://www.tptoys.com/");
  const allPages = context.pages();

  //locators
  const inputSearchField = secondPage.getByPlaceholder("Search")
  const searchButton = secondPage.locator("#submit_search")
  const cardTitleSecondPageElement = secondPage.locator("//a[@class='product-title']");
  const fisrtCardTitle = firstPage.locator("//a[@class='product-title']").first();

  //actions on first main page
  await allPages[0].bringToFront();
  const cardTitle = await fisrtCardTitle.textContent();
  console.log(cardTitle);

  //redirecting to the second page and other actions
  await allPages[1].bringToFront();
  await inputSearchField.click();
  await inputSearchField.fill(cardTitle.trim());
  await searchButton.click();
  await expect (cardTitleSecondPageElement.first()).toBeVisible();
});


// Sign up test
test('Sign up test', async ({ page }) => {
  const accountButton = page.locator('//a[@class="account"]')
  const signUpAccountButton = page.locator('//a[@href="/account/register"]');
  
  const firstNameField = page.getByLabel('First Name*')
  const lastNameField = page.getByLabel('Last Name*')
  const emailField = page.getByLabel('Email Address*')
  const passwordField = page.getByLabel('Password*')
  const signUpRegistrationButton = page.locator('//button[@class="button submitForm"]')
  const popUpHeadingElement = page.getByText('Welcome to the TP Family!');
  const closePopUpButton = page.locator("//div[@id='register_popup']//div[@class='close']");
  const fisrtCardTitle = page.locator("//a[@class='product-title']").first();

  await page.goto('https://www.tptoys.com/');
  await accountButton.click();
  await signUpAccountButton.click();
  await signUpToStore();
  await popUpHeadingElement.isVisible();
  await closePopUpButton.click();
  const cardTitle = await fisrtCardTitle.textContent();
  console.log(cardTitle);
  await expect(fisrtCardTitle).toContainText("TP Junior Chef Wooden Mud Kitchen with Working Tap & Sink - FSC")


  async function signUpToStore(){
    await firstNameField.fill(firstName);
    await lastNameField.fill(lastName);
    await emailField.fill(email);
    await passwordField.fill(password);
    await signUpRegistrationButton.hover();
    await signUpRegistrationButton.click();
  }
});

//login test
test('login test', async ({ page }) => {
  const accountButton = page.locator('//a[@class="account"]')
  const emailFieldSignUp = page.locator("//input[@name='customer[email]']")
  const passwordFieldSignUp = page.locator("//input[@name='customer[password]']")
  const signInButton = page.getByRole("button", {name: "Sign in"})
  const accountHeadingElement = page.getByText(('My Account'));

  await page.goto('https://www.tptoys.com/');
  await accountButton.click();
  await loginToStore();
  await expect(accountHeadingElement).toBeVisible();

  async function loginToStore(){
    await emailFieldSignUp.fill(email);
    await passwordFieldSignUp.fill(password);
    await signInButton.hover();
    await signInButton.click();
  }
});



