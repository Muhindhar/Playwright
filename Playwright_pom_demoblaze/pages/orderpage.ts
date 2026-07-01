import { Page, Locator } from "@playwright/test";

export class Orderpage{
    readonly page:Page;
    readonly phone : Locator;
    readonly addtocart : Locator;
    readonly cart:Locator;
    readonly placeorder : Locator;
    readonly name : Locator;
    readonly country : Locator;
    readonly city : Locator;
    readonly credit : Locator;
    readonly month:Locator;
    readonly year : Locator;
    readonly purchase : Locator;
    readonly okbtn : Locator;
    readonly login : Locator;

    constructor(page:Page){
        this.page = page 
        this.login = page.getByRole('link', { name: 'Log in' })
        this.phone= page.locator("//a[normalize-space()='Samsung galaxy s6']");
        this.addtocart = page.getByRole('link', { name: 'Add to cart' });
        this.cart = page.locator("//a[@id='cartur']");
        this.placeorder = page.locator(".btn.btn-success");
        this.name = page.locator("//input[@id='name']");
        this.country = page.locator("//input[@id='country']");
        this.city = page.locator("//input[@id='city']");
        this.credit = page.locator("//input[@id='card']")
        this.month = page.locator("//input[@id='month']")
        this.year = page.locator("//input[@id='year']")
        this.purchase = page.locator("//button[text()='Purchase']");
        this.okbtn = page.locator("//button[text()='OK']")
    }
     async clicklogin(){
        await this.login.click();
    }

    async clickproduct(){
        await this.phone.click();
    }
    async addtocartt(){
        await this.addtocart.click();


    }
    async cartbutton(){
        await this.cart.click();
    }
    async placeorderpro(){
        await this.placeorder.click();
    }
    async enterdet(name:string,country:string,city:string,credit:string,month:string,year:string){
        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.credit.fill(credit);
        await this.month.fill(month);
        await this.year.fill(year);
        await this.purchase.click();
        await this.okbtn.click();
    }
}