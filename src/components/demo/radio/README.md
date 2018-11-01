# Radio

> _See the demo component [here](./Radio.jsx)_

## Usage

Below, an example of using the **Radio** component:

```js
import { Radio } from 'mdwrapper';

const Demo = () => (
  <>
    <Radio checked name={'gender'} label={'Male'} />
    <Radio name={'gender'} label={'Female'} onChange={e => console.log(e)} />
  </>
);
```

## Props

List of all properties for the **Radio** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| checked | _boolean_ | false | Default Value |
| disabled | _boolean_ | false | Available State |
| label | _string_ | - | Label |
| name | _string_ | 'default' | Reference |
| onChange | _function_ | void | Change Trigger |
