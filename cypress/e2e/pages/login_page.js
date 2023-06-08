export class LoginPage{

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'


    enterUsername(user){

        cy.get(this.username_textbox).type(user);

    }

    enterPassword(pass){

        cy.get(this.password_textbox).type(pass);

    }

    clickLogin(){
        cy.get(this.login_button).click();

    }
}