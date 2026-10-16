
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  // Open homepage
  async open() {
    await this.page.goto('https://greenitco.com/');
  }

  // Get company logo
  logo() {
    return this.page.getByAltText('GreenITCo').first();
  }

  // Click company logo
  async clickLogo() {
    await this.logo().click();
  }

  // Get navigation link
  navigationLink(name: string) {
    return this.page.getByRole('link', {
      name,
      exact: true
    });
  }

  // Click navigation link
  async clickNavigationLink(name: string) {
    await this.navigationLink(name).click();
  }

  // Get email text
  email() {return this.page.locator( 'a[href="mailto:hello@greenitco.com"]').first();}

  // Get social media link
  socialLink(name: string) {
    return this.page.getByTitle(name, { exact: true });
  }

  // Get search bar
  searchBar() {
    return this.page.locator('#s');
  }

  // Scroll to bottom
  async scrollToBottom() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
    return await this.page.evaluate(() => window.scrollY);
  }

  // Scroll to top
  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
    return await this.page.evaluate(() => window.scrollY);
  }
}
