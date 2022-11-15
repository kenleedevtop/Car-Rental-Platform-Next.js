import React, { useEffect, useState } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';
import { Grid, GridCell } from 'components/system';
import { Card, Checkbox, Switch, TextField } from 'components/ui';
import { NotificationsCard, Menu } from 'components/custom';
import { AccountIcon, LogoutIcon, SearchIcon } from 'components/svg';

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
                <Menu
                  items={[
                    { icon: <AccountIcon />, label: 'Account' },
                    { icon: <LogoutIcon />, label: 'Log out' },
                  ]}
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
