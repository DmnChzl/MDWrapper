import React from 'react';
import { Grid, GridInner, GridCell, Slider } from '../../../components/ui';

const clearFix = {
  margin: '1rem',
  padding: '1rem'
};

/**
 * Demo: Slider
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell col={6}>
        <Slider min={1} max={99} value={25} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <Slider min={1} max={99} value={50} discrete />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <Slider min={1} max={99} value={75} discrete displayMarkers />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
