import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('muhindhar271@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#content')).toContainText('My Account');
  await expect(page.getByRole('heading', { name: 'My Orders' })).toBeVisible();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - heading "My Account" [level=2]
    - list:
      - listitem:
        - link "Edit your account information":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
      - listitem:
        - link "Change your password":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/password
      - listitem:
        - link "Modify your address book entries":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/address
      - listitem:
        - link "Modify your wish list":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
    - heading "My Orders" [level=2]
    - list:
      - listitem:
        - link "View your order history":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/order
      - listitem:
        - link "Downloads":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/download
      - listitem:
        - link "Your Reward Points":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
      - listitem:
        - link "View your return requests":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/return
      - listitem:
        - link "Your Transactions":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
      - listitem:
        - link "Recurring payments":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
    - heading "My Affiliate Account" [level=2]
    - list:
      - listitem:
        - link "Register for an affiliate account":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/affiliate/add
    - heading "Newsletter" [level=2]
    - list:
      - listitem:
        - link "Subscribe / unsubscribe to newsletter":
          - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
    `);
});