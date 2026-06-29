import {test,expect} from '@playwright/test';

test.beforeEach("Hooks", async ({page})=>{
    await page.goto("https://demoqa.com/buttons");
})
test("Double click Mouse actions ", async ({page})=>{
    
    const dblclk = page.locator("//button[@id='doubleClickBtn']");
    dblclk.click({clickCount:2});
    await expect(page.locator("//p[@id='doubleClickMessage']")).toHaveText("You have done a double click");
})

test("Right click mouse action", async ({page})=>{
    const rightclk = page.getByRole('button', { name: 'Right Click Me' });
    rightclk.click({button:"right"})
    await expect(page.locator("//p[@id='rightClickMessage']")).toHaveText("You have done a right click");
})

test("single click", async ({page})=>{
    const btn = page.getByRole('button', { name: 'Click Me', exact: true });
    btn.click();
    await expect(page.getByText('You have done a dynamic click')).toHaveText("You have done a dynamic click")
});



test("radio button check", async ({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    const yesbtn =  page.locator("//input[@id='yesRadio']");
    yesbtn.click({button:"left"});
    await expect(page.locator("//input[@id='yesRadio']")).toBeChecked();
    await expect(page.locator("//p[@class='mt-3']")).toHaveText("You have selected Yes");
});

test("Check box", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const box = await page.getByRole('checkbox').first();
    box.check();
    const check =  await box.isChecked();
    console.log(check);
    await expect(box).toBeChecked();
    console.log(check);
});

test("Upload file", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download");
    const upload = page.getByRole('button', { name: 'Choose File' });
    upload.setInputFiles("C:/Users/Muhindhar S V/Downloads/2592d7a2-c07a-4be4-8a04-76ccb7a7eaea.tmp");
    const res= await expect(page.locator("//p[@id='uploadedFilePath']")).toHaveText("C:\\fakepath\\2592d7a2-c07a-4be4-8a04-76ccb7a7eaea.tmp");
    console.log(res);
});

test("download file", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download");
    const downloadprom = page.waitForEvent('download');
    const downbtn = await page.locator("//a[@id='downloadButton']")
    downbtn.click({button:"left"});
    const download = await downloadprom;
    console.log(await download.suggestedFilename());
})


test("Downloads method 2", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download");
    const prom =  page.waitForEvent("download");
    await page.locator("//a[@id='downloadButton']").click();
    const check = prom;
    //(await check).saveAs('downloads/downloadmethod1.pdf');
})


test("Keyboard action", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/key_presses");
    const txtbox = page.locator("#target");
    await txtbox.focus();
    await txtbox.press("Enter");
    //await expect(page.locator("#result")).toHaveText("You entered: ENTER");
});

test("drop", async ({page})=>{
    await page.goto("https://demoqa.com/droppable");
    const source = page.locator("#draggable").first();
    const target = page.locator("#droppable").first();

    await source.dragTo(target);
    await expect(target).toHaveText("Drop Here");
})

test("Valid Login @Smoke", async ({ page }, testInfo) => {
        console.log(page.url());
        console.log(await page.title());
        console.log("Test Name :", testInfo.title);
        const login_btn = page.locator("#login2");
        await login_btn.click();
        await expect(page.locator("#logInModal")).toBeVisible();
        await page.locator("#loginusername").click();
        await page.keyboard.type("admin");
        await page.keyboard.press("Tab");
        await page.keyboard.type("admin");
        await page.locator("//button[text()='Log in']").focus();
        await page.keyboard.press("Enter");
        await expect(page.locator("#nameofuser")).toContainText("Welcome");
        await expect.soft(page.getByRole("link", {name: "Log out"})).toHaveText("Log out");
        await expect(page.getByRole("link", {name: "Log out"})).toBeVisible();
    });
    
test.afterEach("Page closing", async({page})=>{
    page.close();
});

