import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pages/login.page.js";

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with (.*) and (.*)$/, async (email, password) => {
  await LoginPage.login(email, password);
});

Then(/^I should see (.*) alert message$/, async (message) => {
  const errorMessage = await $(".chakra-alert");
  await expect(errorMessage).toHaveHTML(expect.stringContaining(message));
});

Then(/^I should be redirected to (.*) page$/, async (page) => {
  await expect(browser).toHaveUrl(expect.stringContaining(page));
});
