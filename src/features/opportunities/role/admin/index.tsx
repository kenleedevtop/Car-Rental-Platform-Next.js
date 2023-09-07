import React, { useEffect, useState } from 'react';

import { PropertyCard, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import { Button } from 'components/ui';
import { ProjectsMain, ProjectsGrid } from 'features/opportunities/styles';
import { useModal, useSnackbar } from 'hooks';
import { AddProjectModal } from './elements';
import { ICar } from 'api/cars/types';
import CarAPI from 'api/cars';
import { useAppContext } from 'context';

const AdminMarketPage = () => {
  const { houseStatus } = useAppContext();
  const [tab, setTab] = useState(0);
  const { push } = useSnackbar();

  const [addProjectModal, openAddProjectModal, closeAddProjectModal] =
    useModal(false);

  const [primaryCars, setPrimaryCars] = useState<ICar[]>([]);
  const [secondaryCars, setSecondaryCars] = useState<ICar[]>([]);
  const [completedCars, setCompletedCars] = useState<ICar[]>([]);

  const getAllCars = async (
    search: string,
    marketType: string,
    status: string
  ): Promise<any> => {
    try {
      const response = await CarAPI.getAll(search, marketType, status);

      if (response) {
        return response;
      }

      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  const refresh = async () => {
    switch (tab) {
      case 0:
        const primary = await getAllCars('', 'Primary', '');
        setPrimaryCars(primary);
        break;
      case 1:
        const secondary = await getAllCars('', 'Secondary', '');
        setSecondaryCars(secondary);
        break;
      case 2:
        const completed = await getAllCars('', '', 'Completed');
        setCompletedCars(completed);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    refresh();
  }, [tab, houseStatus]);

  return (
    <ProjectsMain>
      <Stack
        style={{ width: '100%', justifyContent: 'space-between' }}
        direction="horizontal"
      >
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Primary Market', 'Secondary Market', 'Completed']}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={openAddProjectModal}
        >
          Add Project
        </Button>
      </Stack>
      {tab === 0 && (
        <ProjectsGrid>
          {primaryCars?.map((house: ICar) => {
            return (
              <PropertyCard
                key={house.id}
                link={`/cars/overview?houseId=${house.id}`}
                image={house.images.find(
                  (item) => item.id === house.thumbnailId
                )}
                house={house}
                refresh={refresh}
                label="View"
                dropdown
              />
            );
          })}
        </ProjectsGrid>
      )}
      {tab === 1 && (
        <ProjectsGrid>
          {secondaryCars?.map((house: ICar) => {
            return (
              <PropertyCard
                key={house.id}
                link={`/cars/overview?houseId=${house.id}`}
                image={house.images.find(
                  (item) => item.id === house.thumbnailId
                )}
                house={house}
                refresh={refresh}
                label="View"
                dropdown
              />
            );
          })}
        </ProjectsGrid>
      )}

      {tab === 2 && (
        <ProjectsGrid>
          {completedCars?.map((house: ICar) => {
            return (
              <PropertyCard
                key={house.id}
                link={`/cars/overview?houseId=${house.id}`}
                image={house.images.find(
                  (item) => item.id === house.thumbnailId
                )}
                house={house}
                refresh={refresh}
                label="View"
                dropdown
                completed
              />
            );
          })}
        </ProjectsGrid>
      )}
      {addProjectModal && (
        <AddProjectModal onClose={closeAddProjectModal} refresh={refresh} />
      )}
    </ProjectsMain>
  );
};

export default AdminMarketPage;
