# List

> _See the demo component [here](./List.jsx)_

## Usage

Below, an example of using the **List** component:

```js
import { List } from 'mdwrapper';

const Demo = () => (
  <List data={[
    {
      leadingIcon: 'folder'
      title: 'First',
      subTitle: 'Sub First'
    },
    '',
    {
      title: 'Second',
      subTitle: 'Sub Second',
      trailingIcon: 'info'
    }
  ]} onClick={item => console.log(item)} />
);
```

## Props

List of all properties for the **List** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| data | _array_ | [] | Data |
| onClick | _function_ | void | Click Trigger |
