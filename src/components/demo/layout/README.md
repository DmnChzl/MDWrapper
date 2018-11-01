# Layout

> _See the demo component [here](./Layout.jsx)_

## Usage

Below, an example of using **Grid**, **GridInner** and **GridCell** components:

```js
import { Grid, GridInner, GridCell } from 'mdwrapper';

const Demo = () => (
  <Grid style={{ margin: '1rem' }}>
    <GridInner>
      <GridCell col={6} style={{ padding: '1rem' }}>
        Hello
      </GridCell>
      <GridCell col={6} style={{ padding: '1rem' }}>
        World
      </GridCell>
    </GridInner>
  </Grid>
);
```

## Props

List of all properties for the **Grid** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |
| hAlign | _string_ | - | Horizontal Alignment: ('left' & 'right') |
| style | _object_ | {} | Overrides Style |

List of all properties for the **GridInner** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |
| style | _object_ | {} | Overrides Style |

List of all properties for the **GridCell** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |
| col | _number_ | 4 | Bootstrap Columns |
| style | _object_ | {} | Overrides Style |
| vAlign | _string_ | - | Vertical Alignment: ('top', 'middle' & 'bottom') |
