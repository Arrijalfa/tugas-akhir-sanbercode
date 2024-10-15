import { Given, When, Then } from "@wdio/cucumber-framework";
import CategoryPage from "../pages/category.page.js";

Given(/^I am on the create category page$/, async () => {
  await CategoryPage.openCreateCategory();
});

When(/^I enter new category with name and description$/, async () => {
  await CategoryPage.enterCategory(
    `[TEST] Nama Kategori ` + Math.random() * 10,
    `[TEST] Deskripsi ` + Math.random() * 10
  );
});

Then(/^I see created successfully message$/, async () => {
  const message = await CategoryPage.getSuccessMessage();
  await expect(message).toHaveHTML(
    expect.stringContaining("created successfully")
  );
});

Given(/^I am on the category page$/, async () => {
  await CategoryPage.openCategoryPage();
});

When(/^I click delete dropdown button$/, async (categoryName) => {
  await CategoryPage.clickDeleteDropdown(categoryName);
});

Then(/^I see deleted successfully message$/, async () => {
  const message = await CategoryPage.getSuccessMessage();
  await expect(message).toHaveHTML(
    expect.stringContaining("deleted successfully")
  );
});
