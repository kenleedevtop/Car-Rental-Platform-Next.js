import React from 'react';
import { Title } from 'components/core';
import { Button, TextField } from 'components/ui';
import { Navigation, Sidebar } from 'components/custom';

const Home = () => (
  <>
    <Title>Home</Title>
    <Navigation routeName="Home" />
    <Sidebar />
    <TextField label="Full name" />
  </>
);

export default Home;
