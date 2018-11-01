import React from 'react';
import { Grid, GridInner, GridCell, Switch } from '../../../components/ui';

/**
 * Demo: Switch
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell>
        <Switch label={'Switch'} checked />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
