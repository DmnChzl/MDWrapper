import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Button as ButtonSample,
  Card as CardSample,
  ChipSet as ChipSetSample,
  CheckBox as CheckBoxSample,
  Dialog as DialogSample,
  FAB as FABSample,
  Icon as IconSample,
  IconButton as IconButtonSample,
  IconToggle as IconToggleSample,
  Layout as LayoutSample,
  LinearProgress as LinearProgressSample,
  Radio as RadioSample,
  Slider as SliderSample,
  SnackBar as SnackBarSample,
  Switch as SwitchSample,
  TextField as TextFieldSample,
  ThemeProvider as ThemeProviderSample,
  TopBar as TopBarSample,
  Typography as TypographySample
} from './demo';

const Router = () => (
  <Switch>
    <Route exact path="/" component={ButtonSample} />
    <Route path="/button" component={ButtonSample} />
    <Route path="/card" component={CardSample} />
    <Route path="/chipset" component={ChipSetSample} />
    <Route path="/checkbox" component={CheckBoxSample} />
    <Route path="/dialog" component={DialogSample} />
    <Route path="/fab" component={FABSample} />
    <Route path="/icon" component={IconSample} />
    <Route path="/icon_button" component={IconButtonSample} />
    <Route path="/icon_toggle" component={IconToggleSample} />
    <Route path="/layout" component={LayoutSample} />
    <Route path="/linear_progress" component={LinearProgressSample} />
    <Route path="/radio" component={RadioSample} />
    <Route path="/slider" component={SliderSample} />
    <Route path="/snackbar" component={SnackBarSample} />
    <Route path="/switch" component={SwitchSample} />
    <Route path="/textfield" component={TextFieldSample} />
    <Route path="/theme_provider" component={ThemeProviderSample} />
    <Route path="/topbar" component={TopBarSample} />
    <Route path="/typography" component={TypographySample} />
  </Switch>
);

export default Router;
