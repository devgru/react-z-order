# React Z-Order

> React component that orders its children by `z` property.

Distributed as UMD module.

## Installing

```sh
$ yarn add react-z-order
# or
$ npm install --save react-z-order
```

Usage:

```jsx
import ZOrder from 'react-z-order';

<ZOrder>
  <circle x={10} y={10} z={10} />
  <circle x={30} y={30} z={30} />
  <circle x={20} y={20} z={20} />
</ZOrder>
```

Produces `<g>` with ordered children and removes `z` property:

```jsx
<g>
  <circle x="10" y="10" />
  <circle x="20" y="20" />
  <circle x="30" y="30" />
</g>
```

## Development

* Run tests: `yarn test`;
* Build `yarn build`;

## License

MIT © [Dmitriy Semyushkin](https://devg.ru)
