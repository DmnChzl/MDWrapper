import React from 'react';
import { Grid, GridInner, GridCell, TextField } from '../../../components/ui';
import { REPLY, REPLY_ALL } from '../../../constants';

const clearFix = {
  margin: '1rem'
};

/**
 * Demo: TextField
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField label={'Classic'} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField label={'Classic'} icon={REPLY} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField label={'Classic'} icon={REPLY} trailing />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField label={'Outlined'} outlined />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField label={'Outlined'} icon={REPLY_ALL} outlined />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField label={'Outlined'} icon={REPLY_ALL} outlined trailing />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField placeholder={'Full Width'} fullWidth />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <TextField placeholder={'Full Width'} fullWidth helper={'Need Help ?'} />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
