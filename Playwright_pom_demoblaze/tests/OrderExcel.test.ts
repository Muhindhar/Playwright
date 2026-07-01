// import path from "path";
// import { expect, test } from "../fixtures/basefixture";
// import { readExcel } from "../utils/Excelreader";
// import logindata from '../test-data/logindata.json';

// const filePath = path.resolve(__dirname, "../test-data/orderData.xlsx");

// interface OrderData {
//     name: string;
//     country: string;
//     city: string;
//     creditCard: string;
//     month: string;
//     year: string;
// }

// const excelData: OrderData[] = readExcel(filePath, "Sheet1");
// test.describe("Place order test", () => {
//     test.beforeEach(async ({login}) => {
//         await login.navigation();
//         await login.clicklogin();
//         await login.logindet(logindata.valid.username,logindata.valid.password);
//     });

//     test("Place order", async ({ hp, pp, cp, page, dp }) => {
//         page.on("dialog", async dialog => {
//             console.log(dialog.message());
//             await dialog.accept();
//         });

//         await hp.clicksamsung();
//         await pp.clickaddtocart();
//         await hp.clickcart();

//         await cp.clickPlaceHolder(
//             orderData.name,
//             orderData.country,
//             orderData.city,
//             orderData.creditCard,
//             orderData.month,
//             orderData.year
//         );

//     });
// });