import React, { useEffect, useState } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';
import { Grid, GridCell } from 'components/system';
import { Button, Switch, TextField } from 'components/ui';
import {
  CardWithChart,
  CardWithText,
  NotificationsCard,
  Tabs,
} from 'components/custom';
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
              <CardWithText
                title="Discover Influencers"
                description="More than 290+ new Influencers"
                actions={[
                  <Button color="secondary" variant="contained">
                    Filters
                  </Button>,
                  <Button color="default" variant="contained">
                    Export
                  </Button>,
                  <Button color="primary" variant="contained">
                    Add Influencer
                  </Button>,
                ]}
                style={{ height: 650 }}
              >
                <Grid
                  columns={3}
                  style={{
                    border: '1px solid #00000020',
                    borderRadius: 8,
                    padding: 20,
                  }}
                >
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <TextField
                    value={state}
                    onValue={setState}
                    label="Campaign"
                    placeholder="Please select"
                    endIcon={<SearchIcon />}
                  />
                  <Switch
                    value={switchState}
                    onValue={setSwitchState}
                    label="Patients"
                  />
                </Grid>
              </CardWithText>
            </GridCell>
          </Grid>
        </GridCell>
        <GridCell>
          <Grid columns={1}>
            <CardWithText title="Calendar">Hello</CardWithText>
            <NotificationsCard />
            <Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} />
          </Grid>
        </GridCell>
      </Grid>
    </>
  );
};

export default Home;
