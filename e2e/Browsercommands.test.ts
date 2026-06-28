import { test, expect } from '@playwright/test';
test("browser commands test", async ({ page, browser, context }) => {
    await page.goto("https://www.flipkart.com/");
    const title = await page.title();
    console.log("Title:", title);
    const url = page.url();
    console.log("URL:", url);
    const content = await page.content();
    console.log("Content Length:", content.length);
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

test.beforeEach(async ({ page }) => {
  await page.goto("https://leafground.com/");
  console.log('Navigation successfull');
});
test("Page title",async({page})=>{
    console.log(await page.title());
})
test("Page URL",async({page})=>
console.log(await page.url()));
test("Source content",async({page})=>{
    console.log((await page.content()).length);
})
test("Go bach test",async({page})=>{
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.goBack()
    console.log(await page.title())
});
test("Go forward test",async({page})=>{
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.goBack()
    await page.goForward();
    console.log(await page.title())
});
test("Fill test",async({page})=>{
    await page.locator("//input[@id='email']").fill("Tamil")

})
test("Clear test",async({page})=>{
    await page.locator("//input[@id='email']").fill("Tamil")
    await page.locator("//input[@id='email']").clear();
});
test("Inner text",async({page})=>{
    console.log(await page.locator("//div[@class='route-bar-breadcrumb']").innerText())
})
test("inner html",async({page})=>{
    console.log(
    await page.locator("//div[@class='route-bar-breadcrumb']").innerHTML()
);
})
test("Is Enabled",async({page})=>{
    console.log(await page.locator("//input[@id='email']").isEnabled())
})
test("Is visible",async({page})=>{
    console.log(await page.locator("//input[@id='email']").isVisible())
})
test("Bounding box",async({page})=>{
    console.log(await page.locator("//input[@id='email']").boundingBox())
})
test("Is Disabled", async ({ page }) => {
    console.log(await page.locator("//input[@id='email']").isDisabled());
});

test("Is Hidden", async ({ page }) => {
    console.log(await page.locator("//input[@id='email']").isHidden());
});

test("Is Editable", async ({ page }) => {
    console.log(await page.locator("//input[@id='email']").isEditable());
});

test("Get Attribute", async ({ page }) => {
    console.log(await page.locator("//input[@id='email']").getAttribute("placeholder"));
});
test("Evaluate", async ({ page }) => {
    const tag = await page.locator("//input[@id='email']")
        .evaluate(element => element.tagName);

    console.log(tag);
});

test("Evaluate All", async ({ page }) => {
    const tags = await page.locator("input")
        .evaluateAll(elements => elements.map(e => e.tagName));

    console.log(tags.length);
});
test("Get CSS color", async ({ page }) => {
    console.log(await page.locator("//input[@id='email']").evaluate(el => getComputedStyle(el).color));
});
test("CSS - Display", async ({ page }) => {
    const display = await page.locator("//input[@id='email']")
        .evaluate(element => getComputedStyle(element).display);

    console.log(display);
});
