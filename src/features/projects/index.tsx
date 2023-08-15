import React, { useState } from 'react';

import { ProjectsMain, ProjectsGrid } from 'features/projects/styles';
import { PropertyCard, Tabs } from 'components/custom';

const HelpPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <ProjectsMain>
      <Tabs
        value={tab}
        onValue={setTab}
        tabs={['Bidding', 'Ongoing', 'Completed']}
      />
      {tab === 0 && (
        <ProjectsGrid>
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
        </ProjectsGrid>
      )}
      {tab === 1 && (
        <ProjectsGrid>
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
          />
        </ProjectsGrid>
      )}

      {tab === 2 && (
        <ProjectsGrid>
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            bids={6}
            link="/projects/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
        </ProjectsGrid>
      )}
    </ProjectsMain>
  );
};

export default HelpPage;
