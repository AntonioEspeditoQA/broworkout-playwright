import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
export class UsersPage {

  constructor(page) {
    this.page = page;

    this.title = page.getByRole('heading', {
      name: 'Usuários'
    });
    process.env.NEW_USER_NAME = faker.person.fullName();
    process.env.NEW_USER_EMAIL = faker.internet.email();
    process.env.NEW_USER_PASSWORD = faker.internet.password();
    this.addNewUserButton = page.getByRole('button', { name: 'Adicionar Usuário' });
    this.nameInput = page.getByRole('textbox', { name: 'Nome' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Senha' });
    this.saveButton = page.getByRole('button', { name: 'Criar' });
    this.row = page.getByRole('gridcell');
    this.userNameCell = page.getByRole('gridcell', {name: process.env.NEW_USER_NAME});
    this.userEmailCell = page.getByRole('gridcell', {name: process.env.NEW_USER_EMAIL});
    this.nameColumn = page.getByRole('columnheader', { name: 'Nome' });
    this.treeDotColumnMenu = page.getByRole('button', { name: 'Nome column menu' });
    this.filterMenuItem = page.getByRole('menuitem', { name: 'Filter' });
    this.columnsNameComboBox = page.getByRole('combobox', { name: 'Columns Nome' });
    this.nameOption = page.getByRole('option', { name: 'Nome' });
    this.operatorComboBox = page.getByRole('combobox', { name: 'Operator contains' });
    this.equalOption = page.getByRole('option', { name: 'equals' });
    this.filterValueInput = page.getByRole('textbox', { name: 'Value' })

  }

  async goToUsersPage() {
    await this.page.goto('https://bro-workout-frontend.vercel.app/users');
  }

  async navigateToUsersPage() {
    await this.page.goto('https://bro-workout-frontend.vercel.app/users');
    await expect(this.title).toBeVisible();
    await expect(this.page).toHaveURL('https://bro-workout-frontend.vercel.app/users');
    await expect(this.title).toBeVisible();
  }

  async createNewUser() {
    const userName = process.env.NEW_USER_NAME;
    const userEmail = process.env.NEW_USER_EMAIL;
    const userPassword = process.env.NEW_USER_PASSWORD;
    await this.addNewUserButton.click();
    await this.nameInput.fill(userName);
    await this.emailInput.fill(userEmail);
    await this.passwordInput.fill(userPassword);
    await this.saveButton.click();
    await this.page.waitForTimeout(1000);
  }

  async searchNewUser() {
    const userName = process.env.NEW_USER_NAME;
    const userEmail = process.env.NEW_USER_EMAIL;
    await this.navigateToUsersPage();
    await this.nameColumn.hover();
    await this.treeDotColumnMenu.click();
    await this.filterMenuItem.click();
    await this.columnsNameComboBox.click();
    await this.nameOption.click();
    await this.operatorComboBox.click();
    await this.equalOption.click();
    await this.filterValueInput.fill(userName);
    await this.page.waitForTimeout(1000);
    await expect(this.userNameCell).toBeVisible();
    await expect(this.userEmailCell).toBeVisible();
  }
}