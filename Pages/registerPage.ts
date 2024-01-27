import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import { user } from "../models/user";
import userApis from "../Apis/userApis";
import { Context } from "vm";
import config from '../playwright.config'

export default class registerPage {
    private page: Page
    private request?: APIRequestContext;
    private contex?: BrowserContext;
    // constructor

    constructor(page: Page, request?: APIRequestContext, contex?: BrowserContext) {
        this.page = page
        this.request = request
        this.contex = contex
    }


    //elements
    private get firstNameInput() {
        return '[data-testid="first-name"]';

    }
    private get lastNameInput() {
        return '[data-testid="last-name"]';

    }
    private get emailInput() {
        return '[data-testid="email"]';

    }
    private get passWordInput() {
        return '[data-testid="password"]';

    }
    private get confPassWordInput() {
        return '[data-testid="confirm-password"]'

    }

    private get submitButon() {
        return '[data-testid="submit"]'
    }


    //methods or steps

    async load() {
        await this.page.goto('/signup');
    }
    async register(User: user) {

        await this.page.type(this.firstNameInput, User.getfirstname())
        await this.page.type(this.lastNameInput, User.getlastname())
        await this.page.type(this.emailInput, User.getemail())
        await this.page.type(this.passWordInput, User.getpassword())
        await this.page.type(this.confPassWordInput, User.getpassword())
        await this.page.click(this.submitButon)


    }

    async registerusingApi(User: user) {
        const response = await new userApis(this.request!).register(User)
        // injecter cookies
        const responsbody = await response.json();
        const accestokenn = responsbody.accestoken;
        const userIdd = responsbody.userId;
        const firstnamme = responsbody.firstName;




        // injecter cookies
        await this.contex!.addCookies([{

            name: 'access_token',
            value: 'accestokenn',
            url: config.use?.baseURL,
        },

        {

            name: 'userID',
            value: 'firstnamme',
            url: config.use?.baseURL,
        },

        {

            name: 'firstName',
            value: 'accestokenn',
            url: config.use?.baseURL,
        }


        ]);

    }
}