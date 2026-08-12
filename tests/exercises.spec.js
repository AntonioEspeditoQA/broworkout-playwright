import { test, expect } from '@playwright/test';
import { ExercisesPage } from '../pages/exercisesPage';

test('Navigate to Exercises Page', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
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

test('Verify that the edit button is displayed on exercise grid', async ({page}) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await exercisesPage.clickOnEditExercise();
});

test('Verify that the image is displayed on exercise grid', async ({page}) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await exercisesPage.verifyImageOnExerciseGrid();
});

test('Verify that the delete button is displayed on exercise grid', async ({page}) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await exercisesPage.clickOnDeleteExercise();
})

test('Verify that the Name field is required', async ({page}) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.goToExercisesPage();
    await exercisesPage.clickOnAddNewExerciseButton();
    await exercisesPage.clickOnCreateExerciseButton();
    await expect(page.getByText('Falha ao criar exercício')).toBeVisible() && await expect(page.getByRole('alert')).toBeVisible();
});
