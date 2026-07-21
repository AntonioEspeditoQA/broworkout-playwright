import { expect } from '@playwright/test';
export class HomePage {
  constructor(page) {
    this.page = page;

    this.title = page.getByRole('heading', {
      name: 'Bem-vindo ao Bro Workout'
    });
  }

  async goToHomePage() {
    await this.page.goto('https://bro-workout-frontend.vercel.app/');
  }

  async navigateToHomePage() {
    await this.page.goto('https://bro-workout-frontend.vercel.app/');
    await expect(this.title).toBeVisible();
    await expect(this.page).toHaveURL('https://bro-workout-frontend.vercel.app/');
    await expect(this.title).toBeVisible();
  }
}