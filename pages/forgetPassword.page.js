const assert = require('chai').assert

class forgetPasswordValidation{

    get recoveryEmailId()          {return $('#email')}
    get alertMessage()             {return $('.alert li')}
    get alertSuccessMessage()      {return $('.alert')}
    get submitButton()             {return $('.submit button')}
    
    get strings() {
        return {
            nonRegistredEmail: "There is no account registered for this email address.",
            invalidEmail: "Invalid email address.",
            noEmail: "Invalid email address.",
            validRegisteredEmail: "A confirmation email has been sent to your address: samplesoftwareautomation@gmail.com"
        }
    }
    emailIdValidation(user) {
        this.recoveryEmailId.setValue(user)
        this.submitButton.click()
    }
    verifyAlertMessageIsDisplayed(error) {
        this.alertMessage.waitForExist()
        assert.include(this.alertMessage.getText(), error)     
    }
    verifyAlertSuccessMessage(message){
        this.alertSuccessMessage.waitForExist()
        assert.include(this.alertSuccessMessage.getText(),message)
    }

 



}



module.exports = new forgetPasswordValidation()  