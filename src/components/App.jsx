import React from 'react';
import { ThemeProvider } from './ui';
import Header from './Header';
import Router from './Router';
import { WHITE } from '../constants';

const INDIGO = '#3f51b5';
const RED = '#f44336';

const getTabs = () => [
  'Button',
  'Card',
  'CheckBox',
  'ChipSet',
  'FAB',
  'Icon',
  'Icon Button',
  'Icon Toggle',
  'Layout',
  'Linear Progress',
  'Radio',
  'Slider',
  'SnackBar',
  'Switch',
  'TextField',
  'Theme Provider',
  'Typography'
];

const App = () => (
  <ThemeProvider
    onSecondary={WHITE}
    primary={INDIGO}
    secondary={RED}>
    <Header tabs={getTabs()} />
    <Router />
  </ThemeProvider>
);

export default App;
