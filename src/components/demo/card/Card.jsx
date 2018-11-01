import React from 'react';
import { Grid, GridInner, GridCell, Card, CardActions, CardActionButtons, Button, CardActionIcons, IconButton, Typography } from '../../../components/ui';
import { HEADLINE, SUBTITLE, BODY, DONE, DONE_ALL } from '../../../constants';

const clearFix = {
  padding: '1rem'
};

const mdcAction = 'mdc-card__action';
const mdcActionButton = 'mdc-card__action--button';
const mdcActionIcon = 'mdc-card__action--icon';

/**
 * Demo: Card
 */
const Demo = () => (
  <Grid>
    <GridInner style={{ margin: '1rem' }}>
      <GridCell col={3}>
        <Card>
          <div style={clearFix}>
            <Typography type={HEADLINE} size={6}>Title</Typography>
            <Typography element={'p'} type={SUBTITLE} size={2}>SubTitle</Typography>
          </div>
          <div style={clearFix}>
            <Typography type={BODY} size={2}>Lorem Ipsum Dolor Sit Amet</Typography>
          </div>
        </Card>
      </GridCell>

      <GridCell col={1}></GridCell>

      <GridCell col={3}>
        <Card>
          <div style={clearFix}>
            <Typography type={HEADLINE} size={6}>Title</Typography>
            <Typography element={'p'} type={SUBTITLE} size={2}>SubTitle</Typography>
          </div>
          <div style={clearFix}>
            <Typography type={BODY} size={2}>Lorem Ipsum Dolor Sit Amet</Typography>
          </div>
          <CardActions>
            <CardActionButtons>
              <Button classes={[mdcAction, mdcActionButton]}>
                Done
              </Button>
              <Button classes={[mdcAction, mdcActionButton]}>
                Done All
              </Button>
            </CardActionButtons>
          </CardActions>
        </Card>
      </GridCell>

      <GridCell col={1}></GridCell>

      <GridCell col={3}>
        <Card>
          <div style={clearFix}>
            <Typography type={HEADLINE} size={6}>Title</Typography>
            <Typography element={'p'} type={SUBTITLE} size={2}>SubTitle</Typography>
          </div>
          <div style={clearFix}>
            <Typography type={BODY} size={2}>Lorem Ipsum Dolor Sit Amet</Typography>
          </div>
          <CardActions>
            <CardActionButtons>
              <Button classes={[mdcAction, mdcActionButton]}>
                Done
              </Button>
              <Button classes={[mdcAction, mdcActionButton]}>
                Done All
              </Button>
            </CardActionButtons>
            <CardActionIcons>
              <IconButton classes={[mdcAction, mdcActionIcon]} font={DONE} />
              <IconButton classes={[mdcAction, mdcActionIcon]} font={DONE_ALL} />
            </CardActionIcons>
          </CardActions>
        </Card>
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
