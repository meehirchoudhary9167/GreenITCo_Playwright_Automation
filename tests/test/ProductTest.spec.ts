import { expect, test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage.spec.ts';

const productURL = 'https://greenitco.com/products';
const homeURL = 'https://greenitco.com/';

// Open the Products page before each test
test.describe('Products Page Tests', () => {
  let products: ProductsPage;

  test.beforeEach(async ({ page }) => {
    products = new ProductsPage(page);
    await products.open();
  });

  // TC_PRODUCT_001 - Verify Products page URL
  test('TC_PRODUCT_001 - Verify URL', async ({ page }) => {
    await expect(page).toHaveURL(productURL);
  });

  // TC_PRODUCT_002 - Verify Products heading
  test('TC_PRODUCT_002 - Verify heading', async () => {
    await expect(products.heading('Products')).toBeVisible();
  });

  // TC_PRODUCT_003 - Verify header visibility
  test('TC_PRODUCT_003 - Verify header', async () => {
    await expect(products.header()).toBeVisible();
  });

  // TC_PRODUCT_004 - Verify footer visibility
  test('TC_PRODUCT_004 - Verify footer', async () => {
    await expect(products.footer()).toBeVisible();
  });

  // TC_PRODUCT_005 - Verify main navigation visibility
  test('TC_PRODUCT_005 - Verify navigation menu', async () => {
    await expect(products.navigation()).toBeVisible();
  });

  // TC_PRODUCT_006 - Verify logo visibility
  test('TC_PRODUCT_006 - Verify logo visibility', async () => {
    await expect(products.logo()).toBeVisible();
  });

  // TC_PRODUCT_007 - Verify logo navigation
  test('TC_PRODUCT_007 - Verify logo navigation', async ({ page }) => {
    await products.clickLogo();

    await expect(page).toHaveURL(homeURL);
  });

  // TC_PRODUCT_008 - Verify Home and History links
  test('TC_PRODUCT_008 - Verify navigation links', async () => {
    await expect(products.navigationLink('Home')).toBeVisible();
    await expect(products.navigationLink('History')).toBeVisible();
  });

  // TC_PRODUCT_009 - Verify Home navigation
  test('TC_PRODUCT_009 - Verify Home navigation', async ({ page }) => {
    await products.clickNavigationLink('Home');

    await expect(page).toHaveURL(homeURL);
  });

  // TC_PRODUCT_010 - Verify Computerized Maintenance Management System navigation
  test('TC_PRODUCT_010', async () => {
    await products.clickProductLink(
      'Computerized Maintenance Management System'
    );

    await expect(
      products.firstHeading('Computerized Maintenance Management System')
    ).toBeVisible();
  });

  // TC_PRODUCT_011 - Verify Asset Management Solution navigation
  test('TC_PRODUCT_011', async () => {
    await products.clickProductLink('Asset management Solution');

    await expect(
      products.heading(
        'Best IT Asset Management Software with Ticketing Tools & Inventory Control Software'
      )
    ).toBeVisible();
  });

  // TC_PRODUCT_012 - Verify Service Desk Software
  test('TC_PRODUCT_012', async () => {
    await products.clickFirstProductLink('Service Desk Software');

    await expect(
      products.firstHeading('Enterprise Service Desk Software with AI')
    ).toBeVisible();
  });

  // TC_PRODUCT_013 - Verify Milk Calender
  test('TC_PRODUCT_013', async () => {
    await products.clickFirstProductLink('Milk Calender');

    await expect(products.heading('Milk Calender')).toBeVisible();
  });

  // TC_PRODUCT_014 - Verify Live Token & Queue Management
  test('TC_PRODUCT_014', async () => {
    await products.clickFirstProductLink('Live Token & Queue Management');

    await expect(
      products.heading(
        'Live Token App: Advanced Token Management and booking appointment app'
      )
    ).toBeVisible();
  });

  // TC_PRODUCT_015 - Verify Nextmegabyte
  test('TC_PRODUCT_015', async () => {
    await products.clickFirstProductLink('Nextmegabyte');

    await expect(products.heading('Nextmegabyte')).toBeVisible();
  });

  // TC_PRODUCT_016 - Verify Complaint Management System
  test('TC_PRODUCT_016', async () => {
    await products.clickFirstProductLink(' Complaint Management System ');

    await expect(
      products.heading(
        'Best Complaint Management System with AI: Enhance Customer Support'
      )
    ).toBeVisible();
  });
});