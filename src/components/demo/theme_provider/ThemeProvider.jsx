import React from 'react';
import { Grid, GridInner, GridCell, ThemeProvider, Button, Icon } from '../../../components/ui';
import { BRUSH } from '../../../constants';

const mdcIcon = 'mdc-button__icon';

/**
 * Demo: ThemeProvider
 */
const Demo = () => (
  <Grid>
    <GridInner>
      <GridCell col={3}>
        <ThemeProvider primary={'#ff9800'}>
          <Button outlined>Orange</Button>
        </ThemeProvider>
      </GridCell>

      <GridCell col={3}>
        <ThemeProvider primary={'#03a9f4'} onPrimary={'#424242'}>
          <Button raised>Light Blue</Button>
        </ThemeProvider>
      </GridCell>

      <GridCell col={3}>
        <ThemeProvider primary={'#f44336'}>
          <Button outlined>
            <Icon font={BRUSH} classes={[mdcIcon]} />
            Red
          </Button>
        </ThemeProvider>
      </GridCell>

      <GridCell col={3}>
        <ThemeProvider primary={'#8bc34a'} onPrimary={'#424242'}>
          <Button raised>
            <Icon font={BRUSH} classes={[mdcIcon]} />
            Light Green
          </Button>
        </ThemeProvider>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
