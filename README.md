# React Z-Order

React component that orders its children by `z` property.

Distributed as UMD module.

Usage:

```jsx
import ZOrder from 'react-z-order';

<ZOrder>
  <circle x={10} z={10} />
  <circle x={30} z={30} />
  <circle x={20} z={20} />
</ZOrder>
```

Produces `<g>` with ordered children and removes `z` property:

```jsx
<g>
  <circle x={10} />
  <circle x={20} />
  <circle x={30} />
</g>
```

## Development

* Run tests: `npm run test`;
* Build `npm run build`;
