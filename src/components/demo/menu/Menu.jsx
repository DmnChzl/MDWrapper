import React, { Component } from 'react';
import { Grid, GridInner, GridCell, Button, Menu } from '../../../components/ui';

/**
 * Demo: Menu
 */
class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };
  }

  showMenu = () => {
    this.setState({ display: true });
  }

  hideMenu = label => {
    console.log(label);
    this.setState({ display: false });
  }

  render() {
    const { display } = this.state;

    return (
      <Grid>
        <GridInner style={{ margin: '1rem' }}>
          <GridCell>
            <div id="menu-anchor">
              <Button onClick={() => this.showMenu()}>
                Menu
              </Button>
              <Menu
                open={display}
                data={['First', 'Second', '', 'Third', 'Four']}
                onClick={label => this.hideMenu(label)} />
            </div>
          </GridCell>
        </GridInner>
      </Grid>
    );
  }
}

export default Demo;
