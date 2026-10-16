import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.spec.ts';

const homeURL = 'https://greenitco.com/';

test.describe('Homepage Tests', () => {
  let home: HomePage;

  // Open homepage before each test
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.open();
  });

  // 1. Verify homepage loads successfully
  test('TC_HOME_001 - Homepage loads', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
    await expect(page).toHaveURL(homeURL);
  });

  // 2. Verify page title and main heading
  test('TC_HOME_002 - Title and heading', async ({ page }) => {
    await expect(page).toHaveTitle(/GreenITCo/i);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  // 3. Verify company logo
  test('TC_HOME_003 - Logo is visible', async () => {
    await expect(home.logo()).toBeVisible();
  });

  // 4. Click logo and verify homepage navigation
  test('TC_HOME_004 - Logo navigation', async ({ page }) => {
    await home.open();
    await home.clickLogo();
    await expect(page).toHaveURL(homeURL);
  });

  // 5. Verify header and navigation
  test('TC_HOME_005 - Header and navigation', async ({ page }) => {
    await expect(page.locator('.main-menu-wrapper')).toBeVisible();
    await expect(page.locator('#main-menu')).toBeVisible();
  });

  // 6. Verify homepage navigation links
  test('TC_HOME_006 - Homepage navigation links', async () => {
    await expect(home.navigationLink('History')).toBeVisible();
    await expect(home.navigationLink('Products')).toBeVisible();
    await expect(home.navigationLink('Services')).toBeVisible();
    await expect(home.navigationLink('Demo')).toBeVisible();
    await expect(home.navigationLink('Connect')).toBeVisible();
    await expect(home.navigationLink('Schedule a Call')).toBeVisible();
  });

  // 7. Verify homepage scrolling
  test('TC_HOME_007 - Homepage scroll down and up', async () => {
    await home.open();

    const bottom = await home.scrollToBottom();
    expect(bottom).toBeGreaterThan(0);

    const top = await home.scrollToTop();
    expect(top).toBe(0);
  });

  // 8. Verify navigation bar links
  test('TC_HOME_08 - Navigation bar links', async ({ page }) => {
    await home.open();

    // Home
    await home.clickNavigationLink('Home');
    await expect(page).toHaveURL(homeURL);

    // History
    await home.clickNavigationLink('History');
    await expect(page).toHaveURL('https://greenitco.com/history');

    // Products
    await home.open();
    await home.clickNavigationLink('Products');
    await expect(page).toHaveURL('https://greenitco.com/products');

    // Services
    await home.open();
    await home.clickNavigationLink('Services');
    await expect(page).toHaveURL('https://greenitco.com/services');

    // Demo
    await home.open();
    await home.clickNavigationLink('Demo');
    await expect(page).toHaveURL(
      'https://itassetmanagementsoftware.com/demo_request/'
    );

    // Schedule a Call
    await home.open();
    await home.clickNavigationLink('Schedule a Call');
    await expect(page).toHaveURL(
      'https://itassetmanagement.in/demo/'
    );
  });

  // 9. Email verification
  test('TC_HOME_009 Email Verification', async () => {
    const email = home.email();
    await expect.soft(email).toBeVisible();
     // Verify email has a clickable mail link
    await expect.soft(email).toHaveAttribute( 'href', 'mailto:hello@greenitco.com');
  // Continue test execution
    await email.click();
});

  // 10. Social media icon verification
  test('TC_HOME_010 - Social Media Verification', async () => {
    const facebook = home.socialLink('Facebook');

    await expect(facebook).toBeVisible();
    await expect(facebook).toHaveAttribute(
      'href',
      'https://www.facebook.com/greenitco'
    );

    const linkedin = home.socialLink('LinkedIn');

    await expect(linkedin).toBeVisible();
    await expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/company/greenitco/posts/'
    );

    const instagram = home.socialLink('Instgram');

    await expect(instagram).toBeVisible();
    await expect(instagram).toHaveAttribute(
      'href',
      'https://www.instagram.com/itassetmanagement/'
    );

    const youtube = home.socialLink('youtube');

    await expect(youtube).toBeVisible();
    await expect(youtube).toHaveAttribute(
      'href',
      'https://www.youtube.com/@ITAssetMangementin'
    );

    const pinerest = home.socialLink('Pinterest');

    await expect(pinerest).toBeVisible();
    await expect(pinerest).toHaveAttribute(
      'href',
      'https://in.pinterest.com/greenitco/'
    );
  });

  // 11. Verify search bar
  test('TC_HOME_011 - Search Bar Verification', async () => {
    const searchBar = home.searchBar();

    await expect(searchBar).toBeVisible();
    await expect(searchBar).toBeEditable();
  });

  // 12. Verify search functionality
  test('TC_HOME_012 - Search Functionality', async ({ page }) => {
    const searchBar = home.searchBar();

    await searchBar.fill('Products');
    await searchBar.press('Enter');

    await expect(page).toHaveURL(/s=Products/);
  });

  // 13. Verify that text can be entered
  test('TC_HOME_014 - Enter search keyword', async () => {
    await home.searchBar().fill('Products');
    await expect(home.searchBar()).toHaveValue('Products');
  });

  // 14. Verify that the search bar can be cleared
  test('TC_HOME_015 - Clear search keyword', async () => {
    const searchBar = home.searchBar();

    await searchBar.fill('Products');
    await searchBar.clear();

    await expect(searchBar).toHaveValue('');
  });
});
