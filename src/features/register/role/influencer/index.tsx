import React, { useEffect, useState } from 'react';
import {
  RegisterTitle,
  RegisterSubtitle,
  RegisterInfluencerMain,
  RegisterInfluencerStack,
  RegisterInfluencerFName,
  RegisterInfluencerLName,
  RegisterLocalization,
  RegisterCheckbox,
} from 'features/register/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'utilities/validators';
import { InfluencerAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { ConfirmRegistrationModal } from 'features/register/elements';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import LegalsAPI from 'api/legals';

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    commonLegalId: null,
    patientSpecificLegalId: null,
  });

  const router = useRouter();

  const [legals, setLegals] = useState({});
  const [legalsChecked, setLegalsChecked] = useState({
    commonLegal: false,
    patientSpecificLegal: false,
  });

  const [commonLegal, setCommonLegal] = useState<any>('');
  const [patientsSpecificLegal, setPatientsSpecificLegal] = useState<any>('');

  const getLegals = async () => {
    const data = await LegalsAPI.getLegals();

    let common;
    let specific;

    if (router.locale === 'en-US') {
      common = data.find((x: any) => x.type === 0 && x.language === 'en');
      specific = data.find((x: any) => x.type === 1 && x.language === 'en');
    } else {
      common = data.find((x: any) => x.type === 0 && x.language === 'de');
      specific = data.find((x: any) => x.type === 1 && x.language === 'de');
    }

    setState({
      ...state,
      commonLegalId: common.id,
      patientSpecificLegalId: specific.id,
    });
    setCommonLegal(common);
    setPatientsSpecificLegal(specific);
  };

  useEffect(() => {
    getLegals();
  }, []);

  useEffect(() => {
    getLegals();
  }, [router.locale]);

  const { t } = useTranslation('register');

  const { push } = useSnackbar();

  const [errors, setErrors] = useState([false, false, false, false, false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.password ||
    !!errors.find((x) => x) ||
    !legalsChecked.commonLegal ||
    !legalsChecked.patientSpecificLegal;

  const handleClose = () => {
    router.push('/login');
    closeCrModal();
  };

  const handleRegister = async () => {
    try {
      await InfluencerAPI.registration({ ...state, ...legals });
      openCrModal();
    } catch (e: any) {
      if (
        window.location.href.includes('de-DE') &&
        e.response.data.message === 'Email already in use'
      ) {
        push(
          'Die angegebene E-Mail-Adresse ist bereits mit einem Konto verknüpft.',
          { variant: 'error' }
        );
      } else {
        push(
          'The provided email address is already associated with an account.',
          { variant: 'error' }
        );
      }
    }
  };

  return (
    <RegisterInfluencerMain>
      <RegisterTitle>{t('Sign Up as Influencer')}</RegisterTitle>
      <RegisterSubtitle>
        {t(
          'Turn your voice into a force for positive change by signing up as a patient influencer below.'
        )}
      </RegisterSubtitle>
      <RegisterInfluencerStack direction="horizontal">
        <RegisterInfluencerFName
          type="text"
          label={t('First Name') as string}
          required
          placeholder={t('Please Enter your First Name') as string}
          value={state.firstName}
          onValue={(firstName) => setState({ ...state, firstName })}
          errorCallback={handleErrors(0)}
          validators={[
            {
              message: t('First name is required'),
              validator: (firstName) => {
                const v = firstName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t('First name needs to be at least 2 characters long'),
              validator: (firstName) => {
                try {
                  firstNameSchema.validateSync({ firstName });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
        <RegisterInfluencerLName
          type="text"
          label={t('Last Name') as string}
          required
          placeholder={t('Please Enter your Last Name') as string}
          value={state.lastName}
          onValue={(lastName) => setState({ ...state, lastName })}
          errorCallback={handleErrors(1)}
          validators={[
            {
              message: t('Last name is required'),
              validator: (lastName) => {
                const v = lastName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t('Last name needs to be at least 2 characters long'),
              validator: (lastName) => {
                try {
                  lastNameSchema.validateSync({ lastName });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
      </RegisterInfluencerStack>
      <Stack direction="horizontal">
        <Input
          type="text"
          label={t('Email') as string}
          required
          placeholder={t('Please Enter your Email') as string}
          value={state.email}
          onValue={(email) => setState({ ...state, email })}
          errorCallback={handleErrors(3)}
          validators={[
            {
              message: t('Email is required'),
              validator: (email) => {
                const v = email as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t('Not a valid email format'),
              validator: (email) => {
                try {
                  emailSchema.validateSync({ email });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
      </Stack>
      <Stack direction="horizontal">
        <Input
          type="password"
          label={t('Password') as string}
          required
          placeholder={t('Please Enter your Password') as string}
          value={state.password}
          onValue={(password) => setState({ ...state, password })}
          errorCallback={handleErrors(4)}
          validators={[
            {
              message: t('Password is required'),
              validator: (password) => {
                const v = password as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t(
                'Password must have at least one uppercase, lowercase letter, number and symbol'
              ),
              validator: (password) => {
                try {
                  passwordSchema.validateSync({ password });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
      </Stack>
      <Stack>
        <RegisterCheckbox
          label={
            <span dangerouslySetInnerHTML={{ __html: commonLegal?.text }} />
          }
          size="small"
          color="primary"
          value={legalsChecked.commonLegal}
          onValue={(v) =>
            setLegalsChecked({ ...legalsChecked, commonLegal: v })
          }
        />
        <RegisterCheckbox
          label={
            <span
              dangerouslySetInnerHTML={{ __html: patientsSpecificLegal?.text }}
            />
          }
          size="small"
          color="primary"
          value={legalsChecked.patientSpecificLegal}
          onValue={(patientSpecificLegal) =>
            setLegalsChecked({
              ...legalsChecked,
              patientSpecificLegal,
            })
          }
        />
      </Stack>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={isDisabled}
        onClick={handleRegister}
      >
        {t('SIGN UP NOW')}
      </Button>
      <RegisterLocalization />
      {crModal && (
        <ConfirmRegistrationModal email={state.email} onClose={handleClose} />
      )}
    </RegisterInfluencerMain>
  );
};

export default RegisterPage;
