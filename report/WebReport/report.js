$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/BookStoreLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Book Store login",
  "description": "",
  "id": "book-store-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BookStoreLoginPage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "book store login",
  "description": "",
  "id": "book-store-login;book-store-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enters bookstore page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\"\u003cusername\u003e\" and \"\u003cpassword\u003e\" are given",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "submit button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "loged in to the account",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "book-store-login;book-store-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "book-store-login;book-store-login;;1"
    },
    {
      "cells": [
        "divyas94",
        "Password123!"
      ],
      "line": 11,
      "id": "book-store-login;book-store-login;;2"
    },
    {
      "cells": [
        "divyas94",
        "password"
      ],
      "line": 12,
      "id": "book-store-login;book-store-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "book store login",
  "description": "",
  "id": "book-store-login;book-store-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BookStoreLoginPage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user enters bookstore page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\"divyas94\" and \"Password123!\" are given",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "submit button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "loged in to the account",
  "keyword": "Then "
});
formatter.match({
  "location": "BookStoreLoginDetails.user_enters_bookstore_page()"
});
formatter.result({
  "duration": 9125168600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divyas94",
      "offset": 1
    },
    {
      "val": "Password123!",
      "offset": 16
    }
  ],
  "location": "BookStoreLoginDetails.and_are_given(String,String,DataTable)"
});
formatter.result({
  "duration": 286178400,
  "status": "passed"
});
formatter.match({
  "location": "BookStoreLoginDetails.submit_button()"
});
formatter.result({
  "duration": 1082973300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton id\u003d\"login\" type\u003d\"button\" class\u003d\"btn btn-primary\"\u003e...\u003c/button\u003e is not clickable at point (586, 573). Other element would receive the click: \u003ciframe frameborder\u003d\"0\" src\u003d\"https://407474d49bc37eeef7851055aa641788.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html\" id\u003d\"google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0\" title\u003d\"3rd party ad content\" name\u003d\"\" scrolling\u003d\"no\" marginwidth\u003d\"0\" marginheight\u003d\"0\" width\u003d\"728\" height\u003d\"90\" data-is-safeframe\u003d\"true\" sandbox\u003d\"allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation\" role\u003d\"region\" aria-label\u003d\"Advertisement\" tabindex\u003d\"0\" data-google-container-id\u003d\"1\" style\u003d\"border: 0px; vertical-align: bottom;\" data-load-complete\u003d\"true\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027HANUMAN\u0027, ip: \u0027192.168.1.205\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\ishan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50785}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0ceda3a31a3aa64375423184940db5c2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepdefinition.BookStoreLoginDetails.submit_button(BookStoreLoginDetails.java:43)\r\n\tat ✽.And submit button(featurefiles/BookStoreLogin.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookStoreLoginDetails.loged_in_to_the_account(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "book store login",
  "description": "",
  "id": "book-store-login;book-store-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BookStoreLoginPage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user enters bookstore page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\"divyas94\" and \"password\" are given",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "submit button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "loged in to the account",
  "keyword": "Then "
});
formatter.match({
  "location": "BookStoreLoginDetails.user_enters_bookstore_page()"
});
formatter.result({
  "duration": 7600049800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divyas94",
      "offset": 1
    },
    {
      "val": "password",
      "offset": 16
    }
  ],
  "location": "BookStoreLoginDetails.and_are_given(String,String,DataTable)"
});
formatter.result({
  "duration": 317999500,
  "status": "passed"
});
formatter.match({
  "location": "BookStoreLoginDetails.submit_button()"
});
formatter.result({
  "duration": 83770000,
  "status": "passed"
});
formatter.match({
  "location": "BookStoreLoginDetails.loged_in_to_the_account(DataTable)"
});
formatter.result({
  "duration": 372400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepdefinition.BookStoreLoginDetails.loged_in_to_the_account(DataTable) in file:/C:/Users/ishan/eclipse-workspace/cucumberpractice/target/test-classes/\u0027 with pattern [^loged in to the account$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then loged in to the account\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});