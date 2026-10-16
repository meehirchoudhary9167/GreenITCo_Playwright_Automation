# GREENITCO Website Automation Testing

## Project Overview
This project focuses on automated testing of the GREENITCO website using Playwright with TypeScript. The purpose is to verify website functionality, navigation, page content, and form behavior.

**Website:** https://greenitco.com/

## Tools and Technologies
- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
GreenITCo_Manual_Testing/
├── tests/
│   ├── pages/
│   │   ├── DemoFormPage.spec.ts
│   │   ├── HistoryPage.spec.ts
│   │   ├── HomePage.spec.ts
│   │   ├── ProductsPage.spec.ts
│   │   ├── RequestPage.spec.ts
│   │   └── ServicesPage.spec.ts
│   └── test/
│       ├── DemoForm.spec.ts
│       ├── HistoryTest.spec.ts
│       ├── HomeTest.spec.ts
│       ├── ProductTest.spec.ts
│       ├── Request Quote.spec.ts
│       └── ServicesTest.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Test Coverage
The automation test suite covers the following areas:

- Homepage loading and verification
- Header, logo, and navigation links
- History page verification
- Products page verification
- Services page verification
- Request a Quote form
- Demo request form
- Page elements and user interactions

## Prerequisites
Install the following before running the tests:

- Node.js
- npm
- Git (optional, for version control)

## Installation

Clone the repository:

```bash
git clone https://github.com/meehirchoudhary9167/GreenITCo_Playwright_Automation.git
```

Navigate to the project folder:

```bash
cd GreenITCo_Playwright_Automation
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Repository
GitHub: https://github.com/meehirchoudhary9167/GreenITCo_Playwright_Automation

## Author
Meehir Choudhary

## Purpose
This project was created for learning and practicing web automation testing using Playwright and TypeScript.
