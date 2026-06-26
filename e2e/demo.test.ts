import { test, expect } from '@playwright/test';

test("form test",async({ page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{
        waitUntil:'networkidle'
    });
    const tx = await page.locator("//input[@id='user-message']").getAttribute("placeholder");
    console.log(tx);
    const txt = page.locator("//input[@id='user-message']");
    console.log(await txt.isVisible());
    const enter = page.getByPlaceholder("Please enter your Message");
    await enter.fill("Muhi");
    
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    const value = await enter.inputValue();
    console.log(value);
    expect(value).toBe("Muhi");
    // const check = await page.locator("//p[@id='message']").textContent();
    // expect(check).toBe("Muhi");
});

test("Addition", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{
        waitUntil:'networkidle'
    });
    
    const first =  page.locator("#sum1");
    await first.pressSequentially('10',{delay:100});
    await first.fill("10");
    const n1 = Number(await first.inputValue());
    console.log(n1);
    const second = page.locator("#sum2");
    await second.fill("20");
    const n2 = Number(await second.inputValue());
    console.log(n2);
    const res = (n1+n2).toString();
    console.log(res);
    await page.locator("//button[normalize-space()='Get Sum']").click();
    const actual = (await page.locator("#addmessage").textContent());
    expect(actual).toBe(res);
});
