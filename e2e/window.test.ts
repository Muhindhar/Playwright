import { test, expect } from '@playwright/test';

test("window handles", async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");
    console.log("Current URL:", page.url());
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newWindow.waitForLoadState("domcontentloaded");
    console.log("New Window URL:", newWindow.url());
    const heading = await newWindow.locator("#sampleHeading").textContent();
    console.log("Heading : ",heading);
    console.log("New Window Title:", await newWindow.title());
    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
});