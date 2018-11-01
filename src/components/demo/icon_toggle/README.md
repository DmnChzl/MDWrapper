# IconToggle

> _See the demo component [here](./IconToggle.jsx)_

## Usage

Below, an example of using the **IconToggle** component:

```js
import { IconToggle } from 'mdwrapper';

const Demo = () => (
  <IconToggle
    fontOff={'brightness_low'}
    fontOn={'brightness_high'}
    labelOff={'Inactive'}
    labelOn={'Active'}
    onClick={() => console.log('Demo')} />
);
```

## Props

List of all properties for the **IconToggle** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| disabled | _boolean_ | false | Available State |
| fontOff | _string_ | 'star_border' | Material Design Icon Font Off |
| fontOn | _string_ | 'star' | Material Design Icon Font On |
| labelOff | _string_ | 'Off' | Label Off |
| labelOn | _string_ | 'On' | Label On |
| onClick | _function_ | void | Click Trigger |
