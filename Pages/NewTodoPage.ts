
import { APIRequestContext, Page } from "@playwright/test";
import todoapis from "../Apis/todoApis";
import { user } from "../models/user";

export default class NewTodoPage {
    private page: Page
    private request?: APIRequestContext

    constructor(page: Page, request?: APIRequestContext) {
        this.page = page
        this.request = request
    }

    private get newtodo() {
        return '[data-testid="new-todo"]'
    }
    private get newtodotask() {
        return '[data-testid="submit-newTask"]'
    }

    private get added() {
        return '[data-testid="add"]'
    }

    async load() {
        this.page.goto('/todo/new')
    }
    async adnewitem(todo: string) {
        await this.page.click(this.added)
        await this.page.type(this.newtodo, todo)
        await this.page.click(this.newtodotask);

    }
    ;





    async adnewtaskusingAPI(User: user) {
        await new todoapis(this.request!).addtodo(User)
    }

    async aadnewitem(todo: string) {

        await this.page.type(this.newtodo, todo)
        await this.page.click(this.newtodotask)

    }
}