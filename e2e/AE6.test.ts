import {test,expect} from '@playwright/test';
test("Automation exercise 5",async ({page})=> {
    await page.goto("http://automationexercise.com")
    const contactus = await page.getByRole('link', { name: ' Contact us' });
    contactus.click()
    const check = await page.getByRole('heading', { name: 'Contact Us' }).isVisible()
    const name = await page.getByRole('textbox', { name: 'Name' });
    name.fill("Muhindhar");
    const email = await page.getByRole('textbox', { name: 'Email', exact: true });
    email.fill("demo09@gmail.com");
    const subj = await page.getByRole('textbox', { name: 'Subject' });
    subj.fill("Salem");
    const msg = await page.getByRole('textbox', { name: 'Your Message Here' });
    msg.fill("Demo");
    const upload = await page.getByRole('button', { name: 'Choose File' });
    upload.setInputFiles("C:/Users/Muhindhar S V/Downloads/2.Control Flow Statements.pdf");
    const sub = await page.getByRole('button', { name: 'Submit' });
    sub.click();
    page.on('dialog',async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.locator("//div[@class='status alert alert-success']").isVisible();
});