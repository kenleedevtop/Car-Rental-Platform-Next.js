import React from 'react';
import {
  AmbasadorsPageMain,
  AmbasadorsPageCharts,
} from 'features/ambasadors/style';
import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
import { ContactedIcon, IdentifiedIcon, RegisteredIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { Pagination } from 'components/ui';
import { Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { DAmbasadorsHead } from 'features/ambasadors/data';

const AdminAmbasadorsPage = () => {
  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <AmbasadorsPageMain>
      <AmbasadorsPageCharts>
        <CardWithChart
          title="Registered"
          icon={<IdentifiedIcon />}
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
          title="Approved"
          icon={<ContactedIcon />}
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
          title="Clients"
          icon={<RegisteredIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </AmbasadorsPageCharts>
      <CardWithText title="Ambassadors" description="3 new Ambassadors">
        <Stack>
          <Tabs
            value={0}
            onValue={() => {}}
            tabs={['Registered', 'Approved', 'Clients']}
          />
          <Table head={DAmbasadorsHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
    </AmbasadorsPageMain>
  );
};

export default AdminAmbasadorsPage;
