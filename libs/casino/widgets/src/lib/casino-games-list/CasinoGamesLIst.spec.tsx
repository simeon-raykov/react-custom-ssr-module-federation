import { render } from '@testing-library/react';

import Gameslist from './CasinoGamesList';

describe('Gameslist', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gameslist />);
    expect(baseElement).toBeTruthy();
  });
});
