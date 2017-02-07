import React from 'react';
import ZOrder from '../lib';

import renderer from 'react-test-renderer';

describe('react-z-order', () => {
  it('should render at all', function() {
    const component = renderer.create(
      <ZOrder />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should sort', () => {
    const component = renderer.create(
      <ZOrder>
        {
          [10, 20, 40, 30].map(i => <circle x={i} z={i} key={i} />)
        }
      </ZOrder>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be stable', () => {
    const component = renderer.create(
      <ZOrder>
        <circle x={10} z={10} />
        <circle x={30} z={10} />
        <circle x={20} z={10} />
      </ZOrder>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should throw when no Z specified', () => {
    expect(() => {
      renderer.create(
        <ZOrder>
          <circle x={40} />
          <circle x={10} z={10} />
        </ZOrder>
      );
    }).toThrowError(Error);
  });
});
