import { test, expect } from '@playwright/test';
const searchData = [
    { key: "playwright", exp: "playwright" },
    { key: "selenium", exp: "selenium" },
    { key: "typescript", exp: "typescript" }
];
test.describe("Passing data parameter",() => {
    for (const data of searchData) {
        test(`Search - ${data.key}`, async ({page}) => {
            await page.goto("https://www.google.com");
            const search = page.getByRole('combobox', { name: 'Search' })
            await search.fill(data.key);
            await page.keyboard.press("Enter");
            const firstSearch = page.locator("h3").first();
            await firstSearch.click();
            await expect(page).toHaveTitle(new RegExp(data.exp, "i"));
        });
    }
});