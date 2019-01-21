import React from 'react';
import { Grid, GridInner, GridCell, SelectMenu } from '../../../components/ui';

const clearFix = {
  margin: '1rem',
  padding: '1rem'
};

/**
 * Demo: SelectMenu
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell col={6}>
        <SelectMenu
          label={'Fruit'}
          data={['Apple', 'Banana', 'Clementine']}
          onChange={e => console.log(e.target.value)} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <SelectMenu
          label={'Hue'}
          data={['Red', 'Green', 'Blue']}
          onChange={e => console.log(e.target.value)}
          outlined />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
