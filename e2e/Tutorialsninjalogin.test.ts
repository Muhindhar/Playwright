import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
    await page.goto(process.env.BASE_URLT!);
    await page.fill('#input-email', process.env.UNAMET!);
    await page.fill('#input-password', process.env.PASST!);
    await page.click("input[value='Login']");
    await expect(page.locator('body')).toContainText('My Account');
});