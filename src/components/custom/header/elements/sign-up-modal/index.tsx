import React from 'react';
import { Modal } from 'components/custom';
import { TSignUpProps } from 'components/custom/header/elements/sign-up-modal/types';
import {
  SignUpMain,
  SignUpTitle,
  SignUpText,
  SignUpActions,
  SignUpAction,
} from 'components/custom/header/elements/sign-up-modal/styles';
import { Button } from 'components/ui';

const SignUpModal = ({ onClose, ...props }: TSignUpProps) => (
  <Modal size="medium" onClose={onClose} {...props}>
    <SignUpMain columns={1}>
      <SignUpTitle>Sign up Now</SignUpTitle>
      <SignUpText>
        Build trust and authenticity by connecting with our vetted Patient
        Influencers. Within the healthcare industry, patient influencers have
        pre-established trust with their audiences.
      </SignUpText>
      <SignUpActions direction="horizontal">
        <SignUpAction href="/register?as=company">
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={onClose}
          >
            I am company
          </Button>
        </SignUpAction>
        <SignUpAction href="/register?as=influencer">
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={onClose}
          >
            I am influencer
          </Button>
        </SignUpAction>
      </SignUpActions>
    </SignUpMain>
  </Modal>
);

export default SignUpModal;
