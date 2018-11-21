import React from 'react';
import { TopBar, TopBarIcon } from '../../../components/ui';

/**
 * Demo: TopBar
 */
const Demo = () => (
  <TopBar title="Menu" onClick={() => console.log('Menu')}>
    <TopBarIcon font="file_download" onClick={() => console.log('File Download')} />
  </TopBar>
);

export default Demo;
