import { test, expect } from '@playwright/test';
import { ExercisesPage } from '../pages/exercisesPage';

test('Navigate to Exercises Page', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await expect(exercisesPage.page).toHaveURL('https://bro-workout-frontend.vercel.app/exercises');
    await expect(exercisesPage.title).toBeVisible();
});