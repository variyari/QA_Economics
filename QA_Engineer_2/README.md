# The Economist - QA Engineer

# Your Challenge
We do not expect you to complete all of the following challenges within the given time limit. The aim of this assessment is to determine whether or not your approach is suitable - documentation is key. **We will be unable to process your application if you do not provide a readme**

## End-to-end
We need you to create an end-to-end test suite for https://jobs.economist.com/ using the following technologies:
 - NodeJS/JavaScript
 - Cucumber
 - Selenium-Webdriver
 - Chromedriver

## The Scenario
We have a jobs site (https://jobs.economist.com) for advertising various career opportunities at The Economist. We'd like you to write an automated test suite to ensure that some features have been developed properly.

### The Features
The following are a list of criteria we would like tested. It is your job to break these down further into cucumber scenarios and steps:
 - Jobs page renders correctly with the following components visible:
    - navigation bar
    - search fields
    - sector lists
    - jobs blog
    - featured jobs
    - footer
 - Both 'Sign in' and 'Create account' links go to their respective pages.
 - Each of the links in the navigation bar is functional and goes to the correct page.
 - Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button.
 - Searching for a job correctly displays relevant search results.
 - Ensuring all the links in the footer are functional

## Assessment Criteria
Your test suite will be assessed on the following criteria with scoring in order of importance:

1. Approach and style
2. Code organisation, commenting and documentation
3. Use of git

### Bonus Points
The following qualifies for extra bonus points in your application:

1. Sharing your GitHub repo with us early and working on this task iteratively
2. Add JS code linting
3. Adding reporting
3. Test one of the following additional features:
  - Creating an account
  - Signing in

## Running the tests
To get the tests running, ensure that you have `NodeJS`, `npm`, `Google Chrome` and `Java` installed. Then run the following commands to start the tests:
1. `npm install`
2. `npm run test`

The basic setup has been done for you, with the web browser restarting at the beginning of each test scenario.
