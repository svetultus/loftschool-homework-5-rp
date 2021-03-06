import React from 'react';
import { WrapWithAbsolutePosition } from './LayoutWrapping';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('WrapWithPositionAbsolute', () => {
  it('wraps with div with position: absolute', () => {
    const MockComponent = jest.fn(() => <div />);
    const MockComponentWithBlock = () => (
      <WrapWithAbsolutePosition>
        {() => <MockComponent />}
      </WrapWithAbsolutePosition>
    );
    const { container } = render(<MockComponentWithBlock />);
    expect(container.firstChild).toHaveStyle('position: absolute');
  });
});
