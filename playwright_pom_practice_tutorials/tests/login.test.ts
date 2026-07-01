import {test, expect} from '../fixtures/basefixture';
import logindata from '../test-data/logindata.json';


test.describe("Login to the tutorials ninja",()=>{
    test.beforeEach("URL from envv", async({login})=>{
        await login.loginsite();
    });

    test("valid login", async({login})=>{
        await login.logindet(logindata.valid.email,logindata.valid.password);
        await expect(login.checklogged).toHaveText("My Account");
    })

    test("invalid login", async({login})=>{
        await login.logindet(logindata.invalid.email,logindata.invalid.password);
        await expect(login.errormsg).toHaveText("Warning: No match for E-Mail Address and/or Password.");
    });


})