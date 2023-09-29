import React, { useEffect, useState } from 'react';

import { PropertyCard, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import { ProjectsMain, ProjectsGrid } from 'features/opportunities/styles';
import { useModal, useSnackbar } from 'hooks';
import { ICar } from 'api/cars/types';
import CarAPI from 'api/cars';
import { SellModal } from './elements';
import { useAppContext } from 'context';
import { ApplicationAPI } from 'api';

const UserMarketPage = () => {
  const { houseStatus, applicationStatus } = useAppContext();
  const [tab, setTab] = useState(0);
  const { push } = useSnackbar();

  const [purchaseModal, openPurchaseModal, closePurchaseModal] =
    useModal(false);

  const [primaryCars, setPrimaryCars] = useState<ICar[]>([]);
  const [secondaryCars, setSecondaryCars] = useState<ICar[]>([]);
  const [completedCars, setCompletedCars] = useState<ICar[]>([]);
  const [myCars, setMyCars] = useState<ICar[]>([]);
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

  const getApplications = async () => {
    try {
      const response = await ApplicationAPI.getApplicationsByUserID();
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
        const myapplications = await getApplications();
        primary.forEach((car: ICar) => {
          const matchingApplication = myapplications.find((application: any) => application.carId === car.id);
          if (matchingApplication) {
            car.applicationStatus = matchingApplication.status;
          }
        });
        setPrimaryCars(primary);
        break;
      case 1:
        const secondary = await getAllCars('', 'Secondary');
        const myApplications = await getApplications();
        secondary.forEach((car: ICar) => {
          const matchingApplication = myApplications.find((application: any) => application.carId === car.id);
          if (matchingApplication) {
            car.applicationStatus = matchingApplication.status;
          }
        });
        setSecondaryCars(secondary);
        break;
      case 2:
        const completed = await getAllCars('', 'Completed');
        setCompletedCars(completed);
        break;
      case 3:
        const allCars = await getAllCars('', '');
        const _myapplications = await getApplications();
        const ownershipCars = allCars.filter((car: any) => {
          const application = _myapplications.find((app: any) => app.carId === car.id);
          return application && application.status === "Ownership";
        });
        setMyCars(ownershipCars);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    refresh();
  }, [tab, houseStatus, applicationStatus]);

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
                label={house.applicationStatus == 'Ownership' ? "Book" : "Apply"}
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
                label={house.applicationStatus == 'Ownership' ? "Book" : "Apply"}
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
      {tab === 3 && (
        <ProjectsGrid>
          {myCars?.map((car: ICar) => {
            return (
              <PropertyCard
                key={car.id}
                link={`/cars/overview?carId=${car.id}`}
                image={car.images.find(
                  (item) => item.id === car.thumbnailId
                )}
                house={car}
                refresh={refresh}
                label="Book"
              />
            );
          })}
        </ProjectsGrid>
      )}
      {purchaseModal && <SellModal onClose={closePurchaseModal} />}
    </ProjectsMain>
  );
};

export default UserMarketPage;
