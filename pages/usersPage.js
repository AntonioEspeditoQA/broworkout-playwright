import { expect } from '@playwright/test';
export class UsersPage {
    constructor(page) {
      this.page = page;
  
      this.title = page.getByRole('heading', {
        name: 'Usuários'
      });
    }
  
    async goToUsersPage() {
      await this.page.goto('https://bro-workout-frontend.vercel.app/users');
    }

    async navigateToUsersPage() {
      await this.page.goto('https://bro-workout-frontend.vercel.app/users');
      await expect(this.title).toBeVisible();
      await expect(this.page).toHaveURL('https://bro-workout-frontend.vercel.app/users');
      await expect(this.title).toBeVisible();
    }
  }