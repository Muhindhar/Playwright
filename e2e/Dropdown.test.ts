import {test,expect} from '@playwright/test';

test("dropdown",async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo",{
        //index:3
        //label:"Monday"
        value:"Saturday"
    })
   const text = await page.locator("#select-demo").inputValue();
    console.log(text);
});

test("Multi select", async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/")
    await page.selectOption("#multi-select",[
        {label:"Florida"},{value:"Ohio"},{index:7}
    ])
    const text = await page.locator('#multi-select').inputValue();
    console.log(text);
})