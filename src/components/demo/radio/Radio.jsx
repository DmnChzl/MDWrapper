import React from 'react';
import { Grid, GridInner, GridCell, Radio } from '../../../components/ui';

/**
 * Demo: Radio
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell>
        <Radio name={'animal'} label={'Cat'} checked />
        <Radio name={'animal'} label={'Dog'} />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
