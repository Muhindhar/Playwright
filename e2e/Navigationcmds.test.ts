import {test} from '@playwright/test';

test("Navigation commands", async({page})=>{
    let first = await page.goto("https://www.demoblaze.com/index.html");
    await page.waitForTimeout(5000);
    let second = await page.goto("https://www.demoblaze.com/cart.html");
    await page.waitForTimeout(5000);
    page.goBack();
    await page.waitForTimeout(5000);
    page.goForward();

    page.reload();
});