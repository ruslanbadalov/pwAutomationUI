import {test as it, expect} from "./todo-page"

it('fixture test', async ({page,todoPage}) => {
    await todoPage.addTodo('spec Fixture test')
    expect(page.getByTestId('todo-title')).toContainText('spec Fixture test')
    

})