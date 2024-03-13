// MessageForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MessageForm from './MessageForm';

test('renders message form correctly', () => {
  const { getByPlaceholderText } = render(<MessageForm />);
  const input = getByPlaceholderText(/Type your message.../i);
  expect(input).toBeInTheDocument();
});

test('calls onSend when form is submitted with a message', () => {
  const mockSend = jest.fn();
  const { getByPlaceholderText, getByText } = render(<MessageForm onSend={mockSend} />);
  const input = getByPlaceholderText(/Type your message.../i);
  fireEvent.change(input, { target: { value: 'Hello' } });
  const sendButton = getByText(/Send/i);
  fireEvent.click(sendButton);
  expect(mockSend).toHaveBeenCalledWith('Hello');
});
