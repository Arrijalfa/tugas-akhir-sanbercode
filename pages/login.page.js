class LoginPage {
    get inputEmail() { return $('#email'); }
    get inputPassword() { return $('#password'); }
    get btnLogin() { return $('[type="submit"]'); }

    // Function to open the login page
    async open() {
        await browser.url('https://kasirdemo.vercel.app/login');
    }

    // Function to perform login
    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage(); 