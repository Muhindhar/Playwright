# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Navigationcmds.test.ts >> Navigation commands
- Location: e2e\Navigationcmds.test.ts:3:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.demoblaze.com/cart.html", waiting until "load"

```

# Test source

```ts
  1 | import {test} from '@playwright/test';
  2 | 
  3 | test("Navigation commands", async({page})=>{
  4 |     page.goto("https://www.demoblaze.com/index.html");
  5 |     await page.waitForTimeout(5000);
> 6 |     page.goto("https://www.demoblaze.com/cart.html");
    |          ^ Error: page.goto: Test ended.
  7 | });
```