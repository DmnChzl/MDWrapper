# Slider

> _See the demo component [here](./SelectMenu.jsx)_

## Usage

Below, an example of using the **SelectMenu** component:

```js
import { SelectMenu } from 'mdwrapper';

const Demo = () => (
  <SelectMenu
    label={'Fruit'}
    data={['Apple', 'Banana', 'Clementine']}
    onChange={e => console.log(e.target.value)} />
);
```

## Props

List of all properties for the **SelectMenu** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| data | _array_ | [] | Data |
| disabled | _boolean_ | false | Available State |
| label | _string_ | - | Label |
| onChange | _function_ | void | Change Trigger |
| outlined | _boolean_ | false | Outlined Style |
