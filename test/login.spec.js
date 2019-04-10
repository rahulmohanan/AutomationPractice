const loginPage = require('../pages/login.page')
const assert = require('chai').assert

suite("ALREADY REGISTERED? - Login page validation",function(){
    suiteSetup("Open Automation-Practice login page", function(){
        browser.url('/index.php?controller=authentication&back=my-account')
    })  
    
    test("Verify whether Error message is displayed when user enters invalid credentials in Login", function() {
        loginPage.loginUserValidation('assignment@gmail.com','testassignment')
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.invalidCredentials)
    })

    test("Verify whether Error message is displayed when user enters valid email id and no password", function() {
        loginPage.loginUserValidation('samplesoftwareautomation@gmail.com','')
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.noPassword)
    })

    test("Verify whether Error message is displayed when user enters no email id and valid password", function() {
        loginPage.loginUserValidation('','password')
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.noUserName)
    })

    test("Verify whether Error message is displayed when user enters no email id and no password", function() {
        loginPage.loginUserValidation('','')
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.noUserName)
    })

    test("Verify whether user is able to log-in with registered email id", function() {
        loginPage.loginUserValidation('samplesoftwareautomation@gmail.com','testing')
        assert.equal(browser.getTitle(),'My account - My Store')
    })

})