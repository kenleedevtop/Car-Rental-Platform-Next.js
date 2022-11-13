import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';
import { Grid, GridCell } from 'components/system';
import { Card } from 'components/ui';
import { NotificationsCard } from 'components/custom';
import { Checkbox } from '@mui/material';

const Home = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

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
              <Card style={{ height: 650 }}>...</Card>
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
                ...
                <Checkbox />
              </Card>
            </GridCell>
          </Grid>
        </GridCell>
      </Grid>
    </>
  );
};

export default Home;
