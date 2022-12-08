import React from 'react';

import {
  HeaderMain,
  HeaderLogo,
  HeaderActions,
} from 'components/custom/header/styles';
import { Button } from 'components/ui';

const Header = ({ ...props }) => (
  <HeaderMain {...props}>
    <HeaderLogo src="/assets/images/logo.png" />
    <HeaderActions>
      <Button variant="text" size="large">
        Login
      </Button>
      <Button variant="contained" color="secondary" size="large">
        SIGN UP
      </Button>
    </HeaderActions>
  </HeaderMain>
);

export default Header;
