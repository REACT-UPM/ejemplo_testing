// UserForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matchers like toBeInTheDocument
import UserForm from '../UserForm';

describe('UserForm Component', () => {
  test('renders form elements correctly', () => {
    render(<UserForm />);
    
    // Check if the form fields are rendered
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test('allows the user to input name and email', () => {
    render(<UserForm />);
    
    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    // Assert that the inputs have the correct values
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
  });

  test('shows success message on form submission', async () => {
    render(<UserForm />);
    
    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const submitButton = screen.getByText(/Submit/i);

    // Simulate user input and form submission
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.click(submitButton);

    // Find success message after form submission
    const successMessage = await screen.findByTestId('success-message');
    
    // Assert that the success message is displayed
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent('Form submitted successfully!');
  });

  test('does not show success message if fields are empty', () => {
    render(<UserForm />);
    
    const submitButton = screen.getByText(/Submit/i);

    // Click the submit button without filling the form
    fireEvent.click(submitButton);

    // Assert that the success message is not displayed
    const successMessage = screen.queryByTestId('success-message');
    expect(successMessage).not.toBeInTheDocument();
  });
});
