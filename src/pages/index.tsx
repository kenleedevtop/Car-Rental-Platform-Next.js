import React, { useEffect, useState } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { Grid, GridCell } from 'components/system';
import { Button, Switch, Input, Pagination } from 'components/ui';
import {
  CardWithChart,
  CardWithText,
  NotificationsCard,
  Tabs,
} from 'components/custom';
import { SearchIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import dayjs, { Dayjs } from 'dayjs';

const Home = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  const [switchState, setSwitchState] = useState(false);
  const [state, setState] = useState('');
  const [value, onValue] = useState(0);

  const [select, onSelect] = useState(null);
  const [mSelect, onMSelect] = useState([]);
  const [date, setDate] = useState<Dayjs | null>(dayjs('2014-08-18T21:11:54'));

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
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
            />
            <CardWithChart
              title="To Be Sent"
              icon={<SearchIcon />}
              percent={47}
              count={15}
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
            />
            <CardWithChart
              title="Waiting Feedback"
              icon={<SearchIcon />}
              percent={-15}
              count={32}
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
            />
            <CardWithChart
              title="Approved"
              icon={<SearchIcon />}
              percent={13}
              count={213}
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
            />
            <GridCell columnSpan={4}>
              <CardWithText
                title="Discover Influencers"
                description="More than 290+ new Influencers"
                actions={[
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<SearchIcon style={{ width: 16, height: 16 }} />}
                    key="filters"
                  >
                    Filters
                  </Button>,
                  <Button color="default" variant="contained" key="export">
                    Export
                  </Button>,
                  <Button
                    color="primary"
                    variant="contained"
                    key="add-influencer"
                  >
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
                  <Input
                    type="text"
                    value={state}
                    onValue={setState}
                    label="Test"
                  />
                  <Input
                    type="number"
                    value={state}
                    onValue={setState}
                    min={1}
                    max={5}
                    label="Test"
                  />
                  <Input
                    type="select"
                    value={select}
                    onValue={onSelect}
                    label="Select"
                    options={[
                      { value: 1, label: 'Hello' },
                      { value: 2, label: 'World' },
                    ]}
                  />
                  <Input
                    type="multiselect"
                    value={mSelect}
                    onValue={onMSelect}
                    label="Mutli Select"
                    options={[
                      { value: 1, label: 'Hello' },
                      { value: 2, label: 'World' },
                    ]}
                  />
                  <Input
                    type="date"
                    value={date}
                    onValue={setDate}
                    label="Date"
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
            <Tabs
              value={value}
              onValue={onValue}
              tabs={['Tab 1', 'Tab 2', 'Tab 3']}
            />
            <Pagination count={10} />
          </Grid>
        </GridCell>
      </Grid>
    </>
  );
};

export default Home;
