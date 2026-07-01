import {test as base, expect} from '@playwright/test';
import { Loginpage } from '../pages/loginpage';
import { Orderpage } from '../pages/orderpage';

type fixture = {
    login : Loginpage;
    order : Orderpage
};

export const test = base.extend<fixture>({
    login:async({page} ,use)=>{
        await use (new Loginpage(page));
    },
    order:async({page}, use)=>{
        await use (new Orderpage(page))
    }

})

export{expect}


