import React from 'react';
import { Title } from 'components/core';
import { Button } from 'components/ui';
import Sidebar from 'components/custom/sidebar';

const Home = () => (
  <>
    <Title>Home</Title>
    <Button color="primary" variant="contained">
      Filters
    </Button>
    <Button color="default" variant="contained">
      Export
    </Button>
    <Button color="secondary" variant="contained">
      Add Influencer
    </Button>
    <Sidebar />
  </>
);

export default Home;
