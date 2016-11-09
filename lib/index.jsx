// Module dependencies and export
import React, {Children} from 'react';
const {count, toArray} = Children;
export default ZOrder;

// Component
function ZOrder({children}) {
  const hasChildren = children && count(children) > 0;
  const sortedChildren = hasChildren ? sort(children) : null;

  return (<g>{sortedChildren}</g>);
}

// Internals
function sort(children) {
  return toArray(children).sort(sortByZProp).map(removeZProp);
}

function sortByZProp(a, b) {
  return a.props.z - b.props.z;
}

function removeZProp(child) {
  const {z, ...props} = child.props; // separate z from props

  if (!isNumber(z)) {
    throw new Error('Every child in ZOrder container ' +
      'must have `z` property which must be valid Number.');
  }

  return {...child, props}; // rebuild child without props.z
}

function isNumber(z) {
  return Number(z) === z; // is there any
}
