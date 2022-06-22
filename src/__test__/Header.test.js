import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Test HeaderComponent', () => {
  test('Expected to render correctly', () => {
    const headerComponent = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      )
      .toJSON();

    expect(headerComponent).toMatchSnapshot();
  });
});
