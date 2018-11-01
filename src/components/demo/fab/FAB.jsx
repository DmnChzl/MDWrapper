import React from 'react';
import { Grid, GridInner, GridCell, FAB, Icon } from '../../../components/ui';
import { CREATE } from '../../../constants';

const clearFix = {
  margin: '1rem'
};

const mdcIcon = 'mdc-fab__icon';

/**
 * Demo: FAB
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell>
        <FAB>
          <Icon classes={[mdcIcon]} font={CREATE} />
        </FAB>
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell>
        <FAB label={'Create'}>
          <Icon classes={[mdcIcon]} font={CREATE} />
        </FAB>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
