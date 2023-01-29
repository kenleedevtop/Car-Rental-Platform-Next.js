import React, { useState } from 'react';
import {
  RegisterTitle,
  RegisterSubtitle,
  RegisterCompanyMain,
  RegisterCompanyTopStack,
  RegisterCompanyBottomStack,
  RegisterCompanyFName,
  RegisterCompanyLName,
  RegisterCompanyCompany,
  RegisterCompanyRole,
  RegisterLocalization,
} from 'features/register/styles';
import { Button, Input } from 'components/ui';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'utilities/validators';
import { AuthorizationAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { ConfirmRegistrationModal } from 'features/register/elements';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    company: {
      name: '',
      role: '',
    },
    email: '',
    password: '',
  });

  const router = useRouter();

  const { push } = useSnackbar();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    !state.company.name ||
    !state.company.role ||
    !state.email ||
    !state.password ||
    !!errors.find((x) => x);

  const handleRegister = async () => {
    try {
      await AuthorizationAPI.registerAsCompany(state, router.locale as string);
      openCrModal();
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const handleClose = () => {
    router.push('/login');
    closeCrModal();
  };

  return (
    <RegisterCompanyMain>
      <RegisterTitle>{t('Lost your password?')}</RegisterTitle>
      <RegisterSubtitle>
        {t('Enter email to get password for recovery.')}
      </RegisterSubtitle>
      <RegisterCompanyTopStack direction="horizontal">
        <RegisterCompanyFName
          type="text"
          label={t('Email') as string}
          required
          placeholder={t('Please Enter your First Name') as string}
          value={state.firstName}
          onValue={(firstName) => setState({ ...state, firstName })}
          errorCallback={handleErrors(0)}
          validators={[
            {
              message: 'First Name is required',
              validator: (firstName) => {
                const v = firstName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: 'First Name needs to be at least 2 characters long',
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
        <RegisterCompanyLName
          type="text"
          label={t('Last Name') as string}
          required
          placeholder={t('Please Enter your Last Name') as string}
          value={state.lastName}
          onValue={(lastName) => setState({ ...state, lastName })}
          errorCallback={handleErrors(1)}
          validators={[
            {
              message: 'Last name is required',
              validator: (lastName) => {
                const v = lastName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: 'Last name needs to be at least 2 characters long',
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
      </RegisterCompanyTopStack>
      <RegisterCompanyBottomStack direction="horizontal">
        <RegisterCompanyCompany
          type="text"
          label={t('Company') as string}
          required
          placeholder={t('Please Enter your Company') as string}
          value={state.company.name}
          onValue={(name) =>
            setState({ ...state, company: { ...state.company, name } })
          }
          errorCallback={handleErrors(2)}
          validators={[
            {
              message: 'Company is required',
              validator: (company) => {
                const v = company as string;
                if (v.trim()) return true;
                return false;
              },
            },
          ]}
        />
        <RegisterCompanyRole
          type="text"
          label={t('Role') as string}
          required
          placeholder={t('Please Enter your Role') as string}
          value={state.company.role}
          onValue={(role) =>
            setState({ ...state, company: { ...state.company, role } })
          }
          errorCallback={handleErrors(3)}
          validators={[
            {
              message: 'Role is required',
              validator: (role) => {
                const v = role as string;
                if (v.trim()) return true;
                return false;
              },
            },
          ]}
        />
      </RegisterCompanyBottomStack>
      <Input
        type="text"
        label={t('Email') as string}
        required
        placeholder={t('Please Enter your Email') as string}
        value={state.email}
        onValue={(email) => setState({ ...state, email })}
        errorCallback={handleErrors(4)}
        validators={[
          {
            message: 'Email is required',
            validator: (email) => {
              const v = email as string;
              if (v.trim()) return true;
              return false;
            },
          },
          {
            message: 'Not a valid email format',
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
      <Input
        type="password"
        label={t('Password') as string}
        required
        placeholder={t('Please Enter your Password') as string}
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
        errorCallback={handleErrors(5)}
        validators={[
          {
            message: 'Password is required',
            validator: (password) => {
              const v = password as string;
              if (v.trim()) return true;
              return false;
            },
          },
          {
            message:
              'Password must have at least one uppercase, lowercase letter, number and symbol',
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
      {crModal && <ConfirmRegistrationModal onClose={handleClose} />}
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
