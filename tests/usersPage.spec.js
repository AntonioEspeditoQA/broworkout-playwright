import { test, expect } from '@playwright/test';
import { UsersPage } from '../pages/usersPage';

test('Navigate to Users Page', async ({ page }) => {
  const usersPage = new UsersPage(page);
  await usersPage.goToUsersPage();
  await expect(usersPage.page).toHaveURL('https://bro-workout-frontend.vercel.app/users');
  await expect(usersPage.title).toBeVisible();
});