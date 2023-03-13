import { render } from '@testing-library/react';

import UserBar from './user-bar';

describe('UserBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserBar />);
    expect(baseElement).toBeTruthy();
  });
});
