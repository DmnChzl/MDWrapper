import React from 'react';
import { Grid, GridInner, GridCell, IconButton } from '../../../components/ui';
import { STAR_BORDER } from '../../../constants';

/**
 * Demo: IconButton
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell>
        <IconButton code={STAR_BORDER} />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
