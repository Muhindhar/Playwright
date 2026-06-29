import {test,expect} from '@playwright/test';

const login = [
        {email:"muhindhar271@gmail.com", pass:"12345678"},
];
test("Timeout types", async ({page})=>{
    page.setDefaultNavigationTimeout(60000), 
    page.setDefaultNavigationTimeout(50000),
    page.setDefaultTimeout(10000),

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    const email = page.locator("//input[@id='input-email']",)
    await email.fill(login[0].email,{timeout:30000})
    const pass = page.locator("//input[@id='input-password']");
    await pass.fill(login[0].pass);
    await page.locator("//input[@value='Login']").click();
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account")
});