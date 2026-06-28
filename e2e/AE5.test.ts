import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Testcase 5 - Email already exists",async({page})=>{
   
    
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@placeholder='Name']","Muhindhar")
    await page.fill("//input[@data-qa='signup-email']","demo09@gmail.com1000")

    await page.click("//button[normalize-space()='Signup']")

    await expect(page.locator("//p[normalize-space()='Email Address already exist!']")).toContainText("Email Address already exist!")

});