import React from 'react';
import './ContactMe.css'
import { FaLinkedin } from 'react-icons/fa';


export function ContactMe() {

  const SendEmail = () => {
    console.log('Sending Email')
  }


  return (
    <div className='contact-me-container'>

      {/* Left Side of the Page */}
      <div className='left-side-contact-container'>
        <div>
          <h1 className='header-in-container'>Professional Summary</h1>
        </div>
        <div>
          <div>
            <h1>Email</h1>
            <p>Zval321@gmail.com</p>
          </div>

          <div>
            <a href='https://github.com/zackvalavanis'>
              <h1>Github</h1>
              <p>github.com/zackvalavanis</p>
            </a>
          </div>

          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" />
            </div>
            <a href='https://www.linkedin.com/in/zack-valavanis/'>
              <h1>LinkdIn</h1>
              <p>linkedin.com/in/zack-valavanis</p>
            </a>
          </div>
        </div>
      </div>


      {/* Right Side of the Page */}
      <div className='right-side-contact-container'>
        <form onSubmit={SendEmail}>
          <h1 className='header-in-container'>Contact Me:</h1>

          {/* First & Last Name */}
          <div className='name-container'>
            <div className='label-container'>
              <label className='email-form-label'>First Name:</label>
            </div>
            <div className='email-input-container'>
              <input type='text' name='first-name' />
            </div>

            <div className='label-container'>
              <label className='email-form-label'>Last Name:</label>
            </div>
            <div className='email-input-container'>
              <input type='text' name='last-name' />
            </div>
          </div>

          {/* Email */}
          <div className='email-container'>
            <div className='label-container'>
              <label className='email-form-label'>Email:</label>
            </div>

            <div className='email-input-container'>
              <input name='email' type='text' />
            </div>
          </div>

          {/* Reason for Contact Buttons */}
          {/* <div>
          <div className='label-container'>
            <label className='email-form-label'>Reason for Contact</label>
          </div>

          <div className='email-input-container'>
            <input name='email' type='text' />
          </div>
        </div> */}

          {/* Message */}
          <div className='message-container'>
            <div className='label-container'>
              <label className='email-form-label'>Message:</label>
            </div>

            <div className='email-input-container'>
              <input name='message' type='text' />
            </div>
          </div>


          {/* Submit Button */}
          <div className='submit-email-button-container'>
            <button type='submit' className='submit-button-email'>Send Email</button>
          </div>
        </form>
      </div>
    </div>
  )
}
