import React, { useState } from 'react';
import {
  AmbasadorsPageMain,
  AmbasadorsPageCharts,
} from 'features/ambasadors/style';
import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
import { ContactedIcon, IdentifiedIcon, RegisteredIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Pagination } from 'components/ui';
import { Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { DAmbasadorsHead } from 'features/ambasadors/data';
import { useModal } from 'hooks';
import {
  AmbasadorsProfile,
  ContactAmbasadorsModal,
  DeleteAmbasadorsModal,
  NoteAmbasadors,
  ScheduleAmbasadorsModal,
} from 'features/ambasadors/role/admin/elements';

const AdminAmbasadorsPage = () => {
  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [tabs, setTabs] = useState(0);

  const [daModal, openDaModal, closeDaModal] = useModal(false);
  const [caModal, openCaModal, closeCaModal] = useModal(false);
  const [saModal, openSaModal, closeSaModal] = useModal(false);
  const [apModal, openApModal, closeApModal] = useModal(false);
  const [naModal, openNaModal, closeNaModal] = useModal(false);

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
            value={tabs}
            onValue={setTabs}
            tabs={['Registered', 'Approved', 'Clients']}
          />
          <Table head={DAmbasadorsHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openDaModal}>
              Delete Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openCaModal}>
              Contact Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openSaModal}>
              Schedule Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openApModal}>
              Ambasador Profile
            </Button>
            <Button color="primary" variant="contained" onClick={openNaModal}>
              Note Ambasador
            </Button>
          </Stack>
        </Stack>
      </CardWithText>
      {daModal && <DeleteAmbasadorsModal onClose={closeDaModal} />}
      {caModal && <ContactAmbasadorsModal onClose={closeCaModal} />}
      {saModal && <ScheduleAmbasadorsModal onClose={closeSaModal} />}
      {apModal && <AmbasadorsProfile onClose={closeApModal} />}
      {naModal && <NoteAmbasadors onClose={closeNaModal} />}
    </AmbasadorsPageMain>
  );
};

export default AdminAmbasadorsPage;
