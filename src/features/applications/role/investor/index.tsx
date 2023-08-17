import React from 'react';
import {
  ProjectsMain,
  MarketTableItem,
  MarketTableItemImage,
  MarketTableItemLabel,
} from 'features/opportunities/styles';
import { CardWithText, Table } from 'components/custom';
import { Pagination } from 'components/ui';
import { DApplicationsHead } from 'features/applications/data';
import { Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';

const UserApplicationsPage = () => {
  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'house') {
      return (
        <MarketTableItem>
          <MarketTableItemImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s" />
          <MarketTableItemLabel>8 Bedroom</MarketTableItemLabel>
        </MarketTableItem>
      );
    }
    if (headItem.reference === 'theme') {
      return 'Marketing';
    }
    if (headItem.reference === 'location') {
      return 'Zagreb';
    }
    if (headItem.reference === 'type') {
      return 'Low Priority';
    }
    if (headItem.reference === 'rent') {
      return '€250';
    }
    if (headItem.reference === 'status') {
      return 'Applied';
    }

    return '';
  };

  return (
    <ProjectsMain>
      <CardWithText title="My Applications">
        <Stack>
          <Table
            head={DApplicationsHead}
            items={[
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
            ]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
    </ProjectsMain>
  );
};

export default UserApplicationsPage;
