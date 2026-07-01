import { Page, Locator, expect } from "@playwright/test";
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path:path.resolve(__dirname,'../env/url.env')});


export class loginpage{
    readonly page:Page;
    readonly myacc : Locator;
    readonly login:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly loginbtn:Locator;
    readonly errormsg : Locator;
    readonly checklogged : Locator;
    constructor(page:Page){
        this.page = page;
        this.myacc = page.locator("//span[normalize-space()='My Account']");
        this.login = page.locator("//a[normalize-space()='Login']");
        this.email = page.locator("//input[@id='input-email']");
        this.password = page.locator("//input[@id='input-password']");
        this.loginbtn = page.locator("//input[@value='Login']");
        this.errormsg = page.locator("//div[@class='alert alert-danger alert-dismissible']");
        this.checklogged = page.locator("//h2[normalize-space()='My Account']");
    }

    async loginsite(){
        await this.page.goto(process.env.base_url!);
    }

    async logindet(username:string,password:string){
        await this.myacc.click();
        await this.login.click();
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }
    async checklogin(){
        return await this.checklogged;
    }
    async notloggedin(){
        return await this.errormsg.textContent();
    }
}