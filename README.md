# PLAYWRIGHT vs. SELENIUM COMPARISON

This is a simple project utilising 2 UI test automation tools - Playwright and Selenium 4.

The purpose of the project is to compare both tools in implementation and execution of exactly the same tests. Tests are using BE response mocking mechanism.

As SUT, project utilises my Angular UI application called [Spec Lead Notes UI](https://github.com/devpuppet/spec-lead-notes-ui) deployed on Firebase which uses [Spec Lead Notes BE](https://github.com/devpuppet/spec-lead-notes-be) deployed on Render.

## Project Structure

The project is organized into following packages:

- [common](common): Common utility files.
- [mocks](mocks): Objects used in mocking the responses in teh tests.
- [model](model): Model classes.
- [playwright](playwright): Page components, BE response mocking mechanism Page Objects and test fixture implemented using Playwright.
- [selenium](selenium): Page components, BE response mocking mechanism and Page Objects implemented using Selenium 4.
- [tests](tests): Automation tests implemented using Playwright and Selenium. For both tools, tests logic is exactly the same.
- [Jenkinsfile](Jenkinsfile): Jenkins configuration used when tests were run on local instance of Jenkins.

## Installation

1. Run `npm install` to install the dependencies.
2. Run `npm run pw:install` to install Playwright browser executables.

## Usage

**Important note** - Backend of SUT is hosted on [Render](https://render.com/). Hosting is free and is has the disadvantage that when deployed service is not used for a specified amount of time, it is turned off and turned on only when pinged again.
For below test execution, it means that first test runs will fail but they will trigger BE service to come up. Subsequent test runs should be successful.

1. Run `npm run test:selenium` to execute Selenium tests.
2. Open Selenium test execution report - [report.html](selenium-report/report.html).
2. Run `npm run test:pw:headed` to execute Playwright tests in headed mode.
3. Run `npm run pw:report` to see test execution report generated for Playwright tests.

## Example Useful Project Commands
-  `pw:install`: Install Playwright browser executable. Might be needed after Playwright version update.
- `compile:watch`: runs Typescript compiler in watch mode meaning you don't have to manually run `tsc` everytime you change a file.
- `test:pw:ui`: Run Playwright in UI mode.