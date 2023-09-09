import React, { useEffect, useState } from 'react';

import { PropertyCard, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import { Button } from 'components/ui';
import { ProjectsMain, ProjectsGrid } from 'features/opportunities/styles';
import { useModal, useSnackbar } from 'hooks';
import { ICar } from 'api/cars/types';
import CarAPI from 'api/cars';
import { SellModal } from './elements';
import { useAppContext } from 'context';

const UserMarketPage = () => {
  const { houseStatus } = useAppContext();
  const [tab, setTab] = useState(0);
  const { push } = useSnackbar();

  const [purchaseModal, openPurchaseModal, closePurchaseModal] =
    useModal(false);

  const [primaryCars, setPrimaryCars] = useState<ICar[]>([]);
  const [secondaryCars, setSecondaryCars] = useState<ICar[]>([]);
  const [completedCars, setCompletedCars] = useState<ICar[]>([]);

  const getAllCars = async (search: string, status: string): Promise<any> => {
    try {
      const response = await CarAPI.getAll(search, status);
      if (response) {
        return response;
      }

      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  const getMineCars = async () => {
    try {
      const response = await CarAPI.getMine();
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
        const primary = await getAllCars('', 'Primary');
        setPrimaryCars(primary);
        break;
      case 1:
        const secondary = await getAllCars('', 'Secondary');
        setSecondaryCars(secondary);
        break;
      case 2:
        const completed = await getAllCars('', 'Completed');
        setCompletedCars(completed);
        break;
      case 3:
        const mine = await getMineCars();
        setCompletedCars(mine);
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
          tabs={[
            'Primary Market',
            'Secondary Market',
            'Completed',
            'My Supercars',
          ]}
        />
      </Stack>
      {tab === 0 && (
        <ProjectsGrid>
          {primaryCars?.map((house: ICar) => {
            return (
              <PropertyCard
                key={house.id}
                link={`/cars/overview?carId=${house.id}`}
                image={house.images.find(
                  (item) => item.id === house.thumbnailId
                )}
                house={house}
                refresh={refresh}
                label="Apply"
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
                link={`/cars/overview?carId=${house.id}`}
                image={house.images.find(
                  (item) => item.id === house.thumbnailId
                )}
                house={house}
                refresh={refresh}
                label="Apply"
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
                link={`/cars/overview?carId=${house.id}`}
                image={house.images.find(
                  (item) => item.id === house.thumbnailId
                )}
                house={house}
                refresh={refresh}
                label="Apply"
                completed
              />
            );
          })}
        </ProjectsGrid>
      )}
      <Stack direction="horizontal">
        <Button variant="contained" color="primary" onClick={openPurchaseModal}>
          Sell Shares Modal
        </Button>
      </Stack>
      {purchaseModal && <SellModal onClose={closePurchaseModal} />}
    </ProjectsMain>
  );
};

export default UserMarketPage;
