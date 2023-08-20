import React, { useState } from 'react';

import { PropertyCard, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import { Button } from 'components/ui';
import { ProjectsMain, ProjectsGrid } from 'features/opportunities/styles';
import { useModal } from 'hooks';
import { AddProjectModal } from './elements';

const AdminMarketPage = () => {
  const [tab, setTab] = useState(0);

  const [addProjectModal, openAddProjectModal, closeAddProjectModal] =
    useModal(false);

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
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
        </ProjectsGrid>
      )}
      {tab === 1 && (
        <ProjectsGrid>
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            status="Not applied"
            label="View"
            dropdownAdmin
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
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
            status="Not applied"
            label="View"
            dropdownAdmin
          />
          <PropertyCard
            spots={8}
            availableSpots={8}
            rent={250}
            theme="Marketing"
            link="/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
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
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
            status="Not applied"
          />
        </ProjectsGrid>
      )}
      {addProjectModal && <AddProjectModal onClose={closeAddProjectModal} />}
    </ProjectsMain>
  );
};

export default AdminMarketPage;
