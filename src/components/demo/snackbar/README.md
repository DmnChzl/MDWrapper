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
      open={this.state.display} 
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
| children | _object_ | - | Node Content |
| label | _string_ | 'default' | Label |
| leading | _boolean_ | false | Leading Style |
| onClick | _function_ | void | Click Trigger |
| open | _boolean_ | false | Open |
| stacked | _boolean_ | false | Stacked Style |
