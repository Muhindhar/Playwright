import {test,expect} from '@playwright/test';
test("browser commands test",async ({page})=>{
    await page.goto("https://www.flipkart.com/")
    let title = await page.title();
    console.log(title);

    let url = await page.url()
    console.log(url);

    let con = await page.content();
    console.log(con);

    await page.close();
    
});

