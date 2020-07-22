----------------------------------------------------------------------------------------------------------------------------------
		AUTOMATION TESTING USING CUCUMBER FOR WEB APPLICATIONS
----------------------------------------------------------------------------------------------------------------------------

End to End Testing with CucumberJS and Selenium

INSTALL 
-------------------------------------------------------------------------------
NODE AND NPM version should be greater than 5

To upgrade node and NPM. Follow below steps:

  sudo yum install -y gcc-c++ make
  curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -
  sudo yum remove -y nodejs npm (Remove current node and npm)
  sudo yum install -y nodejs
 
SELENIUM CUCUMBER CHAI 
-------------------------------------------------------------------------------

npm install --save-dev selenium-webdriver cucumber chai chai-as-promised

npm install --save-dev cucumber-pretty

npm install chromedriver --detect_chromedriver_version

npm install --save-dev cucumber-html-reporter

----------------------------------------------------------------------------------

Please note that Chromedriver and Google chrome version should be compatible. Please refer https://chromedriver.chromium.org/downloads

Two ways to upgrade Chromedriver version:

    Check your google chrome version and give same version in packages.json file and run npm install (If Google chrome version is 78, give "chromedriver": "^78.0", in pacakge.json)
    Run below command npm install chromedriver --chromedriver_version=LATEST OR npm install chromedriver --chromedriver_version="78.0"

To install google Chrome on Linux

    wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
    sudo yum install google-chrome-stable_current_x86_64.rpm

Run npm install (package.json is updated with cucumber, selenium and other dependencies)

Please see the below file structure for using Cucumber:

1. Cucumber configuration file - features/configuration/cucumber.config.js - set base URL inside Before function
2. Feature files - Features are files with a .feature extension which has multiple scenarios. [features/scenarios]
3. Step definitions - step definitions are normal JS files with all the feature testing logic inside [features/step-definitions]
4. page-objects - page objects are global objects accessible in your feature files for using common functions. [features/page-objects

Command to execute CucumbeJS :
-----------------------------------

Execute whole features together - npm run test  or npx cucumber-js -f node_modules/cucumber-pretty features/

To generate HTML report
------------------------
1. npx cucumber-js -f node_modules/cucumber-pretty features/ -f json:test/report/cucumber_report.json
2. node index.js

Execute Particular feature - npx cucumber-js -f node_modules/cucumber-pretty features/scenarios/test.feature
Execute single scenario by giving line number- npx cucumber-js -f node_modules/cucumber-pretty features/scenarios/test.feature:10


----------------------------------------------------------------------------------------------------------------------------------
		AUTOMATION TESTING USING APPIUM AND CUCUMBER FOR NATIVE APPS, HYBRID APPS
----------------------------------------------------------------------------------------------------------------------------

npm install appium

npm install appium-doctor -g

npm install --save-dev selenium-webdriver cucumber chai chai-as-promised cucumber-pretty

npm install appium appium-doctor --chromedriver-skip-install --save-dev -g

appium --chromedriver-executable D:\chromedriver_win32

1. Install Android Studio
2. Create a AVD from Android Studio
3. Set Chromedriver path
4. Mention the AVD name in configuration file


Command to execute APPIUM AND CucumbeJS :
---------------------------------------------------------------------
npm run appium-doctor - To check all dependancies are correctly set to run appium successfully

npm run appium

npm run test [npx cucumber-js -f node_modules/cucumber-pretty features/]

Configuration file for APPIUM
---------------------------------------

See file cucumber-appium-config.txt. create a JS file with contents on this file.

