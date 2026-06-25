import {test,Page,expect} from '@playwright/test';
test("Automation exercise site", async ({page})=>{
    await page.goto("https://automationexercise.com/");
    const signin = await page.getByRole('link', { name: ' Signup / Login' })
    signin.click();
    const email = await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    email.fill("demo09@gmail.com")
    const pass = await page.getByRole('textbox', { name: 'Password' })
    pass.fill("121");
    const login = await page.getByRole('button', { name: 'Login' })
    login.click();
    await expect(page.getByRole('heading', { name: 'AutomationExercise' }))

});