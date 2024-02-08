import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ShortenURLForm = () => {
  const [longURL, setLongURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/urls/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ longURL })
    });

    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }

    const data = await response.json();
    console.log("Data from server:", data); // Check the data received from the server

    setShortenedURL(data.shortURL); // Update to set the shortened URL received from the backend
  } catch (error) {
    console.error(error);
    // Handle error (e.g., show error message)
  }
};

  return (
    <div className="container mt-4">
      <h2>Shorten URL</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formLongURL">
          <Form.Control
            type="text"
            placeholder="Enter Long URL"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Shorten
        </Button>
      </Form>

      {error && (
        <div className="mt-3 text-danger">
          <p>{error}</p>
        </div>
      )}

      {shortenedURL && (
        <div className="mt-3">
          <p>Shortened URL: <a href={shortenedURL} target="_blank" rel="noopener noreferrer">{shortenedURL}</a></p>
        </div>
      )}
    </div>
  );
};

export default ShortenURLForm;
