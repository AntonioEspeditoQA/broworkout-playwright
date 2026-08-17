import { test, expect } from '@playwright/test';
import { ExercisesPage } from '../pages/exercisesPage';

test('Navigate to Exercises Page', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
});

test('Verify that the exercises grid is displayed', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
    await expect(exercisesPage.exerciseItems.first()).toBeVisible();
});

test('Create a new exercise', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    const exerciseName = `TESTE EXERCICIO FISICO ${Math.random(1, 1000000)}`;
    const exerciseVideoUrl = 'https://www.youtube.com/shorts/6jG3FgNZa0Q';
    const exerciseImageUrl = 'https://bikeregistrada.com.br/blog/wp-content/uploads/2024/05/persondoingindoorcycling1-667x6941-1.jpeg';
    process.env.EXERCISENAME = exerciseName;
    await exercisesPage.navigateToExercisesPage();
    await exercisesPage.createNewExercise(exerciseName, exerciseVideoUrl, exerciseImageUrl);
    await exercisesPage.searchNewExercise(exerciseName);
    await expect(exercisesPage.exerciseItems.filter({ hasText: exerciseName })).toBeVisible();
});

test('Verify that the edit button is displayed on exercise grid', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
    await exercisesPage.clickOnEditExercise();
});

test('Verify that the image is displayed on exercise grid', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
    await exercisesPage.verifyImageOnExerciseGrid();
});

test('Verify that the delete button is displayed on exercise grid', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
    await exercisesPage.clickOnDeleteExercise();
})

test('Verify that the Name field is required', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    await exercisesPage.navigateToExercisesPage();
    await exercisesPage.clickOnAddNewExerciseButton();
    await exercisesPage.clickOnCreateExerciseButton();
    await expect(page.getByText('Falha ao criar exercício')).toBeVisible() && await expect(page.getByRole('alert')).toBeVisible();
});

test('Verify that URL fields are not required', async ({ page }) => {
    const exercisesPage = new ExercisesPage(page);
    const exerciseName = `TESTE EXERCICIO FISICO ${Math.random(1, 1000000)}`;
    const exerciseVideoUrl = 'https://www.youtube.com/shorts/6jG3FgNZa0Q';
    const exerciseImageUrl = 'https://bikeregistrada.com.br/blog/wp-content/uploads/2024/05/persondoingindoorcycling1-667x6941-1.jpeg';
    await exercisesPage.navigateToExercisesPage();
    await exercisesPage.createNewExercise();
    await expect(page.getByText('Falha ao criar exercício')).toBeVisible();
    await exercisesPage.clickOnCancelButton();
    await exercisesPage.createNewExercise(exerciseName, exerciseVideoUrl, exerciseImageUrl);
    await exercisesPage.searchNewExercise(exerciseName);
    await expect(exercisesPage.exerciseItems.filter({ hasText: exerciseName })).toBeVisible();
});