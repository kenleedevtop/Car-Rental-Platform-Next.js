import React, { useState, useEffect } from 'react';
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
import { AmbassadorAPI, CompanyAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { ConfirmRegistrationModal } from 'features/register/elements';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyTitleId: '',
    invCode: 'dsadsadsqedq2131',
    company: {
      name: '',
      companyId: '',
    },
  });

  const [counter, setCounter] = useState(0);

  const router = useRouter();

  const { push } = useSnackbar();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    // false,
    // false,
    false,
    false,
  ]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const timeoutTime = 10000;

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.password ||
    // !state.companyTitleId ||
    // !state.company.name ||
    // !state.company.companyId ||
    !!errors.find((x) => x) ||
    counter === 1;

  const handleRegister = async () => {
    try {
      await AmbassadorAPI.registration(state);
      openCrModal();
    } catch (e: any) {
      let step = 0;
      step += 1;
      setCounter(step);
      push(e.response.data.message, { variant: 'error' });
      setTimeout(() => {
        setCounter(0);
      }, timeoutTime);
    }
  };

  const handleClose = () => {
    router.push('/login');
    closeCrModal();
  };

  const [companies, setCompanies] = useState<any>([]);
  const [titles, setTitles] = useState<any>([]);

  const getCompanies = async () => {
    const { result } = await CompanyAPI.getAll();

    setCompanies(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getTitles = async () => {
    const { result } = await CompanyAPI.getAllTitles();

    setTitles(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  useEffect(() => {
    getCompanies();
    getTitles();
  }, []);

  return (
    <RegisterCompanyMain>
      <RegisterTitle>Sign Up as Ambassador</RegisterTitle>
      <RegisterSubtitle>
        Lead the revolution to empower patients and transform healthcare for the
        better by leveraging your expertise and network with us.
      </RegisterSubtitle>
      <RegisterCompanyTopStack direction="horizontal">
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
              message: 'First name needs to be at least 2 characters long',
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
          type="select"
          label="Company"
          placeholder="Please Enter your Company"
          value={state.company.name}
          onValue={(value) =>
            setState({
              ...state,
              company: { name: value.label, companyId: value.value },
            })
          }
          options={companies}
          // errorCallback={handleErrors(2)}
          // validators={[
          //   {
          //     message: 'Company is required',
          //     validator: (company) => {
          //       const v = company as string;
          //       if (v.trim()) return true;
          //       return false;
          //     },
          //   },
          // ]}
        />
        <RegisterCompanyRole
          type="select"
          label="Role"
          // required
          placeholder="Please Enter your Role"
          value={state.companyTitleId}
          onValue={({ value }) => setState({ ...state, companyTitleId: value })}
          options={titles}
          // errorCallback={handleErrors(3)}
          // validators={[
          //   {
          //     message: 'Role is required',
          //     validator: (role) => {
          //       const v = role as string;
          //       if (v.trim()) return true;
          //       return false;
          //     },
          //   },
          // ]}
        />
      </RegisterCompanyBottomStack>
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
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={isDisabled}
        onClick={handleRegister}
      >
        SIGN UP NOW
      </Button>
      {crModal && (
        <ConfirmRegistrationModal email={state.email} onClose={handleClose} />
      )}
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
