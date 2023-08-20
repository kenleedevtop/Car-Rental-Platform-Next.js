import React, { useState } from 'react';
import { ProjectsMain, ProjectsGrid } from 'features/opportunities/styles';
import { PropertyCard, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import { Button } from 'components/ui';
import { useModal } from 'hooks';
import {
  ApplicationModal,
  PurchaseModal,
} from 'features/opportunities/role/investor/elements';

const InvestorMarketPage = () => {
  const [tab, setTab] = useState(0);

  const [applicationModal, openApplicationModal, closeApplicationModal] =
    useModal(false);
  const [purchaseModal, openPurchaseModal, closePurchaseModal] =
    useModal(false);

  return (
    <ProjectsMain>
      <Tabs
        value={tab}
        onValue={setTab}
        tabs={['Primary Market', 'Secondary Market', 'Completed', 'My Boats']}
      />
      {tab === 0 && (
        <ProjectsGrid>
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdown
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdown
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdown
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdown
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdown
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdown
          />
        </ProjectsGrid>
      )}
      {tab === 1 && (
        <ProjectsGrid>
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
        </ProjectsGrid>
      )}

      {tab === 2 && (
        <ProjectsGrid>
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            completed
            status="Not applied"
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            completed
            status="Not applied"
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            completed
            status="Not applied"
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            completed
            status="Not applied"
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            completed
            status="Not applied"
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            completed
            status="Not applied"
          />
        </ProjectsGrid>
      )}

      {tab === 3 && (
        <ProjectsGrid>
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            dropdownOwned
          />
        </ProjectsGrid>
      )}
      <Stack direction="horizontal">
        <Button
          variant="contained"
          color="primary"
          onClick={openApplicationModal}
        >
          Application Modal
        </Button>
        <Button variant="contained" color="primary" onClick={openPurchaseModal}>
          Sell Shares Modal
        </Button>
      </Stack>

      {applicationModal && <ApplicationModal onClose={closeApplicationModal} />}
      {purchaseModal && <PurchaseModal onClose={closePurchaseModal} />}
    </ProjectsMain>
  );
};

export default InvestorMarketPage;
