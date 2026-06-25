import { test, expect } from '@playwright/test';

test("Page object commands", async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    const email = page.locator("//input[@id='input-email']")
    await email.fill("muhindhar271@gmail.com");
    const pass = page.locator("//input[@id='input-password']");
    await pass.fill("12345678");
    const login = page.locator("//input[@value='Login']");
    await login.click();
    await expect(page.locator("//h2[normalize-space()='My Account']")).toBeVisible();
});
