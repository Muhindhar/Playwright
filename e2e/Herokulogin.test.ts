import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto(process.env.BASE_URLQ!);
    await page.fill('#username', process.env.UNAMEQ!);
    await page.fill('#password', process.env.PASSQ!);
    await page.click('.fa.fa-2x.fa-sign-in');
    await expect(page.locator('.icon-2x.icon-signout')).toBeVisible();
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});