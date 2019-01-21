# Typography

> _See the demo component [here](./Typography.jsx)_

## Usage

Below, an example of using the **Typography** component:

```js
import { Typography } from 'mdwrapper';

const Demo = () => (
  <>
    <Typography type={'headline'} size={4}/>Headline<Typography>
    <Typography type={'body'} size={2}/>Body<Typography>
  </>
);
```

## Props

List of all properties for the **Typography** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |
| element | _string_ | 'span' | Element |
| size | _number_ | 1 | Size: (1, 2, 3, 4, 5 & 6) |
| type | _string_ | '' | Type: ('headline', 'subtitle' & 'body') |
