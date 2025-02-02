import React from 'react'

const Contact = () => {
  const handleFormSubmit=(formData)=>{
    const formInputData =Object.fromEntries(formData.entries())

  }
  return (
    <div className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input type="text" required autoComplete='false' placeholder='Enter Your Name'name="username" className='form-control'/>
        <input type="email" required autoComplete='false' placeholder='Enter Your email'name="email" className='form-control'/>
        <textarea rows="10"required autoComplete='false' placeholder='Enter Your Message'name="message"/>
      <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
