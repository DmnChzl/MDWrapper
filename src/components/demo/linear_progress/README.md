# LinearProgress

> _See the demo component [here](./LinearProgress.jsx)_

## Usage

Below, an example of using the **LinearProgress** component:

```js
import { LinearProgress } from 'mdwrapper';

const Demo = () => (
  <LinearProgress value={75} buffered />
);
```

## Props

List of all properties for the **LinearProgress** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| buffered | _boolean_ | false | Buffered Style |
| indeterminate | _string_ | false | Indeterminate Style |
| reversed | _string_ | false | Reversed Style |
| value | _number_ | 50 | Current Value |
