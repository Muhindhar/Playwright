import {test as base, expect} from '@playwright/test';
import {loginpage} from '../pages/loginpage';

type Fixture = {
    login : loginpage;
};

export const test = base.extend<Fixture>({
    login:async ({page}, use ) =>{
        await use (new loginpage(page));
    }
})
export{expect};