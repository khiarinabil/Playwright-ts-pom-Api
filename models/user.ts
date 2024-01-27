import { faker } from '@faker-js/faker';
export class user {

    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private accestoken: string;
    private userId: string;

    constructor() {

        this.lastName = faker.person.lastName(),
            this.firstName = faker.person.firstName()
        this.email = faker.internet.email(),
            this.password = 'Test12345@';


    }




    getfirstname() {
        return this.firstName
    }
    getlastname() {
        return this.lastName

    }
    getemail() {
        return this.email
    }

    getpassword() {
        return this.password

    }


}