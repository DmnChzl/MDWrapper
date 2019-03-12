# Menu

> _See the demo component [here](./Menu.jsx)_

## Usage

Below, an example of using the **Menu** component:

```js
import { Button, Menu } from 'mdwrapper';

const Demo = () => (
  <>
    <div id="menu-anchor">
      <Button onClick={() => this.setState({ display: true })}>
        Show
      </Button>
      <Menu
        open={this.state.display}
        data={['First', 'Second', '', 'Third', 'Four']}
        onClick={label => {
          console.log(label);
          this.setState({ display: false });
        }} />
    </div>
  </>
);
```

## Props

List of all properties for the **Menu** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| data | _array_ | [] | Data |
| onClick | _function_ | void | Click Trigger |
| open | _boolean_ | false | Open |
