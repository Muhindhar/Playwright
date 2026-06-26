import {test,expect} from '@playwright/test';
test("Alert handle",async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{
        waitUntil:'networkidle'
    });
    await page.getByRole('paragraph').filter({ hasText: 'JavaScript AlertsClick Me' }).getByRole('button');

    page.on("dialog",async dialog =>{
        console.log(dialog.message());
        //dialog.accept();
        dialog.dismiss();
    })
})

test("Confirmation alert",async ({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{
        waitUntil:'networkidle'
    });
    await page.locator("//p[@class='text-gray-900 text-size-16 mt-10 text-black font-bold']//button[@type='button'][normalize-space()='Click Me']");
    page.on('dialog',async dialog =>{
        console.log(dialog.message());
        dialog.accept();
    })
     await page.locator("//button[normalize-space()='Click Me']").nth(1).click();

    const text = await page.locator("//p[@id='confirm-demo']").innerText();
    console.log(text);
})

// test("Prompt alert", async ({'page'}) =>{
//     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{
//         waitUntil:'networkidle'
//     });
    

// })