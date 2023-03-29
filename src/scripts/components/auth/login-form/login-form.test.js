/**
 * skenario testing
 *
 * - LoginForm component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './login-form'
import userEvent from '@testing-library/user-event'

describe('LoginForm component', () => {
  it('should handle email typing correctly', async () => {
    await act(async () => render(<LoginForm onLoginHandler={() => {}} />, { wrapper: MemoryRouter }))
    const emailInput = await screen.getByPlaceholderText('Your Email')

    await act(async () => userEvent.type(emailInput, 'testing@gmail.com'))

    expect(emailInput).toHaveValue('testing@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    await act(async () => render(<LoginForm onLoginHandler={() => {}} />, { wrapper: MemoryRouter }))
    const passwordInput = await screen.getByPlaceholderText('Your Password')

    await act(async () => userEvent.type(passwordInput, 'testing123'))

    expect(passwordInput).toHaveValue('testing123')
  })

  it('should call login function when login button is clicked', async () => {
    const mockLogin = jest.fn()
    await act(async () => render(<LoginForm onLoginHandler={mockLogin} />, { wrapper: MemoryRouter }))

    const emailInput = await screen.getByPlaceholderText('Your Email')
    await act(async () => userEvent.type(emailInput, 'testing@gmail.com'))

    const passwordInput = await screen.getByPlaceholderText('Your Password')
    await act(async () => userEvent.type(passwordInput, 'testing123'))

    const loginButton = await screen.getByRole('button', { name: 'Submit' })

    await act(async () => userEvent.click(loginButton))

    expect(mockLogin).toBeCalledWith({
      email: 'testing@gmail.com',
      password: 'testing123'
    })
  })
})
