import React, { useState } from 'react';
import { RegisterTitle, RegisterSubtitle } from 'features/register/styles';
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
    email: '',
    password: '',
  });

  const { push } = useSnackbar();

  const [errors, setErrors] = useState([false, false, false, false, false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.password ||
    !!errors.find((x) => x);

  const handleRegister = async () => {
    try {
      const { message } = await AuthorizationAPI.registerAsInfluencer(state);
      push(message, { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  return (
    <Stack>
      <RegisterTitle>Sign Up as Influencer</RegisterTitle>
      <RegisterSubtitle>
        Turn your voice into a force for positive change by signing up as a
        patient influencer below.
      </RegisterSubtitle>
      <Stack direction="horizontal">
        <Input
          type="text"
          label="First Name"
          required
          placeholder="Please enter your first name"
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
          placeholder="Please enter your last name"
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
          label="Email"
          required
          placeholder="Please enter your email"
          value={state.email}
          onValue={(email) => setState({ ...state, email })}
          errorCallback={handleErrors(3)}
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
      </Stack>
      <Stack direction="horizontal">
        <Input
          type="password"
          label="Password"
          required
          placeholder="Please enter your password"
          value={state.password}
          onValue={(password) => setState({ ...state, password })}
          errorCallback={handleErrors(4)}
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
      </Stack>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={isDisabled}
        onClick={handleRegister}
      >
        SIGN UP NOW
      </Button>
    </Stack>
  );
};

export default RegisterPage;
