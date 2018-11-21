# TopBar

> _See the demo component [here](./TopBar.jsx)_

## Usage

Below, an example of using the **TopBar** component:

```js
import { TopBar, TopBarIcon } from 'mdwrapper';

const Demo = () => (
  <TopBar title={'Demo'} onClick={() => console.log('Demo')} short collapsed>
    <TopBarIcon font="print" onClick={() => console.log('Print')} />
  </TopBar>
);
```

## Props

List of all properties for the **TopBar** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| title | _string_ | 'Default' | Title |
| onClick | _function_ | - | Click Trigger |

List of all properties for the **TopBarIcon** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| font | _string_ | 'bookmark' | Material Design Icon Font |
| onClick | _function_ | - | Click Trigger |
