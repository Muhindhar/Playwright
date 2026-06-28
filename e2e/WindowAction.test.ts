import {test,expect} from '@playwright/test';
test("window action handles", async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState();

    const pages = context.pages();
    console.log("Number of pages : ",pages.length);

    for(const p of pages){
        console.log("URL : ",p.url());
        console.log("TITLE : ",p.title());
    }
});


test("Iterate attributes", async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");
    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);
    await tab.waitForLoadState();
    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await window.waitForLoadState();
    for (const p of context.pages()) {
        console.log("URL:", p.url());

        if (p.url().includes("sample")) {
            const text = await p.locator("#sampleHeading").textContent();
            console.log(text);
        }
    }
});