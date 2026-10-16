import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  // Open the Products page
  async open() {
    await this.page.goto('https://greenitco.com/products');
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

  // Get a product link
  productLink(name: string) {
    return this.page.getByRole('link', { name });
  }

  // Get the first matching product link
  firstProductLink(name: string) {
    return this.page.getByRole('link', { name }).first();
  }

  // Get a heading
  heading(name: string) {
    return this.page.getByRole('heading', {
      name,
      exact: true,
    });
  }

  // Get the first matching heading
  firstHeading(name: string) {
    return this.page.getByRole('heading', { name }).first();
  }

  // Click the company logo
  async clickLogo() {
    await this.logo().click();
  }

  // Click a navigation link
  async clickNavigationLink(name: string) {
    await this.navigationLink(name).click();
  }

  // Click a product link
  async clickProductLink(name: string) {
    await this.productLink(name).click();
  }

  // Click the first matching product link
  async clickFirstProductLink(name: string) {
    await this.firstProductLink(name).click();
  }
}