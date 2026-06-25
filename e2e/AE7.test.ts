import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto("http://automationexercise.com")
})
test("Automation exercise 7",async ({page}) => {
    const testcase = page.getByRole('link', { name: ' Test Cases' });
    await testcase.click();
    const url  = await page.url;
    console.log(url)
    const exp = "https://automationexercise.com/test_cases";
    await expect(page).toHaveURL(exp);
}); 