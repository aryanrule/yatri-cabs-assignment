"use client" 
import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e : any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e : any)  => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        
        <h2>Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>

      </form>
    </section>
  )
}

export default Form