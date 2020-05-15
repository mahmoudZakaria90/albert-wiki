import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


test('renders Albert wiki page based on selected language', async () => {
  const { findByText, container } = render(<App />);
  const deutschBtn = container.querySelector('#deutsch');
  fireEvent.click(deutschBtn)

  const wiki = await findByText('Inhaltsverzeichnis');
  expect(wiki).toBeInTheDocument();
});