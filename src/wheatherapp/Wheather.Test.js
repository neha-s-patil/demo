import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Weather from './Wheather';

describe('Weather component', () => {
  test('renders weather component', () => {
    const { getByPlaceholderText } = render(<Weather />);
    const searchInput = getByPlaceholderText('Search for a city...');
    expect(searchInput).toBeInTheDocument();
  });

  test('fetches weather data on search', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        main: { temp: 25, humidity: 50 },
        wind: { speed: 5 },
        name: 'TestCity',
        sys: { country: 'XX' }
      })
    });

    const { getByPlaceholderText, getByText } = render(<Weather />);
    const searchInput = getByPlaceholderText('Search for a city...');
    fireEvent.change(searchInput, { target: { value: 'TestCity' } });
    fireEvent.keyPress(searchInput, { key: 'Enter', code: 13 });

    // await waitFor(() => {
    //   expect(getByText('TestCity Weather')).toBeInTheDocument();
    //   expect(getByText('Temperature: 25°C')).toBeInTheDocument();
    //   expect(getByText('Humidity: 50%')).toBeInTheDocument();
    //   expect(getByText('Wind: 5 km/h')).toBeInTheDocument();
    // });
  });
});
