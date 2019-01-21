import React, { Component } from 'react';
import { Grid, GridInner, GridCell, Button, SnackBar } from '../../../components/ui';

/**
 * Demo: SnackBar
 */
class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };
  }

  showSnackBar = () => {
    this.setState({ display: true });

    setTimeout(() => {
      this.setState({ display: false });
    }, 5 * 1000);
  }

  hideSnackBar = () => {
    this.setState({ display: false });
  }

  render() {
    const { display } = this.state;

    return (
      <Grid>
        <GridInner style={{ margin: '1rem' }}>
          <GridCell>
            <Button onClick={() => this.showSnackBar()}>
              SnackBar
            </Button>
            <SnackBar open={display} label={'Close'} onClick={() => this.hideSnackBar()} leading>
              Hello World
            </SnackBar>
          </GridCell>
        </GridInner>
      </Grid>
    );
  }
}

export default Demo;
