import { test, expect } from '@playwright/test';
import { ActiveWorkoutPage } from '../pages/activeWorkoutPage';

test('Navigate to Active Workout Page', async ({ page }) => {
    const activeWorkoutPage = new ActiveWorkoutPage(page);
    await activeWorkoutPage.goToActiveWorkoutPage();
    await expect(activeWorkoutPage.page).toHaveURL('https://bro-workout-frontend.vercel.app/active-workout');
    await expect(activeWorkoutPage.title).toBeVisible();
});
