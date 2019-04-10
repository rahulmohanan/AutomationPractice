const assert = require('chai').assert

class loginValidation{

    get loginEmailId()              {return $('#email')}
    get loginPassword()             {return $('#passwd')}
    get loginButton()               {return $('#SubmitLogin')}
    get invalidCredError()          {return $('.alert li')}
    get forgotPasswordLink()        {return $('.lost_password a')}

    get strings() {
        return {
            invalidCredentials: "Authentication failed.",
            invalidUserName: "Invalid email address.",
            noUserName: "An email address required.",
            noPassword: "Password is required."
        }
    }

    loginUserValidation(user,password) {
        this.loginEmailId.setValue(user)
        this.loginPassword.setValue(password)
        this.loginButton.click()
    }
    
    verifyErrorMessageIsDisplayed(error) {
        this.invalidCredError.waitForExist()
        assert.include(this.invalidCredError.getText(), error)     
    }
}

module.exports = new loginValidation()  