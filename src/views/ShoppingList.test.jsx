import { findByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ShoppingList from './ShoppingList'

beforeEach(() => {
    render(<ShoppingList />)
  })

it('should add an item', () => {

const inputArea = screen.getByLabelText(/inputNewItem/i)
const addButton = screen.getByLabelText(/addItemButton/i)

userEvent.type(inputArea, 'coffee beans')
userEvent.click(addButton)

screen.getByText('coffee beans')

}
)

it('should edit an item', () => {
  const pear = screen.findByText('pear')
  const editBtn = screen.getByLabelText('edit-btn')

  userEvent.click(editBtn)

  const editInput = screen.getByLabelText('edit-input')
  const saveBtn = screen.getByLabelText('save-btn')

  userEvent.type(editInput, 'not pears')
  userEvent.click(saveBtn)

  screen.findByText('not pears')
  expect(pear).toBeNull

})

it('should delete an item', () => {
  
  const pear = screen.findByText('pear')
  const deleteBtn = screen.getByLabelText('delete-btn')
  userEvent.click(deleteBtn)
  expect(pear).toBeNull
  
  }
  )