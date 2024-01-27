import { APIRequestContext } from "@playwright/test";
import { user } from "../models/user";

export default class todoapis {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async addtodo(User: user) {


        return await this.request.post('/api/v1/task', {


            data: {

                isCompleted: false,
                item: "Playwright"

            }
        })
    }
}