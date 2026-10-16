import { test, expect } from '@playwright/test';
import { DemoFormPage } from '../pages/DemoFormPage.spec.ts';

// Demo form URL
const homeURL = 'https://itassetmanagementsoftware.com/demo_request/';

// Open the demo form before each test
test.describe('Demo Form Tests', () => {
  let demoForm: DemoFormPage;

  test.beforeEach(async ({ page }) => {
    demoForm = new DemoFormPage(page);
    await demoForm.open();
  });

  test('Demo Form', async ({ page }) => {
    // Verify the demo form URL
    await expect(page).toHaveURL(homeURL);

    // Fill in company and personal details
    await demoForm.enterCompanyName();
    await demoForm.enterFullName();
    await demoForm.enterEmail();

    // Select India (+91)
    await demoForm.selectCountryCode();

    // Enter the phone number
    await demoForm.enterPhoneNumber();

    // Calculate and enter the CAPTCHA answer
    const answer = await demoForm.enterCaptchaAnswer();

    // Verify the CAPTCHA answer
    await expect(demoForm.captchaAnswer()).toHaveValue(answer);

    // Submit the demo request form
    await demoForm.submitForm();

    // Verify the success message
    await expect(demoForm.successMessage()).toBeVisible();
  });
});