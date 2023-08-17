import React, { useState } from 'react';
import {
  RegisterTitle,
  RegisterSubtitle,
  RegisterCompanyMain,
  RegisterCompanyTopStack,
  RegisterCompanyBottomStack,
  RegisterCompanyFName,
  RegisterCompanyLName,
  RegisterLocalization,
} from 'features/register/styles';
import { Button, Input } from 'components/ui';
import { emailSchema, nameSchema, passwordSchema } from 'utilities/validators';
// import { AmbassadorAPI, CompanyAPI, LegalsAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

type TSelect = {
  value: number;
  label: string;
};

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  invCode: string;
  company: any | null;
  role: TSelect | null;
  commonLegalId: number | null;
}

const RegisterPage = () => {
  const [state, setState] = useState<IFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // companyTitleId: '',
    invCode: '',
    company: {
      value: undefined,
      label: '',
      name: '',
    },
    role: null,
    commonLegalId: null,
  });

  const [legalsChecked, setLegalsChecked] = useState({
    commonLegal: false,
  });

  const [commonLegal, setCommonLegal] = useState<any>('');

  const [counter, setCounter] = useState(0);

  const router = useRouter();

  const { token } = router.query;

  const { push } = useSnackbar();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    // false,
    false,
    false,
    false,
  ]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  // const getLegals = async (lang: string) => {
  //   const data = await LegalsAPI.getLegals(lang);

  //   const common = data.commonLegal;

  //   setState({
  //     ...state,
  //     commonLegalId: common.id,
  //   });
  //   setCommonLegal(common);
  // };

  const timeoutTime = 10000;

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.password ||
    !state.company ||
    !state.role ||
    !legalsChecked.commonLegal ||
    !!errors.find((x) => x) ||
    counter === 1;

  // const handleRegister = async () => {
  //   const {
  //     firstName,
  //     lastName,
  //     company,
  //     email,
  //     password,
  //     role,
  //     commonLegalId,
  //   } = state;

  //   if (role && company && commonLegalId && token) {
  //     const formData = {
  //       firstName,
  //       lastName,
  //       email,
  //       companyTitleId: role.value,
  //       commonLegalId,
  //       company: {
  //         companyId: company.value,
  //         name: company.label,
  //       },
  //       password,
  //     };
  //     try {
  //       const locale = router.locale ? router.locale?.slice(0, 2) : '';
  //       await AmbassadorAPI.registration(formData, token?.toString(), locale);
  //       openCrModal();
  //     } catch (e: any) {
  //       let step = 0;
  //       step += 1;
  //       setCounter(step);
  //       push(e.response.data.message, { variant: 'error' });
  //       setTimeout(() => {
  //         setCounter(0);
  //       }, timeoutTime);
  //     }
  //   }
  // };

  // const handleClose = () => {
  //   router.push('/login');
  //   closeCrModal();
  // };

  return (
    <RegisterCompanyMain>
      <RegisterTitle>Sign Up</RegisterTitle>
      <RegisterSubtitle>
        Lead the revolution to empower patients and transform healthcare for the
        better by leveraging your expertise and network with us.
      </RegisterSubtitle>
      <RegisterCompanyTopStack>
        <RegisterCompanyFName
          type="text"
          label="First Name"
          required
          placeholder="Please Enter your First Name"
          value={state.firstName}
          onValue={(firstName) => setState({ ...state, firstName })}
          errorCallback={handleErrors(0)}
          validators={[
            {
              message: 'First name is required',
              validator: (firstName) => {
                const v = firstName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t(
                'First name needs to be between 2 and 15 characters in length'
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
              message: t('First name must contain only letters'),
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
          label="Last Name"
          required
          placeholder="Please Enter your Last Name"
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
              message: t(
                'Last name needs to be between 2 and 15 characters in length'
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
              message: t('Last name must contain only letters'),
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
      <RegisterCompanyBottomStack>
        <Input
          type="text"
          label="Email"
          required
          placeholder="Please Enter your Email"
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
          label="Password"
          required
          placeholder="Please Enter your Password"
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
      </RegisterCompanyBottomStack>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={isDisabled}
        // onClick={handleRegister}
      >
        SIGN UP NOW
      </Button>
      <RegisterLocalization />
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
