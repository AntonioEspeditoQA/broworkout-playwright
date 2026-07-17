export class ActiveWorkoutPage {
    constructor(page) {
        this.page = page;

        this.title = page.getByRole('heading', {
            name: 'Treino Ativo'
        });
    }

    async goToActiveWorkoutPage() {
        await this.page.goto('https://bro-workout-frontend.vercel.app/active-workout');
    }
}