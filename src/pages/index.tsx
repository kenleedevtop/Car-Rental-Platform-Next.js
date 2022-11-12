import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';
import { CardWithText } from 'components/custom';
import { Button } from '@mui/material';

const Home = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  return (
    <>
      <Title>Home</Title>
      Home
      <CardWithText
        title="All influencers"
        description="More than 290+ new Influencers"
        actions={[
          <Button color="secondary" variant="contained" size="small">
            Filter
          </Button>,
          <Button color="default" variant="contained" size="small">
            Export
          </Button>,
          <Button color="primary" variant="contained" size="small">
            Add influencers
          </Button>,
        ]}
      />
    </>
  );
};

export default Home;
