import { test, expect } from '@playwright/test';
import { ExercisesPage } from '../pages/exercisesPage';

test('Navigate to Exercises Page', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await expect(exercisesPage.page).toHaveURL('https://bro-workout-frontend.vercel.app/exercises');
    await expect(exercisesPage.title).toBeVisible();
});

test('Verify that the exercises grid is displayed', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await expect(exercisesPage.exerciseItems.first()).toBeVisible();
});

test('Create a new exercise', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    const exerciseName = `TESTE EXERCICIO FISICO ${Math.random(1,1000000)}`;
    process.env.EXERCISENAME = exerciseName;
    await exercisesPage.goToExercisesPage();
    await exercisesPage.createNewExercise(exerciseName);
    await exercisesPage.searchNewExercise(exerciseName);
    await expect(exercisesPage.exerciseItems.filter({ hasText: exerciseName })).toBeVisible();
});