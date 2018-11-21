# FAB

> _See the demo component [here](./FAB.jsx)_

## Usage

Below, an example of using the **FAB** component:

```js
import { FAB, Icon } from 'mdwrapper';

const Demo = () => (
  <FAB label={'Create'} onClick={() => console.log('Demo')}>
    <Icon classes={['mdc-fab__icon']} font={'create'} />
  </FAB>
);
```

## Props

List of all properties for the **FAB** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |
| label | _string_ | - | Label |
| mini | _boolean_ | false | Mini Style |
| onClick | _function_ | void | Click Trigger |
