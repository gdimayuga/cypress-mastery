# Cypress Login Test Suite
This test automation sample project contains the **Swag Labs Demo Website** using **Cypress** framework for testing. It includes tests for the **Login** features with the flexibility to run them in **headless** and **headed** modes. 
**Valid Login**: Tests the successful login with valid credentials.

**Invalid Login**: Tests the login attempt with invalid credentials.

## Prerequisites
Before running the tests, make sure you have the following installed:
Node.js (Recommended: LTS version)

Cypress

# Setup Instructions
## Clone the repository:
git clone <repository_url>
cd <repository_folder>

## Install dependencies:
npm install

## Open Cypress:
npx cypress open

Test Suite Description
1. Valid Login Test
Test Case: Verifies that a user can log in successfully with valid credentials (standard_user and secret_sauce).
The test visits the Sauce Demo login page.
It types the username standard_user and password secret_sauce.
It clicks the login button.
Verifies that the logo contains the text "Swag Labs" and is visible.
Confirms that the URL includes inventory.html, indicating a successful login.
2. Invalid Login Test
Test Case: Verifies that an error message is displayed when the user tries to log in with invalid credentials.
The test visits the Sauce Demo login page.
It types the username standard_user and an incorrect password secret_saucse.
It clicks the login button.
Verifies that the error message container is visible, indicating a failed login attempt.

Running Tests
You can run the tests in both headed (interactive) and headless modes:

1. Headed Mode (Interactive)
To run tests interactively with the Cypress UI, run the following:
npx cypress open
This will launch the Cypress Test Runner, where you can select and run the tests.

2. Headless Mode (Non-Interactive)
To run the tests in headless mode (without opening the UI), use the following command:
npx cypress run  --spec 'cypress/e2e/Login.cy.js' --browser chrome
