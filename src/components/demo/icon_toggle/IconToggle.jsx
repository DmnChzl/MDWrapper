import React from 'react';
import { Grid, GridInner, GridCell, IconToggle } from '../../../components/ui';

/**
 * Demo: IconToggle
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell>
        <IconToggle />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
