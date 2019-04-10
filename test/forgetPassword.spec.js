const forgetPasswordPage = require('../pages/forgetPassword.page')
const loginPage = require('../pages/login.page')
const assert = require('chai').assert

suite("FORGOT YOUR PASSWORD? page validation",function(){
    suiteSetup("Open FORGOT YOUR PASSWORD? page", function(){
        browser.url('/index.php?controller=authentication&back=my-account')
        loginPage.forgotPasswordLink.click()
        assert.include(browser.getUrl(), '/index.php?controller=password')
    })
    
    test("Verify whether Error message is displayed when user enters a non-registered email-id in the email field", function() {
        forgetPasswordPage.emailIdValidation('assignment@gmail.com')
        forgetPasswordPage.verifyAlertMessageIsDisplayed(forgetPasswordPage.strings.nonRegistredEmail)
    })

    test("Verify whether Error message is displayed when user enters an invalid email-id in the email field", function() {
        forgetPasswordPage.emailIdValidation('testassignment')
        forgetPasswordPage.verifyAlertMessageIsDisplayed(forgetPasswordPage.strings.invalidEmail)
    })

    test("Verify whether Error message is displayed when user enters no email-id in the email field", function() {
        forgetPasswordPage.emailIdValidation(' ')
        forgetPasswordPage.verifyAlertMessageIsDisplayed(forgetPasswordPage.strings.noEmail)
    })

    test("Verify whether confirmation message is displayed when user enters a valid resigistered email-id in the email field", function() {
        forgetPasswordPage.emailIdValidation('samplesoftwareautomation@gmail.com')
        forgetPasswordPage.verifyAlertSuccessMessage(forgetPasswordPage.strings.validRegisteredEmail)
    })
    

})