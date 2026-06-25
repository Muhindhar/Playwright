# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegendemoblaze.test.ts >> test
- Location: e2e\codegendemoblaze.test.ts:3:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Name' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:            
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome Muhindhar" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "Samsung galaxy s6 360 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Samsung galaxy s6" [ref=e37]
            - cell "360" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e41]:
            - cell [ref=e42]:
              - img [ref=e43]
            - cell "Samsung galaxy s6" [ref=e44]
            - cell "360" [ref=e45]
            - cell "Delete" [ref=e46]:
              - link "Delete" [ref=e47] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e48]:
            - cell [ref=e49]:
              - img [ref=e50]
            - cell "Samsung galaxy s6" [ref=e51]
            - cell "360" [ref=e52]
            - cell "Delete" [ref=e53]:
              - link "Delete" [ref=e54] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e55]:
            - cell [ref=e56]:
              - img [ref=e57]
            - cell "Samsung galaxy s6" [ref=e58]
            - cell "360" [ref=e59]
            - cell "Delete" [ref=e60]:
              - link "Delete" [ref=e61] [cursor=pointer]:
                - /url: "#"
          - row "Samsung galaxy s6 360 Delete" [ref=e62]:
            - cell [ref=e63]:
              - img [ref=e64]
            - cell "Samsung galaxy s6" [ref=e65]
            - cell "360" [ref=e66]
            - cell "Delete" [ref=e67]:
              - link "Delete" [ref=e68] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e69]:
      - heading "Total" [level=2] [ref=e70]
      - heading "1800" [level=3] [ref=e73]
      - button "Place Order" [active] [ref=e74]
  - generic [ref=e76]:
    - generic [ref=e79]:
      - heading "About Us" [level=4] [ref=e80]
      - paragraph [ref=e81]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e84]:
      - heading "Get in Touch" [level=4] [ref=e85]
      - paragraph [ref=e86]: "Address: 2390 El Camino Real"
      - paragraph [ref=e87]: "Phone: +440 123456"
      - paragraph [ref=e88]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e92]:
      - img [ref=e93]
      - text: PRODUCT STORE
  - contentinfo [ref=e94]:
    - paragraph [ref=e95]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.demoblaze.com/');
  5  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  6  | 
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  9  | 
  10 |   await page.locator('#loginusername').click();
  11 |   await page.locator('#loginusername').fill('Muhindhar');
  12 | 
  13 |   await page.locator('#loginpassword').click();
  14 |   await page.locator('#loginpassword').fill('muhi122181');
  15 |   await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();
  16 | 
  17 |   await page.getByRole('button', { name: 'Log in' }).click();
  18 |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  19 | 
  20 |   await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  21 |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  22 | 
  23 |   page.once('dialog', dialog => {
  24 |     console.log(`Dialog message: ${dialog.message()}`);
  25 |     dialog.dismiss().catch(() => {});
  26 |   });
  27 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  28 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  29 |   //await expect(page.getByRole('row', { name: 'Samsung galaxy s6 360 Delete' })).toBeVisible();
  30 |   await page.isVisible("//h2[text()='Products']");
  31 |   await page.getByRole('button', { name: 'Place Order' }).click();
  32 | 
  33 |   //await expect(page.getByRole('dialog', { name: 'Place order' })).toBeVisible();
> 34 |   await page.getByRole('textbox',{name:'Name'}).fill("'Muhindhar")
     |                                                 ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  35 | 
  36 |   await page.fill("//input[@id='name']","Muhindhar");
  37 |   await page.fill("//input[@id='country']","India");
  38 |   await page.fill("//input[@id='city']","Salem");
  39 |   await page.fill("//input[@id='card']","123456789");
  40 |   await page.fill("//input[@id='month']","01");
  41 |   await page.fill("//input[@id='year']","2021");
  42 |   await page.click("//button[text()='Purchase']");
  43 | });
```