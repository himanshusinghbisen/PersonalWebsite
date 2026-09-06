import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'
import { validate } from '../lib/validateContact'

describe('validate', () => {
  it('flags empty fields', () => {
    const errors = validate({ name: '', email: '', message: '' })
    expect(errors.name).toBeDefined()
    expect(errors.email).toBeDefined()
    expect(errors.message).toBeDefined()
  })

  it('rejects an invalid email', () => {
    const errors = validate({ name: 'A', email: 'not-an-email', message: 'Hi' })
    expect(errors.email).toBeDefined()
  })

  it('accepts a well-formed submission', () => {
    const errors = validate({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'Hello there',
    })
    expect(Object.keys(errors)).toHaveLength(0)
  })
})

describe('<Contact />', () => {
  it('shows validation errors on empty submit', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your email/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter a message/i)).toBeInTheDocument()
  })

  it('shows a success message after a valid submission', () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Ada Lovelace' },
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'I would love to collaborate.' },
    })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument()
  })
})
