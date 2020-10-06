import React from 'react';

import { render } from '@testing-library/react';

import Page from '../src/Page';

test('Page', () => {
  const tasks = [];

  const { container } = render((
    <Page
      tasks={tasks}
    />
  ));

  expect(container).toContainHTML('<h1');
});
