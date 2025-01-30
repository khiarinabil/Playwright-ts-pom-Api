import { test, expect } from '@playwright/test';
import { user } from '../models/user';
import TodoPage from '../Pages/TodoPage';
import registerPage from '../Pages/registerPage';
import NewTodoPage from '../Pages/NewTodoPage';

test('should be able to add new todo', async ({ page, request, context }) => {
    //crer un user
    const User = new user()

    const registerpage = new registerPage(page, request, context)
    await registerpage.registerusingApi(User)
    // authorisation
    const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjI5MGY5NTMxYTEwMDAxNDhhYzkxYiIsImZpcnN0TmFtZSI6Ik5BQklMIiwibGFzdE5hbWUiOiJLSElBUkkiLCJpYXQiOjE3MDYyMDEzMzd9.JeNJ--XHFERee1xGeEjb1rX2stBeKOg2CpfiLdYfQx8';
    await page.setExtraHTTPHeaders({ Authorization: accessToken });

    const newtodopage = new NewTodoPage(page);
    await newtodopage.load();
    await newtodopage.aadnewitem('playwright')
    const todopage = new TodoPage(page);
    const todotext = await todopage.gettodotextbyindex();
    expect(todotext).toEqual('playwright');
});


test.skip('should be able a delet a todo', async ({ page, context, request }) => {
    // CRER UN UTILISATEUR
    const User = new user()

    const registerpage = new registerPage(page, request, context)
    await registerpage.registerusingApi(User)
    //authorisation
    const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjI5MGY5NTMxYTEwMDAxNDhhYzkxYiIsImZpcnN0TmFtZSI6Ik5BQklMIiwibGFzdE5hbWUiOiJLSElBUkkiLCJpYXQiOjE3MDYyMDEzMzd9.JeNJ--XHFERee1xGeEjb1rX2stBeKOg2CpfiLdYfQx8';
    await page.setExtraHTTPHeaders({ Authorization: accessToken });
    //
    const newtodopage = new NewTodoPage(page, request)
    await newtodopage.adnewtaskusingAPI(User);
    // UI STEPS
    const todopage = new TodoPage(page);
    await todopage.LOAD();
    await newtodopage.adnewitem('playwight');
    await todopage.delettodoByIndex();
    const deletitem = page.locator('[data-testid="no-todos"]');
    await expect(deletitem).toBeVisible();
    //las version

});