import React from 'react'
import './Connect.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Connect = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tpkg7x8',
        'template_7k9g1nh',
        form.current,
        'zCeOSrTeUC65aozEu'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <div className='full-page connect' id="connect">
      <div className="text-zone">
        <h2>Interested in working with me <br /> or perhaps just talk?</h2>
      </div>
      <p>Don't hesitate to contact me using below form or by sending an email to <span className='text-pink'>doganayca89@gmail.com</span></p>
      <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="button" value="SEND">Send</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
    
  )
}

export default Connect