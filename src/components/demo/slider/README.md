# Slider

> _See the demo component [here](./Slider.jsx)_

## Usage

Below, an example of using the **Slider** component:

```js
import { Slider } from 'mdwrapper';

const Demo = () => (
  <Slider
    min={20}
    max={64}
    value={42}
    step={2}
    discrete
    displayMarkersonChange={e => console.log(e)} />
);
```

## Props

List of all properties for the **Slider** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| disabled | _boolean_ | false | Available State |
| discrete | _boolean_ | false | Discrete Style |
| displayMarkers | _boolean_ | false | Display Markers Style |
| max | _number_ | 100 | Max Value |
| min | _number_ | 0 | Min Value |
| onChange | _function_ | void | Change Trigger |
| step | _number_ | 1 | Step Value |
| value | _number_ | 50 | Default Value |
