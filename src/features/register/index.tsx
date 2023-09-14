import React, { useState } from 'react';
import {
  RegisterTitle,
  RegisterSubtitle,
  RegisterCompanyMain,
  RegisterCompanyTopStack,
  RegisterCompanyBottomStack,
  RegisterCompanyFName,
  RegisterCompanyLName,
  RegisterCheckbox,
} from 'features/register/styles';
import { ConfirmRegistrationModal } from 'features/register/elements';
import { Button, Input } from 'components/ui';
import { emailSchema, nameSchema, passwordSchema } from 'utilities/validators';
import { AuthorizationAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Stack } from 'components/system';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  invCode: string;
  role: string;
}

const RegisterPage = () => {
  const [state, setState] = useState<IFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    invCode: '',
    role: 'USER',
  });

  const router = useRouter();

  const { push } = useSnackbar();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([false, false, false, false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [crModal, openCrModal, closeCrModal] = useModal(false);
  const [legalsChecked, setLegalsChecked] = useState({
    commonLegal: false,
    patientSpecificLegal: false,
  });
  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.password ||
    !legalsChecked.commonLegal ||
    !legalsChecked.patientSpecificLegal ||
    !!errors.find((x) => x);

  const handleRegister = async () => {
    const { firstName, lastName, email, password, role } = state;

    if (role) {
      const formData = {
        firstName,
        lastName,
        email,
        password,
        role,
      };
      try {
        await AuthorizationAPI.register(formData);
        openCrModal();
      } catch (e: any) {
        push(e.response.data.message, { variant: 'error' });
      }
    }
  };

  const handleClose = () => {
    router.push('/login');
    closeCrModal();
  };
  return (
    <RegisterCompanyMain>
      <RegisterTitle>Sign Up</RegisterTitle>
      <RegisterSubtitle>
        Rev up your lifestyle with exclusive co-ownership in luxury supercars.
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
      <Stack>
        <RegisterCheckbox
          label={
            <span
              dangerouslySetInnerHTML={{
                __html: `I agree to the <a href='${process.env.NEXT_PUBLIC_TERMS_OF_SERVICES}' target='_blank'>Terms of Services</a> and <a href='${process.env.NEXT_PUBLIC_PRIVACY_POLICY}' target='_blank'>Privacy Policy</a>`,
              }}
            />
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
              dangerouslySetInnerHTML={{
                __html: `I consent to Shared Vacay's processing of my special category data as per the <a href='${process.env.NEXT_PUBLIC_PRIVACY_POLICY}' target='_blank'>Privacy Policy</a>`,
              }}
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
        SIGN UP NOW
      </Button>
      {crModal && (
        <ConfirmRegistrationModal email={state.email} onClose={handleClose} />
      )}
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
