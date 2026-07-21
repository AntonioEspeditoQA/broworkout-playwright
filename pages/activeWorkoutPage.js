import { expect } from '@playwright/test';
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

    async navigateToActiveWorkoutPage() {
        await this.page.goto('https://bro-workout-frontend.vercel.app/active-workout');
        await expect(this.title).toBeVisible();
        await expect(this.page).toHaveURL('https://bro-workout-frontend.vercel.app/active-workout');
        await expect(this.title).toBeVisible();
    }
}