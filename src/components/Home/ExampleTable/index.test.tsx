import React from 'react';
import { render } from '@testing-library/react';
import { Default, defaultArgs } from './exampleTable.stories';

describe('ExampleTable', () => {
  test('should render example rows', () => {
    const { getByText } = render(<Default {...defaultArgs} />);

    expect(getByText('ID')).toBeVisible();
    expect(getByText('Message')).toBeVisible();
    expect(getByText('Example 1')).toBeVisible();
    expect(getByText('1')).toBeVisible();
    expect(getByText('Example 2')).toBeVisible();
    expect(getByText('2')).toBeVisible();
  });
});
