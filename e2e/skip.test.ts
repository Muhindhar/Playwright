import { test, expect } from '@playwright/test';
import { skip } from 'node:test';

//test.describe("Describing @muhi ", () => {
   // test.describe.only("Second describe",() =>{
    test("Login test1", async ({ page }) => {
        //test.skip(true,"simple")
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
        await page.fill('#input-email', "muhindhar271@gmail.com");
        await page.fill('#input-password', "12345678");
        await page.click("input[value='Login']");
        await expect.soft(page.locator('body')).toContainText('My Account');
        await expect(page.locator('body')).toContainText('My Account');
    });

    test("Login test2 @sanity",{tag:"@smoke"}, async ({ page }) => {
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
        await page.fill('#input-email', "muhindhar271@gmail.com");
        await page.fill('#input-password', "12345678");
        await page.click("input[value='Login']");
        await expect.soft(page.locator('body')).toContainText('My Accoun');
    });

    test("Login test3 @smoke", async ({ page }) => {
    //test.skip(true, "Testing whether the test is skipping or not");
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await expect(page.locator('body')).toContainText('My Account');
});