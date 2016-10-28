import React from 'react';
import ZSort from '../lib';

import renderer from 'react-test-renderer';

describe('ReactZSort', () => {
  it('should render at all', function() {
    const component = renderer.create(
      <ZSort />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should sort', () => {
    const component = renderer.create(
      <ZSort>
        {
          [10, 20, 40, 30].map(i => <circle x={i} z={i} key={i} />)
        }
      </ZSort>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be stable', () => {
    const component = renderer.create(
      <ZSort>
        <circle x={10} z={10} />
        <circle x={30} z={10} />
        <circle x={20} z={10} />
      </ZSort>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should throw when no Z specified', () => {
    expect(() => {
      renderer.create(
        <ZSort>
          <circle x={40} />
          <circle x={10} z={10} />
        </ZSort>
      );
    }).toThrowError(Error);
  });
});
