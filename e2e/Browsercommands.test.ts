import { test, expect } from '@playwright/test';
test("browser commands test", async ({ page, browser, context }) => {
    await page.goto("https://www.flipkart.com/");
    const title = await page.title();
    console.log("Title:", title);
    const url = page.url();
    console.log("URL:", url);
    const content = await page.content();
    console.log("Content Length:", content.length);
    console.log("Viewport:", page.viewportSize());
    console.log("Browser:", browser.browserType().name());
    console.log("Pages:", context.pages());
    await page.reload();
    await page.goBack();
    await page.goForward();
    await page.setViewportSize({
        width: 1280,
        height: 720
    });
    console.log("Is Closed:", page.isClosed());
    await page.close();

});