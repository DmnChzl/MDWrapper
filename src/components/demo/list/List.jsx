import React from 'react';
import { Grid, GridInner, GridCell, List } from '../../../components/ui';
import { FOLDER, INFO } from '../../../constants';

const clearFix = {
  margin: '1rem'
};

/**
 * Demo: List
 */
const Demo = () => (
  <Grid>
    <GridInner style={clearFix}>
      <GridCell col={4}>
        <List data={[
          {
            leadingIcon: FOLDER,
            title: 'First'
          },
          {
            leadingIcon: FOLDER,
            title: 'Second'
          },
          '',
          {
            title: 'Third',
            trailingIcon: INFO
          },
          {
            title: 'Four',
            trailingIcon: INFO
          }
        ]} onClick={item => console.log(item)} />
      </GridCell>
    </GridInner>

    <GridInner style={clearFix}>
      <GridCell col={4}>
        <List data={[
          {
            leadingIcon: FOLDER,
            title: 'First',
            subTitle: 'Sub First'
          },
          {
            leadingIcon: FOLDER,
            title: 'Second',
            subTitle: 'Sub Second'
          },
          '',
          {
            title: 'Third',
            subTitle: 'Sub Third',
            trailingIcon: INFO
          },
          {
            title: 'Four',
            subTitle: 'Sub Four',
            trailingIcon: INFO
          }
        ]} onClick={item => console.log(item)} />
      </GridCell>
    </GridInner>
  </Grid>
);

export default Demo;
