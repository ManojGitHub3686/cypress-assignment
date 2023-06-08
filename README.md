# cypress-assignment
Cypress assignment to verify https://www.ltimindtree.com/ web pages 
# About Project:
Testing a web page i.e.,  https://www.ltimindtree.com/  using **Cypress** tool and JavaScript as a language on Chrome browser

# How to install the project locally:

**1.** Download project from GitHub (.zip format)
**2.** Extract the folder on local machine
**3.** Open Visual Studio Code IDE -> Select Open folder -> Select the extracted folder i.e., cypressusingcucumber
**4.** Verify 'Package.json' -> Scripts section below line is added
   "cy-test": "npx cypress run -s .\\cypress\\e2e\\stepdef.feature -b chrome --env allure=true"
   
# How to run tests:
**1.** Open VSC terminal and type in below commands.

   **a.** npm rum cy-test -> It will run the tests in command prompt and shows the result
   **b.** npm run allure:report (Pre-requisite: Java 8+ needs to be install on local machine)
  ** c.** npx allure open -> Check the report
   
** 2.** If you have Cypress tool install then instead of step 1(a), run below command in terminal
    **a.** npx cypress open -> It will open Cypress tool
   ** b.** Select desired browser
    **c.** Select 'stepdef.feature' spec file -> It will run the test on selected browser
      
Note: We have in total 2 tests



