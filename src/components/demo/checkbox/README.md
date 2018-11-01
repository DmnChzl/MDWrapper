# CheckBox

> _See the demo component [here](./CheckBox.jsx)_

## Usage

Below, an example of using the **CheckBox** component:

```js
import { CheckBox } from 'mdwrapper';

const Demo = () => (
  <CheckBox checked label={'Demo'} onChange={e => console.log(e)} />
);
```

## Props

List of all properties for the **CheckBox** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| checked | _boolean_ | false | Default Value |
| disabled | _boolean_ | false | Available State |
| label | _string_ | - | Label |
| onChange | _function_ | void | Change Trigger |
