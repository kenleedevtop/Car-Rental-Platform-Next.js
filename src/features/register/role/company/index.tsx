import React, { useState } from 'react';
import {
  RegisterTitle,
  RegisterSubtitle,
  RegisterCompanyMain,
} from 'features/register/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'utilities/validators';
import { AuthorizationAPI } from 'api';
import { useSnackbar } from 'hooks';

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

  const { push } = useSnackbar();

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
      const { message } = await AuthorizationAPI.registerAsCompany(state);
      push(message, { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  return (
    <RegisterCompanyMain>
      <RegisterTitle>Sign Up as Company</RegisterTitle>
      <RegisterSubtitle>
        Reach the most relevant market possible by connecting with influencers
        who have pre-established trust with your target audience.
      </RegisterSubtitle>
      <Stack direction="horizontal">
        <Input
          type="text"
          label="First Name"
          required
          placeholder="Please enter first name"
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
        <Input
          type="text"
          label="Last Name"
          required
          placeholder="Please enter last name"
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
      </Stack>
      <Stack direction="horizontal">
        <Input
          type="text"
          label="Company"
          required
          placeholder="Please enter your company"
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
        <Input
          type="text"
          label="Role"
          required
          placeholder="Please enter your role"
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
      </Stack>
      <Input
        type="text"
        label="Email"
        required
        placeholder="Please enter your email"
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
        placeholder="Please enter your password"
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
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
