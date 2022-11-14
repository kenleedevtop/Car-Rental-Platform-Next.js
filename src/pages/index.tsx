import React, { useEffect, useState } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';
import { Grid, GridCell } from 'components/system';
import { Card, Checkbox, Switch, TextField } from 'components/ui';
import { CardWithChart, NotificationsCard } from 'components/custom';
import { SearchIcon } from 'components/svg';

const Home = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  const [switchState, setSwitchState] = useState(false);
  const [state, setState] = useState('');

  return (
    <>
      <Title>Home</Title>
      <Grid columns={4}>
        <GridCell columnSpan={3}>
          <Grid columns={4}>
            <CardWithChart
              title="To Be Created"
              icon={<SearchIcon />}
              percent={2}
              count={75}
            />
            <CardWithChart
              title="To Be Sent"
              icon={<SearchIcon />}
              percent={47}
              count={15}
            />
            <CardWithChart
              title="Waiting Feedback"
              icon={<SearchIcon />}
              percent={-15}
              count={32}
            />
            <CardWithChart
              title="Approved"
              icon={<SearchIcon />}
              percent={13}
              count={213}
            />
            <GridCell columnSpan={4}>
              <Card style={{ height: 650 }}>
                <Switch
                  value={switchState}
                  onValue={setSwitchState}
                  label="Patients"
                />
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
