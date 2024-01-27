import { Page } from "@playwright/test";

export default class TodoPage {

    private page: Page;
    //CONSTRUCTOR
    constructor(page: Page) {
        this.page = page;
    }
    // ELEMENTS

    get messagewelcom() {
        return '[data-testid="welcome"]'
    }

    getwelcommsg() {
        return this.page.locator('[data-testid="welcome"]')
    }

    get submitemInput() {
        return '[data-testid="new-todo"]'
    }
    get ItemInput() {
        return '[data-testid="submit-newTask"]'
    }
    private get TodoItem() {
        return '[data-testid="todo-item"]'
    }

    private todoitem() {
        return '[data-testid="todo-item"]';
    }
    private get deletitem() {
        return '[data-testid="delete"]'
    }




    //METHODS
    async gettodotextbyindex() {

        return await this.page.locator(this.todoitem()).nth(0).innerText();
    }

    async LOAD() {
        await this.page.goto('/todo');
    }

    async delettodoByIndex() {
        await this.page.locator(this.deletitem).nth(0).click();
    }

}