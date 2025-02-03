import {test as it,expect} from  '@playwright/test'

it.describe('LOGIN', () => {
    it.beforeEach(async({ page }) => {
      await page.goto('https://demoqa.com/books')  
    })
    it('Verify authentication and log out', async({ page }) => {
    const logOutButton = page.locator('#submit');
    await expect (logOutButton).toHaveText('Log out');
    await page.screenshot({path:'screenshots/${browserName}-profile.png'})

    })

})

