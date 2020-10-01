import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders App without errors', () => {
  render(<App />)
})

test('renders the app header', () => {
  // arrange: render our component
  render(<App />)

  // act: get access to our header element
  const header = screen.getByText(/add new animal/i)

  // assert: passes if our header element exists
  expect(header).toBeTruthy()
})
