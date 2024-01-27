import { test, expect } from '@playwright/test';
import { user } from '../models/user';
import registerPage from '../Pages/registerPage';
import TodoPage from '../Pages/TodoPage';
import config from '../playwright.config'

test('should be abele to register to the website', async ({ page }) => {
    const User = new user();


    const RegisterPage = new registerPage(page)
    await RegisterPage.load();
    await RegisterPage.register(User);
    const todopage = new TodoPage(page);

    const welcommessage = todopage.getwelcommsg();
    await expect(welcommessage).toBeVisible();






})

