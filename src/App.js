import React, { useState } from 'react';
import './App.css';
import './Fonts.css'



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: name,
      email: email,
      contact: contact
    };


    fetch('url.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log('Form submitted successfully!');
        setName('');
        setEmail('');
        setContact('');
      })
      .catch(error => {
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>SEND ME A 'HELLO'</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className='name-email'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className='name-email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" class='contact-box'>Contact:</label>
            <textarea
              type="tel"
              id="contact"
              className='contact'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default App;
