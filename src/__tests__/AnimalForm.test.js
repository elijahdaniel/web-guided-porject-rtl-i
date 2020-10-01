import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import AnimalForm from '../components/AnimalForm'

describe('Tests AnimalForm', () => {
  test('Form component renders without errors', () => {
    render(<AnimalForm />)
  })

  test('User can fill out and submit form', () => {
    // arrange
    //  - render component
    render(<AnimalForm />)

    // act
    //  - query each input
    const speciesInput = screen.getByLabelText(/species/i)
    const ageInput = screen.getByLabelText(/age/i)
    const notesInput = screen.getByLabelText(/notes/i)
    const button = screen.getByRole('button', {
      name: /submit!/i,
    })

    //  - fill out our form elements
    fireEvent.change(speciesInput, {
      target: { name: 'species', value: 'canine' },
    })
    fireEvent.change(ageInput, {
      target: { name: 'age', value: '5' },
    })
    fireEvent.change(notesInput, {
      target: { name: 'notes', value: 'cuteness' },
    })

    //  - click our button
    fireEvent.click(button)

    // assert
    //  - test that our form inputs exist on the page
    const newAnimal = screen.findByText(/canine/i)
  })
})
