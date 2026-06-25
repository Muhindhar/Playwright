import { chromium,Page,test } from "@playwright/test"
test("Test login demo",async()=>{
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.demoblaze.com/index.html")
    await page.click("//a[@id='login2']")
    await page.fill("//input[@id='loginusername']","Muhindhar");
    await page.fill("//input[@id='loginpassword']","muhi122181");
    await page.click("//button[text()='Log in']");
    await page.waitForTimeout(5000);

    const page1 = await context.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html")
    await page.waitForTimeout(5000);

    const newcotext = await browser.newContext();
    const newpage = newcotext.newPage();
    await (await newpage).goto("https://www.demoblaze.com/cart.html")
    await page.waitForTimeout(5000);
});

