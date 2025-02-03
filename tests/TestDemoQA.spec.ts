import {chromium, test as it } from '@playwright/test';

it.describe('FORM PAGE',()=>{

    it('Fill all forms for form page',async({page})=>{
        await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load', timeout: 60000 });
        await page.locator('#firstName').fill('Ruslan')
        await page.locator('#lastName').fill('Badalov')
        await page.locator('#userEmail').fill('ruslan.badalovf@gmail.com');
        await page.locator('label[for="gender-radio-1"]').click();
        await page.locator('#userNumber').fill('8579998588')
        await page.locator('#dateOfBirthInput').click();
        await page.locator('.react-datepicker__month-select').selectOption('5');
        await page.locator('.react-datepicker__year-select').selectOption('1995');
        await page.locator('.react-datepicker__day--015').click(); 
        await page.locator('#subjectsInput').fill('English');
        await page.keyboard.press('Enter');
        await page.locator('label[for=hobbies-checkbox-1]').click();
        await page.locator('#currentAddress').fill('89 Spring st');
        await page.locator('#submit').click();
        await page.pause()
    })

})