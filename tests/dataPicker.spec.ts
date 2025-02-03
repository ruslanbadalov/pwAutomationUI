import {test as it } from '@playwright/test';
import { DatePicker } from '../pageObject/LambdaTest/Solutions/DatePicker';

it.describe('DATE PICKER PAGE',()=>{

   it('should have a header',async ({page})=>{
    const datePicker = new DatePicker(page)
    await datePicker.open()
    await datePicker.verifyHeader()
    await datePicker.dateFromToday()

    })
})