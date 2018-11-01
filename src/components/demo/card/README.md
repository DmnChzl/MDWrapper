# Card

> _See the demo component [here](./Card.jsx)_

## Usage

Below, an example of using **Card**, **CardActions**, **CardActionButtons** and **CardActionIcons** components:

```js
import { Card, CardActions, CardActionButtons, CardActionIcons } from 'mdwrapper';

const Demo = () => (
  <Card>
    Demo
    <CardActions>
      <CardActionButtons>
        <Button classes={['mdc-card__action', 'mdc-card__action--button']}>
          Done
        </Button>
      </CardActionButtons>
      <CardActionIcons>
        <IconButton classes={['mdc-card__action', 'mdc-card__action--icon']} font={'done'} />
      </CardActionIcons>
    </CardActions>
  </Card>
);
```

## Props

List of all properties for the **Card** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |

List of all properties for the **CardActions** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |

List of all properties for the **CardActionButtons** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |

List of all properties for the **CardActionIcons** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| children | _node_ | - | Content |
