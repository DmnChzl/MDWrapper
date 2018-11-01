import React from 'react';
import { Grid, GridInner, GridCell, Typography } from '../../../components/ui';
import { TOP, MIDDLE, BOTTOM } from '../../../constants';

const clearFix = {
  backgroundColor: '#e0e0e0',
  borderRadius: 4,
  padding: '1rem'
};

/**
 * Demo: Layout
 */
const Demo = () => (
  <Grid style={{ backgroundColor: '#f5f5f5', borderRadius: 4, margin: '1rem' }}>
    <GridInner style={{ height: 200 }}>
      <GridCell style={clearFix} vAlign={TOP}>
        <Typography>--span-4</Typography>
      </GridCell>
      <GridCell vAlign={MIDDLE}>
        <GridInner>
          <GridCell col={6} style={clearFix}>
            <Typography>--span-6</Typography>
          </GridCell>
          <GridCell col={6} style={clearFix}>
            <Typography>--span-6</Typography>
          </GridCell>
        </GridInner>
      </GridCell>
      <GridCell vAlign={BOTTOM}>
        <GridInner>
          <GridCell col={3} style={clearFix}>
            <Typography>--span-3</Typography>
          </GridCell>
          <GridCell col={3} style={clearFix}>
            <Typography>--span-3</Typography>
          </GridCell>
          <GridCell col={3} style={clearFix}>
            <Typography>--span-3</Typography>
          </GridCell>
          <GridCell col={3} style={clearFix}>
            <Typography>--span-3</Typography>
          </GridCell>
        </GridInner>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
