import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Muhindhar');

  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('muhi122181');
  await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();

  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  //await expect(page.getByRole('row', { name: 'Samsung galaxy s6 360 Delete' })).toBeVisible();
  await page.isVisible("//h2[text()='Products']");
  await page.getByRole('button', { name: 'Place Order' }).click();

  //await expect(page.getByRole('dialog', { name: 'Place order' })).toBeVisible();
  await page.getByRole('textbox',{name:'Name'}).fill("'Muhindhar")

  await page.fill("//input[@id='name']","Muhindhar");
  await page.fill("//input[@id='country']","India");
  await page.fill("//input[@id='city']","Salem");
  await page.fill("//input[@id='card']","123456789");
  await page.fill("//input[@id='month']","01");
  await page.fill("//input[@id='year']","2021");
  await page.click("//button[text()='Purchase']");
});