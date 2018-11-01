import React, { Component } from 'react';
import { object, arrayOf, string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TabBar, TabScroller, Tab, TabIndicator } from './ui';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  goToTab = active => {
    const { history, tabs } = this.props;

    this.setState({ active });

    const pathname = tabs[active].toLowerCase().replace(/\s/g, '_');

    history.push({ pathname });
  }

  render() {
    const { tabs } = this.props;
    const { active } = this.state;

    return (
      <TabBar>
        <TabScroller>
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              active={active === idx} 
              label={tab}
              onClick={() => this.goToTab(idx)}>
              <TabIndicator active={active === idx} underline />
            </Tab>
          ))}
        </TabScroller>
      </TabBar>
    );
  }
}

Header.propTypes = {
  history: object,
  tabs: arrayOf(string)
};

export default withRouter(Header);
