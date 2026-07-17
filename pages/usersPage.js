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
  }