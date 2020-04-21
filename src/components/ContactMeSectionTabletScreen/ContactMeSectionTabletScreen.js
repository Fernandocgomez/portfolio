import React, { useState, useEffect } from 'react'
import './ContactMeSectionTabletScreen.css';
import { Responsive} from "semantic-ui-react";

function ContactMeSectionTabletScreen() {
  useEffect(() => {
    setStatus(false)
  }, []);
  const [status, setStatus] = useState(false)

  let submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus(true)
      } else {
        setStatus(false)
      }
    };
    xhr.send(data);
  }

  return (
    <Responsive {...Responsive.onlyTablet}>
      <div className="tablet-contact-me-section-container">
        <div className="tablet-contact-me-section-text-container">
          <h2>Hire Me</h2>
          <p>Hello there,</p>
          <p>If you want to connect with me, just fill out the form on the right size.</p>
          <p>I do my best to answer my emails as soon as possiable, however, if you want to get in contact with me faster, just dail:</p>
          <p>(346) 260-0832</p>
        </div>
        <div className="tablet-contact-me-section-form-container">
          {status ? (<div>Message has been sent!</div>) : (<></>)}
          <form
          onSubmit={submitForm}
          action="https://formspree.io/xbjavewj"
          method="POST"
          >
            <label htmlFor="tablet-contact-me-section-form-container-your-name">Your Name:</label>
            <input type="text" 
            id="tablet-contact-me-section-form-container-your-name" 
            placeholder="Jane Smith"
            name="Name"
            required
            />

            <label htmlFor="tablet-contact-me-section-form-container-your-email">Your Email:</label>

            <input type="email" 
            id="tablet-contact-me-section-form-container-your-email"
            placeholder="janesmith@live.com"
            name="email"
            required
            />
            <label htmlFor="tablet-contact-me-section-form-container-your-message">Your Message:</label>

            <input type="text" 
            id="tablet-contact-me-section-form-container-your-message"
            placeholder="Your message..."
            name="message"
            required
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </Responsive>
  )
}

export default ContactMeSectionTabletScreen
