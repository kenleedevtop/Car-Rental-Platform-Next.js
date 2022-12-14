import React from 'react';

import {
  HeaderMain,
  HeaderLogo,
  HeaderActions,
} from 'components/custom/header/styles';

import { SignUpModal } from 'components/custom/header/elements';

import { Button } from 'components/ui';
import { useModal } from 'hooks';

const Header = ({ ...props }) => {
  const [spModal, openSpModal, closeSpModal] = useModal(false);

  return (
    <>
      <HeaderMain {...props}>
        <HeaderLogo src="/assets/images/logo.png" />
        <HeaderActions>
          <Button variant="text" size="large">
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={openSpModal}
          >
            SIGN UP
          </Button>
        </HeaderActions>
      </HeaderMain>
      {spModal && <SignUpModal onClose={closeSpModal} />}
    </>
  );
};

export default Header;
