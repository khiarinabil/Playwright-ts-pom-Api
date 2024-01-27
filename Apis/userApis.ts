import { APIRequestContext } from "@playwright/test";
import { user } from "../models/user";

export default class userApis {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async register(User: user) {


        return await this.request.post('api/v1/users/register', {

            data: {

                email: User.getemail(),
                password: User.getpassword(),
                firstName: User.getfirstname(),
                lastName: User.getlastname()

            },
            headers: {}


        });


    }

}