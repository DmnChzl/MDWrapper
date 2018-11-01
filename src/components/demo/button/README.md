# Button

> _See the demo component [here](./Button.jsx)_

## Usage

Below, an example of using the **Button** component:

```js
import { Button, Icon } from 'mdwrapper';

const Demo = () => (
  <Button outlined onClick={() => console.log('Demo')}>
    <Icon font={'done_outline'} classes={[{ margin: '1rem' }]} />
    Demo
  </Button>
);
```

## Props

List of all properties for the **Button** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| classes | _array_ | [] | Overrides Class |
| children | _node_ | - | Content |
| dense | _boolean_ | false | Dense Style |
| disabled | _boolean_ | false | Available State |
| onClick | _function_ | void | Click Trigger |
| outlined | _boolean_ | false | Outlined Style |
| raised | _boolean_ | false | Raised Style |
| unelevated | _boolean_ | false | Unelevated Style |
