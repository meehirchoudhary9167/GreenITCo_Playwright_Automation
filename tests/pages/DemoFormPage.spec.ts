import { Page } from '@playwright/test';

export class DemoFormPage {
  constructor(private page: Page) {}

  // Open the demo form
  async open() {
    await this.page.goto(
      'https://itassetmanagementsoftware.com/demo_request/'
    );
  }

  // Fill in company and personal details
  async enterCompanyName() {
    await this.page.locator('#company_name').fill('ABC Company');
  }

  async enterFullName() {
    await this.page.locator('#full_name').fill('Meehir Choudhary');
  }

  async enterEmail() {
    await this.page
      .locator('#email')
      .fill('mihirkumar.s.choudhary@slrtce.in');
  }

  // Select India (+91)
  async selectCountryCode() {
    await this.page.locator('.iti__selected-flag').click();
    await this.page.locator('#iti-0__item-in').click();
  }

  // Enter the phone number
  async enterPhoneNumber() {
    await this.page.locator('input[type="tel"]').fill('9876543210');
  }

  // Calculate and enter the CAPTCHA answer
  async enterCaptchaAnswer() {
    const num1 = Number(
      await this.page.locator('#captcha_num1').innerText()
    );

    const num2 = Number(
      await this.page.locator('#captcha_num2').innerText()
    );

    const answer = num1 + num2;

    await this.page.locator('#captcha_answer').fill(String(answer));

    return String(answer);
  }

  // Get the CAPTCHA answer field
  captchaAnswer() {
    return this.page.locator('#captcha_answer');
  }

  // Submit the demo request form
  async submitForm() {
    await this.page.locator('#submit').click();
  }

  // Get the success message
  successMessage() {
    return this.page.getByText('Form submitted successfully.', {
      exact: true,
    });
  }
}