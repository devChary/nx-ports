import { render } from '@testing-library/react';

import EmptyState from './empty-state';

describe('EmptyState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <EmptyState title="Empty State Title" subTitle="Empty State subtitle" />
    );
    expect(baseElement).toBeTruthy();
  });
});
