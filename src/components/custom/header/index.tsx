import React from 'react';

import {
  HeaderMain,
  HeaderLogo,
  HeaderActions,
  HeaderAction,
} from 'components/custom/header/styles';

import { SignUpModal } from 'components/custom/header/elements';

import { Button } from 'components/ui';
import { useModal } from 'hooks';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Header = ({ ...props }) => {
  const [spModal, openSpModal, closeSpModal] = useModal(false);

  const { t } = useTranslation('common');

  return (
    <>
      <HeaderMain {...props}>
        <Link href="/login">
          <HeaderLogo src="/static/assets/images/logo.png" />
        </Link>
        <HeaderActions>
          <HeaderAction href="/login">
            <Button variant="text" size="large">
              {t('LOGIN')}
            </Button>
          </HeaderAction>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={openSpModal}
          >
            {t('SIGN UP')}
          </Button>
        </HeaderActions>
      </HeaderMain>
      {spModal && <SignUpModal onClose={closeSpModal} />}
    </>
  );
};

export default Header;
