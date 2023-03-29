/**
 * skenario testing
 *
 * - RegisterForm component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when register button is clicked
 */

import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import RegisterForm from './register-form'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('RegisterForm component', () => {
  it('should handle name typing correctly', async () => {
    await act(async () => render(<RegisterForm onRegisterHandler={() => {}}/>, { wrapper: MemoryRouter }))
    const nameInput = await screen.getByPlaceholderText('Your Name')

    await act(async () => userEvent.type(nameInput, 'Testing'))

    expect(nameInput).toHaveValue('Testing')
  })

  it('should handle email typing correctly', async () => {
    await act(async () => render(<RegisterForm onRegisterHandler={() => {}} />, { wrapper: MemoryRouter }))
    const emailInput = await screen.getByPlaceholderText('Your Email')

    await act(async () => userEvent.type(emailInput, 'testing@gmail.com'))

    expect(emailInput).toHaveValue('testing@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    await act(async () => render(<RegisterForm onRegisterHandler={() => {}} />, { wrapper: MemoryRouter }))
    const passwordInput = await screen.getByPlaceholderText('Your Password')

    await act(async () => userEvent.type(passwordInput, 'testing123'))

    expect(passwordInput).toHaveValue('testing123')
  })

  it('should call login function when register button is clicked', async () => {
    const mockLogin = jest.fn()
    await act(async () => render(<RegisterForm onRegisterHandler={mockLogin} />, { wrapper: MemoryRouter }))

    const nameInput = await screen.getByPlaceholderText('Your Name')
    await act(async () => userEvent.type(nameInput, 'Testing'))

    const emailInput = await screen.getByPlaceholderText('Your Email')
    await act(async () => userEvent.type(emailInput, 'testing@gmail.com'))

    const passwordInput = await screen.getByPlaceholderText('Your Password')
    await act(async () => userEvent.type(passwordInput, 'testing123'))

    const registerButton = await screen.getByRole('button', { name: 'Submit' })
    await act(async () => userEvent.click(registerButton))

    expect(mockLogin).toBeCalledWith({
      name: 'Testing',
      email: 'testing@gmail.com',
      password: 'testing123'
    })
  })
})
