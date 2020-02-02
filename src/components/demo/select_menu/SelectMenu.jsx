import React from 'react';
import { Grid, GridInner, GridCell, SelectMenu } from '../../../components/ui';
import { BRUSH } from '../../../constants';

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
          onClick={value => console.log(value)} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <SelectMenu
          label={'Hue'}
          data={['Red', 'Green', 'Blue']}
          onClick={value => console.log(value)}
          outlined />
      </GridCell>
    </GridInner>
    
    <GridInner style={clearFix}>
      <GridCell col={6}>
        <SelectMenu
          label={'Fruit'}
          data={['Apple', 'Banana', 'Clementine']}
          helper={'Need Help ?'}
          onClick={value => console.log(value)} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={6}>
        <SelectMenu
          label={'Hue'}
          data={['Red', 'Green', 'Blue']}
          icon={BRUSH}
          onClick={value => console.log(value)}
          outlined />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
