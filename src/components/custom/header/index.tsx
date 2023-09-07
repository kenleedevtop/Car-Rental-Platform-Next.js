import React from 'react';

import {
  HeaderMain,
  HeaderLogo,
  HeaderActions,
  HeaderAction,
  HeaderLogoLink,
} from 'components/custom/header/styles';

import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';

const Header = ({ ...props }) => {
  const { t } = useTranslation('common');

  return (
    <HeaderMain {...props}>
      <HeaderLogoLink href="/login">
        <HeaderLogo src="/static/assets/images/Brotherhood.svg" />
      </HeaderLogoLink>
      <HeaderActions>
        <HeaderAction href="/login">
          <Button variant="text" size="large">
            {t('Login')}
          </Button>
        </HeaderAction>
        <Button variant="contained" color="secondary" size="large">
          <HeaderAction style={{ color: '#fff' }} href="/register">
            {t('SIGN UP')}
          </HeaderAction>
        </Button>
      </HeaderActions>
    </HeaderMain>
  );
};

export default Header;
