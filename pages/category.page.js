class CategoryPage {
  get inputName() {
    return $("//input[@id='nama']");
  }
  get inputDescription() {
    return $("//input[@id='deskripsi']");
  }
  get btnCreate() {
    return $("//button[@type='button' and contains(., 'simpan')]");
  }
  get successMessage() {
    return $("//div[text()='success']");
  }
  get deleteDropdown() {
    return (categoryName) =>
      $(`//div[contains(text(), '${categoryName}')]/following-sibling::button`);
  }

  async openCreateCategory() {
    await browser.url("https://kasirdemo.vercel.app/categories/create");
  }

  async openCategoryPage() {
    await browser.url("https://kasirdemo.vercel.app/categories");
  }

  async enterCategory(name, description) {
    await this.inputName.waitForDisplayed({ timeout: 5000 });
    await this.inputName.setValue(name);

    await this.inputDescription.waitForDisplayed({ timeout: 5000 });
    await this.inputDescription.setValue(description);

    await this.btnCreate.waitForClickable({ timeout: 5000 });
    await this.btnCreate.click();
  }

  async getSuccessMessage() {
    return this.successMessage;
  }

  async clickDeleteDropdown(categoryName) {
    await this.deleteDropdown(categoryName).waitForClickable({ timeout: 5000 });
    await this.deleteDropdown(categoryName).click();
  }
}

export default new CategoryPage();
