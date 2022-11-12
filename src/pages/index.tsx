import React from 'react';
import { Title } from 'components/core';
import { Button, TextField } from 'components/ui';
import { Navigation, Sidebar } from 'components/custom';
import { SearchIcon } from 'components/svg';

const Home = () => (
  <>
    <Title>Home</Title>
    <Navigation routeName="Home" />
    <Sidebar />
    <TextField label="Full name" startIcon={<SearchIcon />} />
  </>
);

export default Home;
