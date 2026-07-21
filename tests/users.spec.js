import { test } from '@playwright/test';
import { UsersPage } from '../pages/usersPage';

test('Navigate to Users Page', async ({ page }) => {
  const usersPage = new UsersPage(page);
  await usersPage.navigateToUsersPage();
});