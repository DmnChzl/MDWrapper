import React from 'react';
import { Grid, GridInner, GridCell, CheckBox } from '../../../components/ui';

/**
 * Demo: CheckBox
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell>
        <CheckBox label={'CheckBox'} checked />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
