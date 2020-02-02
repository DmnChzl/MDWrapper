# Slider

> _See the demo component [here](./SelectMenu.jsx)_

## Usage

Below, an example of using the **SelectMenu** component:

```js
import { SelectMenu } from 'mdwrapper';

const Demo = () => (
  <SelectMenu
    label={'Hue'}
    data={['Red', 'Green', 'Blue']}
    icon={'brush'}
    onClick={value => console.log(value)} />
);
```

## Props

List of all properties for the **SelectMenu** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| data | _array_ | [] | Data |
| disabled | _boolean_ | false | Available State |
| helper | _string_ | - | Helper Text |
| icon | _string_ | - | Material Design Icon |
| label | _string_ | - | Label |
| onClick | _function_ | void | Click Trigger |
| outlined | _boolean_ | false | Outlined Style |
