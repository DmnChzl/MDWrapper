import React from 'react';
import { string, node } from 'prop-types';
import { BLACK, WHITE } from '../../constants';
import '@material/theme/dist/mdc.theme.css';

const ERROR = '#b00020';
const PRIMARY = '#6200ee';
const SECONDARY = '#018786';

/**
 * MD Component: ThemeProvider
 * 
 * @param {String} background BackGround Color
 * @param {Object} children Node Content
 * @param {String} error Error Color
 * @param {String} onError On Error Color
 * @param {String} onPrimary On Primary Color
 * @param {String} onSecondary On Secondary Color
 * @param {String} onSurface On Surface Color
 * @param {String} primary Primary Color
 * @param {String} secondary Secondary Color
 * @param {String} surface Surface Color
 */
const ThemeProvider = ({ background, children, error, onError, onPrimary, onSecondary, onSurface, primary, secondary, surface }) => {
  // Attribute(s)
  const attrStyle = {
    'style' : {
      '--mdc-theme-background': background,
      '--mdc-theme-error': error,
      '--mdc-theme-on-error': onError,
      '--mdc-theme-on-primary': onPrimary,
      '--mdc-theme-on-secondary': onSecondary,
      '--mdc-theme-on-surface': onSurface,
      '--mdc-theme-primary': primary,
      '--mdc-theme-secondary': secondary,
      '--mdc-theme-surface': surface
    }
  };

  return (
    <div {...attrStyle}>
      {children}
    </div>
  );
};

ThemeProvider.defaultProps = {
  background: WHITE,
  error: ERROR,
  onError: WHITE,
  onPrimary: WHITE,
  onSecondary: BLACK,
  onSurface: BLACK,
  primary: PRIMARY,
  secondary: SECONDARY,
  surface: WHITE
};

ThemeProvider.propTypes = {
  background: string,
  children: node,
  error: string,
  onError: string,
  onPrimary: string,
  onSecondary: string,
  onSurface: string,
  primary: string,
  secondary: string,
  surface: string
};

export default ThemeProvider;
