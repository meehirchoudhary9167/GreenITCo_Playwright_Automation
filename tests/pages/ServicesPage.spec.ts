import { Page } from '@playwright/test';

export class ServicesPage {
  constructor(private page: Page) {}

  // Open the Services page
  async open() {
    await this.page.goto('https://greenitco.com/services');
  }

  // Get the page header
  header() {
    return this.page.locator('#page_header');
  }

  // Get the footer
  footer() {
    return this.page.locator('#footer-main');
  }

  // Get the main navigation menu
  navigation() {
    return this.page.locator('#main-menu');
  }

  // Get the company logo
  logo() {
    return this.page
      .getByRole('link', { name: 'GreenITCo', exact: true })
      .first();
  }

  // Get a navigation link
  navigationLink(name: string) {
    return this.navigation().getByRole('link', {
      name,
      exact: true,
    });
  }

  // Get a service link
  serviceLink(name: string) {
    return this.page.getByRole('link', { name });
  }

  // Get a heading
  heading(name: string) {
    return this.page.getByRole('heading', {
      name,
      exact: true,
    });
  }

  // Click the company logo
  async clickLogo() {
    await this.logo().click();
  }

  // Click a navigation link
  async clickNavigationLink(name: string) {
    await this.navigationLink(name).click();
  }

  // Click the first matching service link
  async clickServiceLink(name: string) {
    await this.serviceLink(name).first().click();
  }
}