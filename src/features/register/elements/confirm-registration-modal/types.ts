import { TResendVerificationEmail } from 'api/authorization/types';
import React from 'react';

export type TConfirmRegistrationModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
    email: string;
  };
