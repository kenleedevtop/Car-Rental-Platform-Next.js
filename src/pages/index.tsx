import React, { useEffect, useState } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';
import { Grid, GridCell } from 'components/system';
import { Card, Checkbox, TextField } from 'components/ui';
import { NotificationsCard } from 'components/custom';
import { SearchIcon } from 'components/svg';

const Home = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  const [state, setState] = useState('');

  return (
    <>
      <Title>Home</Title>
      <Grid columns={4}>
        <GridCell columnSpan={3}>
          <Grid columns={4}>
            <GridCell>
              <Card style={{ height: 180 }}>...</Card>
            </GridCell>
            <GridCell>
              <Card style={{ height: 180 }}>...</Card>
            </GridCell>
            <GridCell>
              <Card style={{ height: 180 }}>...</Card>
            </GridCell>
            <GridCell>
              <Card style={{ height: 180 }}>...</Card>
            </GridCell>
            <GridCell columnSpan={4}>
              <Card style={{ height: 650 }}>
                <TextField
                  value={state}
                  onValue={setState}
                  label="Campaign"
                  placeholder="Please select"
                  endIcon={<SearchIcon />}
                />
              </Card>
            </GridCell>
          </Grid>
        </GridCell>
        <GridCell>
          <Grid columns={1}>
            <GridCell>
              <NotificationsCard />
            </GridCell>
            <GridCell>
              <Card style={{ height: 300 }}>
                <Checkbox size="large" color="secondary" label="Selected" />
              </Card>
            </GridCell>
          </Grid>
        </GridCell>
      </Grid>
    </>
  );
};

export default Home;
