Feature: Jobs page

Scenario: Home Page renders
    Given I go to the jobs page
    Then I should see the navigation bar
    Then I should see the location search
    Then I should see the keyword search
    Then I should see the job sector section
    Then I should see the jobs blog
    Then I should see the footer


    Scenario: Working of 'Create Account' Link
    Given I go to the jobs page
    Then I clicks on Register
    Then title of page should be "Register | Jobs.Economist.com"

  Scenario: Working of 'Sign In' Link
    Given I go to the jobs page
    Then I clicks on Sign In
    Then title of page should be "Logon | Jobs.Economist.com"

  Scenario: Clicking On any sector renders correct job
    Given I go to the jobs page
    Then I clicks on Government Sector
    Then jobs displayed should be
    |CEO of the National Council for Curriculum and Assessment (NCCA)|
    | Head of Communication and Spokesperson|
    |EUSR Economic Adviser|
    |Regulatory Economist|
    |Chair|
    Then I clicks on Job Listing
    Then I should see the Apply

    

  
    

  