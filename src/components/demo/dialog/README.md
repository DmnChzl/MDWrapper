# Dialog

> _See the demo component [here](./Dialog.jsx)_

## Usage

Below, an example of using **Dialog**, **DialogActions**, and **DialogContent** components:

```js
import { Dialog, DialogActions, DialogContent } from 'mdwrapper';

const Demo = () => (
  <Dialog>
    Demo
    <DialogContent>
      Hello World
    </DialogContent>
    <DialogActions>
      <Button classes={['mdc-dialog__button']}>
        Done
      </Button>
    </DialogActions>
  </Dialog>
);
```

## Props

List of all properties for the **Dialog** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |
| open | _boolean_ | false | Title |
| title | _string_ | 'Default' | Title |

List of all properties for the **DialogActions** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |

List of all properties for the **DialogContent** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _object_ | - | Node Content |
