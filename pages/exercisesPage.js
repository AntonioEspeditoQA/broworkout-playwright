import { expect } from '@playwright/test';
export class ExercisesPage {
    constructor(page) {
        this.page = page;

        this.title = page.getByRole('heading', {
            name: 'Exercícios'
        });

        this.exerciseItems = page.getByRole('listitem');
        this.addExerciseButton = page.getByRole('button', { name: 'Adicionar exercício' });
        this.exerciseNameInput = page.getByRole('textbox', { name: 'Nome do Exercício' });
        this.exerciseVideoUrlInput = page.getByRole('textbox', { name: 'URL do Vídeo (opcional)' });
        this.exerciseImageUrlInput = page.getByRole('textbox', { name: 'URL da Imagem (opcional)' });
        this.createExerciseButton = page.getByRole('button', { name: 'Criar' });
        this.listItem = page.getByRole('listitem');
    }


    async goToExercisesPage() {
        await this.page.goto('https://bro-workout-frontend.vercel.app/exercises');
    }

    async navigateToExercisesPage() {
        await this.page.goto('https://bro-workout-frontend.vercel.app/exercises');
        await expect(this.title).toBeVisible();
        await expect(this.page).toHaveURL('https://bro-workout-frontend.vercel.app/exercises');
        await expect(this.title).toBeVisible();
    }

    async createNewExercise(exerciseName) {
        process.env.EXERCISENAME = exerciseName;
        await this.addExerciseButton.click();
        await this.exerciseNameInput.fill(exerciseName);
        await this.exerciseVideoUrlInput.fill('https://www.youtube.com/shorts/6jG3FgNZa0Q');
        await this.exerciseImageUrlInput.fill('https://bikeregistrada.com.br/blog/wp-content/uploads/2024/05/persondoingindoorcycling1-667x6941-1.jpeg');
        await this.createExerciseButton.click();
        const count = await this.exerciseItems.count();
        for (let i = 0; i < count; i++) {
            const item = this.exerciseItems.nth(i);
            const text = await item.textContent();
            console.log(text);
            if (text?.includes(exerciseName)) {
                return true;
            }
        }
    }

    async searchNewExercise(exerciseName) {
        await this.listItem.last().textContent(exerciseName);
    }
}