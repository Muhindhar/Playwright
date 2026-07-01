import { Page, Locator, expect } from "@playwright/test";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../env/url.env') });

export class Loginpage{
        readonly page:Page;
        readonly signup:Locator;
        readonly email:Locator;
        readonly password:Locator;
        readonly login:Locator;
        readonly checklogin: Locator;
        readonly errorlogin: Locator;
        readonly validcheck:Locator;
        

        constructor(page:Page){
            this.page = page;
            this.signup= page.locator("//a[normalize-space()='Signup / Login']");
            this.email = page.locator("//input[@data-qa='login-email']");
            this.password = page.locator("//input[@placeholder='Password']");
            this.login = page.locator("//button[normalize-space()='Login']");
            this.checklogin = page.locator("//a[text()=' Logged in as ']");
            this.errorlogin=page.locator("//p[normalize-space()='Your email or password is incorrect!']");
            this.validcheck = page.locator("//img[@alt='Website for automation practice']");
        }

        async navigate(){
            await this.page.goto(process.env.baseurl!);
        }

        async loginfunc(email:string,password:string){
            await this.signup.click();
            await this.email.fill(email);
            await this.password.fill(password);
            await this.login.click();
        }
        async logincheck() {
            await expect(this.checklogin).toHaveText("Logged in as");
}
        async invalidlogin() {
            await expect(this.errorlogin).toHaveText("Your email or password is incorrect!");
}
         
}