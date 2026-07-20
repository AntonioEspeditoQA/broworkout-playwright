export class ExercisesPage {
    constructor(page) {
        this.page = page;

        this.title = page.getByRole('heading', {
            name: 'Exercícios'
        });

        this.exerciseItems = page.getByRole('listitem');
    }


    async goToExercisesPage() {
        await this.page.goto('https://bro-workout-frontend.vercel.app/exercises');
    }

    async createNewExercise(exerciseName) {
        process.env.EXERCISENAME = exerciseName;
        await this.page.getByRole('button', { name: 'Adicionar exercício' }).click();
        await this.page.getByRole('textbox', { name: 'Nome do Exercício' }).fill(exerciseName);
        await this.page.getByRole('textbox', { name: 'URL do Vídeo (opcional)' }).fill('https://www.youtube.com/shorts/6jG3FgNZa0Q');
        await this.page.getByRole('textbox', { name: 'URL da Imagem (opcional)' }).fill('https://bikeregistrada.com.br/blog/wp-content/uploads/2024/05/persondoingindoorcycling1-667x6941-1.jpeg');
        await this.page.getByRole('button', { name: 'Criar' }).click();
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
        await this.page.locator('li:nth-child(169)').textContent(exerciseName);
    }
}