import React, { Component } from 'react';
import { Grid, GridInner, GridCell, Button, Dialog, DialogActions, DialogContent } from '../../../components/ui';

const mdcButton = 'mdc-dialog__button';

/**
 * Demo: Dialog
 */
class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };
  }

  showDialog = () => {
    this.setState({ display: true });
  }

  hideDialog = () => {
    this.setState({ display: false });
  }

  render() {
    const { display } = this.state;
    
    return (
      <Grid>
        <GridInner style={{ margin: '1rem' }}>
          <GridCell>
            <Button onClick={() => this.showDialog()}>
              Dialog
            </Button>
          </GridCell>
        </GridInner>

        <Dialog open={display}>
          <DialogContent>
            Hello World
          </DialogContent>
          <DialogActions>
            <Button classes={[mdcButton]} onClick={() => this.hideDialog()}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
}

export default Demo;
