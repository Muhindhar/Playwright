import {test,expect} from '../fixtures/basefixture';
import logindata from '../test-data/logindata.json'

test.describe("Login test",async ()=>{
    test.beforeEach("url launch", async ({login})=>{
        await login.navigation();
    });

    test("valid login", async ({login})=>{
        await login.clicklogin();
        await login.logindet(logindata.validlogin.username,logindata.validlogin.password);
        expect (await login.checkloggedin());
    });

    test("Invalid login", async ({login,page})=>{
        await login.clicklogin();
        await login.logindet(logindata.invalidlogin.username,logindata.invalidlogin.password);

        page.on('dialog', async(dialog)=>{
            console.log(dialog.message());
            dialog.accept();
        })
    })
})