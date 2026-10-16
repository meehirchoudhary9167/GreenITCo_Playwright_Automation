
import { Page } from '@playwright/test';

export class HistoryPage {
  constructor(private page: Page) {}

  // Open History page
  async open() {
    await this.page.goto('https://greenitco.com/history');
  }

  // Click the website logo
  async clickLogo() {
    await this.page.getByRole('link', { name: 'GreenITCo', exact: true }).first().click();
  }

  // Click Home link
  async clickHome() {
    await this.page.locator('#main-menu')
      .getByRole('link', { name: 'Home', exact: true }).click();
  }

  // Click a sidebar link
  async clickSidebarLink(name: string) {
    await this.page.getByRole('link', { name, exact: true }).click();
  }
}
