# SnackBar

> _See the demo component [here](./SnackBar.jsx)_

## Usage

Below, an example of using the **SnackBar** component:

```js
import { Button, SnackBar } from 'mdwrapper';

const Demo = () => (
  <>
    <Button onClick={() => this.setState({ display: true })}>
      Show
    </Button>
    <SnackBar 
      active={this.state.display} 
      label={'Close'} 
      onClick={() => this.setState({ display: false })}>
      Demo
    </SnackBar>
  </>
);
```

## Props

List of all properties for the **SnackBar** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| active | _boolean_ | false | Active |
| aligned | _boolean_ | false | Aligned Style |
| children | _node_ | - | Content |
| label | _string_ | 'default' | Label |
| onClick | _function_ | void | Click Trigger |
