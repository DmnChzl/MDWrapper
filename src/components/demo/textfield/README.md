# TextField

> _See the demo component [here](./TextField.jsx)_

## Usage

Below, an example of using the **TextField** component:

```js
import { TextField } from 'mdwrapper';

const Demo = () => (
  <TextField label={'Demo'} icon={'reply_all'} outlined onChange={e => console.log(e)} />
);
```

## Props

List of all properties for the **TextField** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| fullWidth | _boolean_ | false | Full Width Style |
| disabled | _boolean_ | false | Available State |
| helper | _string_ | - | Helper Text |
| icon | _string_ | - | Material Design Icon |
| label | _string_ | - | Label |
| onChange | _function_ | void | Change Trigger |
| outlined | _boolean_ | false | Outlined Style |
| placeholder | _string_ | '' | Indicator Text |
| trailing | _boolean_ | false | Trailing |
