import React from 'react';
import { Grid, GridInner, GridCell, Icon } from '../../../components/ui';
import { STAR_BORDER } from '../../../constants';

/**
 * Demo: Icon
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell>
        <Icon font={STAR_BORDER} />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
