import { expect, test } from '@playwright/test';
import { HistoryPage } from '../pages/HistoryPage.spec.ts';
const homeURL = 'https://greenitco.com/';

test.describe('History Page Tests', () => {
  let history: HistoryPage;

  // Open History page before each test
  test.beforeEach(async ({ page }) => {
    history = new HistoryPage(page);
    await history.open();
  });

  // TC_HISTORY_001 - Verify History page URL
  test('TC_HISTORY_001 - Verify URL', async ({ page }) => {
    await expect(page).toHaveURL(/greenitco\.com\/history\/?$/);
  });

  // TC_HISTORY_002 - Verify History heading
  test('TC_HISTORY_002 - Verify heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'History', exact: true })
    ).toBeVisible();
  });

  // TC_HISTORY_003 - Verify header visibility
  test('TC_HISTORY_003 - Verify header', async ({ page }) => {
    await expect(page.locator('#page_header')).toBeVisible();
  });

  // TC_HISTORY_004 - Verify footer visibility
  test('TC_HISTORY_004 - Verify footer', async ({ page }) => {
    await expect(page.locator('#footer-main')).toBeVisible();
  });

  // TC_HISTORY_005 - Verify navigation visibility
  test('TC_HISTORY_005 - Verify navigation', async ({ page }) => {
    await expect(page.locator('#main-menu')).toBeVisible();
  });

  // TC_HISTORY_006 - Verify logo visibility
  test('TC_HISTORY_006 - Verify logo', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'GreenITCo', exact: true }).first()
    ).toBeVisible();
  });

  // TC_HISTORY_007 - Verify logo navigation
  test('TC_HISTORY_007 - Verify logo navigation', async ({ page }) => {
    await history.clickLogo();
    await expect(page).toHaveURL(homeURL);
  });

  // TC_HISTORY_008 - Verify Home and History links
  test('TC_HISTORY_008 - Verify navigation links', async ({ page }) => {
    const menu = page.locator('#main-menu');

    await expect(
      menu.getByRole('link', { name: 'Home', exact: true })
    ).toBeVisible();

    await expect(
      menu.getByRole('link', { name: 'History', exact: true })
    ).toBeVisible();
  });

  // TC_HISTORY_009 - Verify Home navigation
  test('TC_HISTORY_009 - Verify Home navigation', async ({ page }) => {
    await history.clickHome();
    await expect(page).toHaveURL(homeURL);
  });

  // TC_HISTORY_010 - Verify About Us navigation
  test('TC_HISTORY_010 - Verify About Us navigation', async ({ page }) => {
    await history.clickSidebarLink('About-us');
    await expect(page).toHaveURL(/about-us/i);
  });

  // TC_HISTORY_011 - Verify CSR Activity navigation
  test('TC_HISTORY_011 - Verify CSR Activity navigation', async ({ page }) => {
    await history.clickSidebarLink('CSR Activity');
    await expect(page).toHaveURL(/csr/i);
  });

  // TC_HISTORY_012 - Verify Leadership navigation
  test('TC_HISTORY_012 - Verify Leadership navigation', async ({ page }) => {
    await history.clickSidebarLink('Leadership');
    await expect(page).toHaveURL(/leadership/i);
  });

  // TC_HISTORY_013 - Verify Customer navigation
  test('TC_HISTORY_013 - Verify Customer navigation', async ({ page }) => {
    await history.clickSidebarLink('Customer');
    await expect(page).toHaveURL(/customer/i);
  });
});
