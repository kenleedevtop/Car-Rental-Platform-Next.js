import React, { useEffect, useRef, useState } from 'react';
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
  RegisterCheckbox,
} from 'features/register/styles';
import { Button, Input } from 'components/ui';
import { emailSchema, nameSchema, passwordSchema } from 'utilities/validators';
// import { ClientAPI, LegalsAPI, CompanyAPI, AmbassadorAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { ConfirmRegistrationModal } from 'features/register/elements';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
// import { IAffiliatedAmbassador } from 'api/ambassador/types';

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    company: null,
    companyTitleId: null,
    services: [],
    email: '',
    password: '',
    commonLegalId: null,
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const snackbar = useSnackbar();

  const { push } = useSnackbar();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    // false,
    // false,
  ]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const timeoutTime = 10000;

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    // !state.company.name ||
    // !state.company.role ||
    !state.email ||
    !state.password ||
    !!errors.find((x) => x);

  // , router.locale as string

  const handleRegister = async () => {
    try {
      openCrModal();
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const handleClose = () => {
    router.push('/login');
    closeCrModal();
  };

  // const [companies, setCompanies] = useState<any>([]);
  // const [titles, setTitles] = useState<any>([]);

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <RegisterCompanyMain>
      <RegisterTitle>{t('Sign Up as Developer')}</RegisterTitle>
      <RegisterSubtitle>
        {t(
          'Reach the most relevant market possible by connecting with influencers who have pre-established trust with your target audience.'
        )}
      </RegisterSubtitle>
      <RegisterCompanyTopStack direction="horizontal">
        <RegisterCompanyFName
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
              message: t(
                'First name needs to be between 2 and 15 characters in length.'
              ),
              validator: (firstName) => {
                try {
                  nameSchema.validateSync({ length: firstName });
                  return true;
                } catch {
                  return false;
                }
              },
            },
            {
              message: t('First name must contain only letters.'),
              validator: (firstName) => {
                try {
                  nameSchema.validateSync({ pattern: firstName });
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
              message: t('Last name is required'),
              validator: (lastName) => {
                const v = lastName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t(
                'Last name needs to be between 2 and 15 characters in length.'
              ),
              validator: (lastName) => {
                try {
                  nameSchema.validateSync({ length: lastName });
                  return true;
                } catch {
                  return false;
                }
              },
            },
            {
              message: t('Last name must contain only letters.'),
              validator: (lastName) => {
                try {
                  nameSchema.validateSync({ pattern: lastName });
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
          value={state.company}
          onValue={(company) => setState({ ...state, company })}
          // validators={[
          //   {
          //     message: t('Company is required'),
          //     validator: (company) => {
          //       const v = company as string;
          //       if (v.trim()) return true;
          //       return false;
          //     },
          //   },
          // ]}
        />
        <RegisterCompanyRole
          type="text"
          label={t('Role') as string}
          required
          placeholder={t('Please Enter your Role') as string}
          value={state.companyTitleId}
          onValue={(companyTitleId) => setState({ ...state, companyTitleId })}
          // validators={[
          //   {
          //     message: t('Role is required'),
          //     validator: (companyTitleId) => {
          //       const v = companyTitleId as string;
          //       if (v.trim()) return true;
          //       return false;
          //     },
          //   },
          // ]}
        />
      </RegisterCompanyBottomStack>
      <RegisterCompanyBottomStack direction="horizontal">
        <RegisterCompanyCompany
          type="multiselect"
          label={t('Services') as string}
          required
          placeholder={t('Please Enter your Company') as string}
          value={state.services}
          // onSearch={debounce(getCompanies, 250)}
          onValue={(value) => setState({ ...state, services: value })}
          // options={companies}
          // onKeyDown={handleKeyDown}
          loading={loading}
          noOptionsText="Press Enter to Add Yours"
        />
        <RegisterCompanyRole
          type="select"
          label={t('Location') as string}
          required
          placeholder={t('Please Enter your Role') as string}
          value={state.companyTitleId}
          onValue={(value) => setState({ ...state, companyTitleId: value })}
          // options={titles}
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
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
