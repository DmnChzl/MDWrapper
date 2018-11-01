import React from 'react';
import { Grid, GridInner, GridCell, Typography } from '../../../components/ui';
import { HEADLINE, SUBTITLE, BODY } from '../../../constants';

const clearFix = {
  margin: '1rem'
};

/**
 * Demo: Typography
 */
const Demo = () => (
  <Grid>
    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={HEADLINE} size={1}>Headline 1</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={HEADLINE} size={2}>Headline 2</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={HEADLINE} size={3}>Headline 3</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={HEADLINE} size={4}>Headline 4</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={HEADLINE} size={5}>Headline 5</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={HEADLINE} size={6}>Headline 6</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={SUBTITLE} size={1}>SubTitle 1</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={SUBTITLE} size={2}>SubTitle 2</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={BODY} size={1}>Body 1</Typography>
      </GridCell>
    </GridInner>

    <GridInner>
      <GridCell style={clearFix}>
        <Typography type={BODY} size={2}>Body 2</Typography>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
