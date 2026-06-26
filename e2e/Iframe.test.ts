import { test,expect } from '@playwright/test';

test("frame test", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("Number of frames:", allFrames.length);
    const frame = page.frameLocator("iframe[name='firstFr']");

    await frame.locator("input[name='fname']").fill("Muhindhar");
    await frame.locator("input[name='lname']").fill("sv");
    expect(frame.locator("p")).toContainText("Muhindhar")
});

test("innerframe",async({page})=>{
        await page.goto("https://letcode.in/frame")

        const frame = page.frameLocator("iframe[name='firstFr']");
  const innerframe = frame.frameLocator("iframe[src='/innerframe']")
  await innerframe.locator("input[name='email']").fill("muhindhar271@gmail.com")

})