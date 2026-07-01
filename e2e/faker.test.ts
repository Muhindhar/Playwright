import {fa, faker} from "@faker-js/faker";

const fname = faker.person.firstName();
const lname = faker.person.lastName();
const email = faker.internet.email();
const pass = faker.internet.password();
const phone = faker.phone.number();
console.log(fname);
console.log(lname);
console.log(email);
console.log(pass)
console.log(phone);