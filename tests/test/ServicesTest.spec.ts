import { expect, test } from '@playwright/test';
import { ServicesPage } from '../pages/ServicesPage.spec.ts';

const serviceURL = 'https://greenitco.com/services';
const homeURL = 'https://greenitco.com/';

// Open the Services page before each test
test.describe('Services Page Tests', () => {
  let services: ServicesPage;

  test.beforeEach(async ({ page }) => {
    services = new ServicesPage(page);
    await services.open();
  });

  // TC_SERVICE_001 - Verify Service page URL
  test('TC_SERVICE_001 - Verify URL', async ({ page }) => {
    await expect(page).toHaveURL(serviceURL);
  });

  // TC_SERVICE_002 - Verify Service heading
  test('TC_SERVICE_002 - Verify heading', async () => {
    await expect(services.heading('Services')).toBeVisible();
  });

  // TC_SERVICE_003 - Verify header visibility
  test('TC_SERVICE_003 - Verify header', async () => {
    await expect(services.header()).toBeVisible();
  });

  // TC_SERVICE_004 - Verify footer visibility
  test('TC_SERVICE_004 - Verify footer', async () => {
    await expect(services.footer()).toBeVisible();
  });

  // TC_SERVICE_005 - Verify main navigation visibility
  test('TC_SERVICE_005 - Verify navigation menu', async () => {
    await expect(services.navigation()).toBeVisible();
  });

  // TC_SERVICE_006 - Verify logo visibility
  test('TC_SERVICE_006 - Verify logo visibility', async () => {
    await expect(services.logo()).toBeVisible();
  });

  // TC_SERVICE_007 - Verify logo navigation
  test('TC_SERVICE_007 - Verify logo navigation', async ({ page }) => {
    await services.clickLogo();

    await expect(page).toHaveURL(homeURL);
  });

  // TC_SERVICE_008 - Verify Home and Service links
  test('TC_SERVICE_008 - Verify navigation links', async () => {
    await expect(services.navigationLink('Home')).toBeVisible();
    await expect(services.navigationLink('History')).toBeVisible();
  });

  // TC_SERVICE_009 - Verify Home navigation
  test('TC_SERVICE_009 - Verify Home navigation', async ({ page }) => {
    await services.clickNavigationLink('Home');

    await expect(page).toHaveURL(homeURL);
  });

  // TC_SERVICES_010 - Verify Asset-auditing navigation
  test('TC_SERVICES_010', async () => {
    await services.clickServiceLink('Asset-auditing');

    await expect(services.heading('Asset-auditing')).toBeVisible();
  });

  // TC_SERVICES_011 - Verify Managed Services navigation
  test('TC_SERVICES_011', async () => {
    await services.clickServiceLink('Managed Services');

    await expect(services.heading('Managed Services')).toBeVisible();
  });
});