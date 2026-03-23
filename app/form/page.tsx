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
       <form className="small-form">
  <h3>Test Form</h3>

  <label htmlFor="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Name" className="small-input" />

  <label htmlFor="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email" className="small-input" />

  <button type="submit" className="small-button">Submit</button>
</form>
    </section>
  )
}

export default Form