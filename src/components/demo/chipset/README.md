# ChipSet

> _See the demo component [here](./ChipSet.jsx)_

## Usage

Below, an example of using **ChipSet** and **Chip** components:

```js
import { ChipSet, Chip } from 'mdwrapper';

const Demo = () => (
  <ChipSet choice>
    <Chip icon={'person'}>Male</Chip>
    <Chip icon={'person'}>Female</Chip>
);
```

## Props

List of all properties for the **ChipSet** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |
| choice | _boolean_ | false | Choice Style |

List of all properties for the **Chip** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |
| icon | _string_ | - | Material Design Icon |
| onClick | _function_ | - | Click Trigger |
