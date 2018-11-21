# ThemeProvider

> _See the demo component [here](./ThemeProvider.jsx)_

## Usage

Below, an example of using the **ThemeProvider** component:

```js
import { ThemeProvider } from 'mdwrapper';
import App from './App';

const Demo = () => (
  <ThemeProvider
    background={'#f5f5f5'}
    error={'#f44336'}
    primary={'#2196f3'}
    secondary={'#ffeb3b'}
    surface={'#fafafa'}>
    <App />
  </ThemeProvider>
);
```

## Props

List of all properties for the **ThemeProvider** component:

| **Prop** | **Type** | **Default** | **Description** |
|--|--|--|--|
| background | _string_ | '#fff' | BackGround Color |
| children | _object_ | - | Node Content |
| error | _string_ | '#b00020' | Error Color |
| onError | _string_ | '#fff' | On Error Color |
| onPrimary | _string_ | '#fff' | On Primary Color |
| onSecondary | _string_ | '#000' | On Secondary Color |
| onSurface | _string_ | '#000' | On Surface Color |
| primary | _string_ | '#6200ee' | Primary Color |
| secondary | _string_ | '#018786' | Secondary Color |
| surface | _string_ | '#fff' | Surface Color |
