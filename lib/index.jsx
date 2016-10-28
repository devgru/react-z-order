// Module dependencies and export

import React, {Children} from 'react';

export default ZSort;

// Internals

const {count, toArray} = Children;

function isNumber(z) {
  return Number(z) === z;
}

function sortByZ(a, b) {
  return a.props.z - b.props.z;
}

function purgeZ(child) {
  const {z, ...props} = child.props;

  if (!isNumber(z)) {
    throw new Error('Every child in ZSort container ' +
      'must have `z` property which must be valid number.');
  }

  return {
    ...child,
    props
  };
}

function sortChildren(children) {
  return toArray(children).sort(sortByZ).map(purgeZ);
}

function ZSort({children}) {
  const hasChildren = children && count(children) > 0;
  const sortedChildren = hasChildren ? sortChildren(children) : null;

  return (<g>{sortedChildren}</g>);
}
