import { test, expect } from '@playwright/test';

test('Login demoblaze', async ({ page }) => {
    await page.goto(process.env.BASE_URLD!);
    await page.click('#login2');
    await page.fill('#loginusername', process.env.UNAMED!);
    await page.fill('#loginpassword', process.env.PASSD!);
    await page.click("//button[text()='Log in']");
});