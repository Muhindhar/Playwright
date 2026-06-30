import {test,expect} from '@playwright/test';
import logindata from "../test-data/logindata.json";

interface logindata{

    url : string,
    testname : string,
    username : string,
    password : string,
    exp : "Success" | "Failure",
    expmsg : string
}

// interface url{
//     url:string
// }

const users = logindata as logindata[];
//const url  = urldata as logindata[];

for (const data of users){
    test(`${data.testname}- ${data.username || "Blank username"}`,async ({page}) =>{
        await page.goto(data.url);
        await page.click("#login2");
        await page.fill("#loginusername", data.username);
        await page.fill("#loginpassword",data.password);
        
        if(data.exp==="Failure"){
            page.once("dialog",async dialog =>{
                expect(dialog.message()).toBe(data.expmsg);
                await dialog.accept();
            })
        }

        await page.click("button[onclick='logIn()']");
        if(data.expmsg=="Success"){
            await page.waitForTimeout(2000);
            await expect((page.locator("#nameofuser"))).toBeVisible({timeout:10000});
            await expect((page.locator("#nameofuser"))).toContainText(`Welcome ${data.username}`);
        }
    });

}