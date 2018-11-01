import React from 'react';
import { Grid, GridInner, GridCell, ChipSet, Chip } from '../../../components/ui';
import { CANCEL, PETS } from '../../../constants';

const clearFix = {
  margin: '1rem'
};

/**
 * Demo: ChipSet
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell>
        <ChipSet choice>
          <Chip>Cat</Chip>
          <Chip>Dog</Chip>
        </ChipSet>
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell>
        <ChipSet choice>
          <Chip icon={PETS}>Cat</Chip>
          <Chip icon={PETS}>Dog</Chip>
        </ChipSet>
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell>
        <ChipSet choice>
          <Chip icon={CANCEL} onClick={() => {}}>Cat</Chip>
          <Chip icon={CANCEL} onClick={() => {}}>Dog</Chip>
        </ChipSet>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
