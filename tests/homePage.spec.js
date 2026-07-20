import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('Navigates to Home Page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await expect(homePage.page).toHaveURL('https://bro-workout-frontend.vercel.app/');
    await expect(homePage.title).toBeVisible();
});
