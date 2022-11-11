import React from 'react';
import { Title } from 'components/core';
import { Button } from 'components/ui';

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
  </>
);

export default Home;
