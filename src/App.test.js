import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders form inputs and submit button', () => {
  render(<App />);

  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const contactInput = screen.getByLabelText('Contact:');
  const submitButton = screen.getByText('SEND');

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(contactInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('allows user to type in form inputs', () => {
  render(<App />);

  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const contactInput = screen.getByLabelText('Contact:');

  fireEvent.change(nameInput, { target: { value: 'John Lennon' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(contactInput, { target: { value: '1234567890' } });

  expect(nameInput.value).toBe('John Lennon');
  expect(emailInput.value).toBe('john@example.com');
  expect(contactInput.value).toBe('1234567890');
});

test('submits form data when the submit button is clicked', () => {
  render(<App />);

  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const contactInput = screen.getByLabelText('Contact:');
  const submitButton = screen.getByText('SEND');

  fireEvent.change(nameInput, { target: { value: 'John Lennen' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(contactInput, { target: { value: '1234567890' } });

  fireEvent.click(submitButton);
});
