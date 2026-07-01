import { Page, Locator, expect } from "@playwright/test";
import path from 'path'
import logindata from '../test-data/logindata.json'
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../env/url.env') });

export class Loginpage{
    readonly page:Page;
    readonly login : Locator;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginbtn : Locator;
    readonly checklogin : Locator;

    constructor(page:Page){
        this.page = page
        this.login = page.getByRole('link', { name: 'Log in' })
        this.username = page.locator("//input[@id='loginusername']")
        this.password = page.locator("//input[@id='loginpassword']")
        this.loginbtn = page.locator("//button[text()='Log in']")
        this.checklogin = page.locator("//a[@id='nameofuser']")
    }

    async navigation(){
        await this.page.goto(process.env.base_url!);
    }

    async clicklogin(){
        await this.login.click();
    }
    async logindet(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await expect(this.loginbtn).toBeVisible();
        await this.loginbtn.click();
    }

    async checkloggedin(){
        return await this.checklogin.isVisible();
    }
    

}