import React from 'react';
import { Grid, GridInner, GridCell, Button, Icon } from '../../../components/ui';
import { DONE, DONE_ALL, DONE_OUTLINE } from '../../../constants';

const clearFix = {
  margin: '1rem'
};

const mdcIcon = 'mdc-button__icon';

/**
 * Demo: Button
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell>
        <Button>Flat</Button>
      </GridCell>
      <GridCell>
        <Button dense>Dense</Button>
      </GridCell>
      <GridCell>
        <Button>
          <Icon font={DONE} classes={[mdcIcon]} />
          Flat
        </Button>
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell>
        <Button raised>Raised</Button>
      </GridCell>
      <GridCell>
        <Button raised dense>Dense</Button>
      </GridCell>
      <GridCell>
        <Button raised>
          <Icon font={DONE_ALL} classes={[mdcIcon]} />
          Raised
        </Button>
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell>
        <Button outlined>Outlined</Button>
      </GridCell>
      <GridCell>
        <Button outlined dense>Dense</Button>
      </GridCell>
      <GridCell>
        <Button outlined>
          <Icon font={DONE_OUTLINE} classes={[mdcIcon]} />
          Outlined
        </Button>
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell>
        <Button unelevated>Unelevated</Button>
      </GridCell>
      <GridCell>
        <Button unelevated dense>Dense</Button>
      </GridCell>
      <GridCell>
        <Button unelevated>
          <Icon font={DONE_ALL} classes={[mdcIcon]} />
          Unelevated
        </Button>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
