import { test, expect } from '../fixtures/basefixture';
import { readcsv, logindet } from '../utilities/csvreader';

const data: logindet[] = readcsv();


const valid = data.find(data => data.type === 'valid');
const invalid = data.find(data => data.type === 'invalid');

test.describe("Automation login test", () => 
    {
    test.beforeEach(async ({ login }) => {
        await login.navigate();
    });
    for(const user of data){
        test(`Login page ${user.type}`, async ({ login }) => {
            await login.loginfunc(user.email,user.password);
            if (!valid) {
                throw new Error("Valid data not found");
            }
            await login.loginfunc(valid.email, valid.password);
            await expect.soft(login.checklogin).toHaveText(" Logged in as muhi");
            await expect(login.validcheck).toBeVisible();
        });
    }

    test("Invalid login", async ({ login }) => {
        if (!invalid) {
            throw new Error("Invalid data not found");
        }
        await login.loginfunc(invalid.email, invalid.password);
        await expect(login.errorlogin).toHaveText("Your email or password is incorrect!");
    });


});