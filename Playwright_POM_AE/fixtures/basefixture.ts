import {test as base, expect} from '@playwright/test';
import { Loginpage } from '../pages/loginpage';

type fixture = {
    login:Loginpage;
}

export const test = base.extend<fixture>({
    login:async ({page}, use) => {
        await use (new Loginpage(page));
    }
})

export{expect};