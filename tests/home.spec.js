import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('Navigate to Home Page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
});

