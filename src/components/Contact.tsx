import { useState, type FormEvent } from 'react'
import { validate, type ContactForm as FormState } from '../lib/validateContact'

const emptyForm: FormState = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    field: keyof FormState,
  ): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> => {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(emptyForm)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="section__header">
        <span className="section__index">03</span>
        <h2 className="section__title">Get in touch</h2>
      </div>
      <p className="contact__intro">
        Have a project in mind or just want to say hi? Send a message and I'll
        get back to you.
      </p>

      {submitted ? (
        <div className="contact__success" role="status">
          <strong>Thanks for reaching out!</strong>
          <p>Your message has been sent. I&apos;ll reply soon.</p>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => setSubmitted(false)}
          >
            Send another
          </button>
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="field__error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <span className="field__error">{errors.email}</span>
            )}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <span className="field__error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
