/**
 * skenario testing
 *
 * - DiscussionReplyInput component
 *   - should handle reply typing correctly
 *   - should call login function when login button is clicked
 */

import '@testing-library/jest-dom'
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import DiscussionReplyInput from './discussion-reply-input'
import userEvent from '@testing-library/user-event'

describe('DiscussionReplyInput component', () => {
  it('should handle reply typing correctly', async () => {
    const initialState = {
      authUser: {
        id: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg'
      }
    }

    const mockStore = configureStore()
    const store = mockStore(initialState)
    await act(async () => render(<Provider store={store}> <DiscussionReplyInput /> </Provider>))
    const replyInput = await screen.getByPlaceholderText('Write your reply')
    await act(async () => userEvent.type(replyInput, 'testing'))

    await expect(replyInput).toHaveValue('testing')
  })
})
