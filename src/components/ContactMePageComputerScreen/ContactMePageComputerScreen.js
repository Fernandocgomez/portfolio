import React, { useState, useEffect } from 'react'
import './ContactMePageComputerScreen.css';
import { Responsive} from "semantic-ui-react";

function ContactMePageComputerScreen() {
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
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-contact-me-page-container">
        <div className="computer-contact-me-page-text">
          <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
          {status ? (<h3>Message has been sent!</h3>) : (<></>)}
        </div>
        <div className="computer-contact-me-page-form">
          <form 
          onSubmit={submitForm}
          action="https://formspree.io/xbjavewj"
          method="POST"
          >
            <div className="computer-contact-me-page-top-inputs">
              <div className="computer-contact-me-page-name">
                <label htmlFor="name">Name:</label>
                <input 
                id="name"
                type="text"
                placeholder="Jane Smith"
                name="Name"
                required
                />
              </div>
              <div className="computer-contact-me-page-email">
                <label htmlFor="email">Email:</label>
                <input 
                id="email"
                type="email"
                placeholder="janesmith@live.com"
                name="email"
                required
                />
              </div>
            </div>
            <div className="computer-contact-me-page-bottom-input">
              <label htmlFor="message">Message:</label>
              <input 
              id="message"
              type="text"
              placeholder="Your message..."
              name="message"
              required
              />
            </div>
            <div className="computer-contact-me-page-button">
              <button>Send!</button>
            </div>
          </form>
        </div>
      </div>
    </Responsive>
  )
}

export default ContactMePageComputerScreen
