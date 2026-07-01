import {test,expect} from '../fixtures/basefixture';
import logindata from '../test-data/logindata.json'
test.describe("Order product @smoke", async()=>{
    test.beforeEach("Logging in to the site", async({login})=>{
        await login.navigation();
        await login.clicklogin();
        await login.logindet(logindata.validlogin.username,logindata.validlogin.password);
    });

const details = {
    name: "Muhindhar",
    country: "India",
    city: "Salem",
    credit: "1234",
    month: "02",
    year: "2026"
};
    test("Order product", async({order,page})=>{
        page.on('dialog',async(dialog)=>{
            console.log(dialog.message());
            dialog.accept();
        })

        await order.clickproduct();
        await order.addtocartt();
        await order.cartbutton();
        await order.placeorderpro();
        await order.enterdet(details.name,details.country,details.city,details.credit,details.month,details.year);


    })
})