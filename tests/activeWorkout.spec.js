import { test } from '@playwright/test';
import { ActiveWorkoutPage } from '../pages/activeWorkoutPage';

test('Navigate to Active Workout Page', async ({ page }) => {
    const activeWorkoutPage = new ActiveWorkoutPage(page);
    await activeWorkoutPage.navigateToActiveWorkoutPage();
});
