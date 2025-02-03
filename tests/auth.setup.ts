import { test as setup, expect } from '@playwright/test';


const authFile:string = "../.auth/user.json";


setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://demoqa.com/login');
  await page.getByPlaceholder('UserName').fill('ruslan.badalov');
  await page.getByPlaceholder('Password').fill('Ruslan@009');
  await page.getByRole('button', { name: 'Login' }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://demoqa.com/profile');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator('#userName-value')).toHaveText('ruslan.badalov');
  await expect(page.getByRole('button',{name:'Log out'})).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});