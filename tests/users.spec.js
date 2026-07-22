import { test } from '@playwright/test';
import { UsersPage } from '../pages/usersPage';

test('Navigate to Users Page', async ({ page }) => {
  const usersPage = new UsersPage(page);
  await usersPage.navigateToUsersPage();
});

test('Create a new User', async ({ page }) => {
  const usersPage = new UsersPage(page);
  await usersPage.navigateToUsersPage();
  await usersPage.createNewUser();
  await usersPage.searchNewUser();
  await usersPage.navigateToUsersPage();
});