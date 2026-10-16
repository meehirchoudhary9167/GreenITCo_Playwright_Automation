import { test, expect } from "@playwright/test";
import { RequestQuotePage } from "../pages/RequestPage.spec.ts";

// Website URL
const quoteURL = "https://itassetmanagementsoftware.com/demo_request/";

test.describe("Request Quote Form", () => {
  let quote: RequestQuotePage;

  // Open the homepage before each test
  test.beforeEach(async ({ page }) => {
    quote = new RequestQuotePage(page);
    await quote.openHomePage();
  });

  test("Request Quote Form", async ({ page }) => {
    // Click the Request a Quote link
    await quote.clickRequestQuote();

    // Verify the quote form page URL
    await expect(page).toHaveURL(quoteURL);

    // Enter company and personal details
    await quote.enterCompanyName();
    await quote.enterFullName();
    await quote.enterEmail();

    // Open the country code dropdown and select India (+91)
    await quote.selectCountryCode();

    // Enter the phone number
    await quote.enterPhoneNumber();

    // Calculate and enter the CAPTCHA answer
    const answer = await quote.enterCaptchaAnswer();

    // Verify the CAPTCHA answer
    await expect(quote.captchaAnswer()).toHaveValue(answer);

    // Submit the quote request form
    await quote.submitForm();

    // Verify the success message
    await expect(quote.successMessage()).toBeVisible();
  });
});