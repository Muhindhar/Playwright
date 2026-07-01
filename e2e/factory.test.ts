import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

const factory = Factory.define(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: "password123",
}));

const user = factory.build();
console.log(user);