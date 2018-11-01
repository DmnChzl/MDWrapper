import React from 'react';
import { Grid, GridInner, GridCell, LinearProgress } from '../../../components/ui';

const clearFix = {
  margin: '1rem',
  padding: '1rem'
};

/**
 * Demo: LinearProgress
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell col={6}>
        <LinearProgress value={25} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <LinearProgress value={75} reversed />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <LinearProgress indeterminate />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <LinearProgress value={25} buffered />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <LinearProgress value={75} buffered reversed />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
