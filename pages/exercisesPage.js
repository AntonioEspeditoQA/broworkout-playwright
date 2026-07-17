export class ExercisesPage {
    constructor(page) {
        this.page = page;

        this.title = page.getByRole('heading', {
            name: 'Exercícios'
        });
    }

    async goToExercisesPage() {
        await this.page.goto('https://bro-workout-frontend.vercel.app/exercises');
    }
}