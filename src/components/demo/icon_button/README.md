# IconButton

> _See the demo component [here](./IconButton.jsx)_

## Usage

Below, an example of using the **IconButton** component:

```js
import { IconButton } from 'mdwrapper';

const Demo = () => (
  <IconButton font={'star_border'} onClick={() => console.log('Demo')} />
);
```

## Props

List of all properties for the **IconButton** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| classes | _array_ | [] | Overrides Class |
| disabled | _boolean_ | false | Available State |
| font | _string_ | 'star' | Material Design Icon Font |
| onClick | _function_ | void | Click Trigger |
