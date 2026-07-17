import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Access the home page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goToHomePage();

  await expect(homePage.title).toBeVisible();
});
