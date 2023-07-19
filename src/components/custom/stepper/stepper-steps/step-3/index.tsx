/* eslint-disable consistent-return */
import { InstagramIcon, TiktokIcon, TwitterIcon } from 'components/svg';
import {
  StepContainer,
  StepForm,
  StepStack,
} from 'components/custom/stepper/stepper-steps/step-3/style';
import { Button } from 'components/ui';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'context';
import { InfluencerAPI } from 'api';

const instagramAuth = (title: string, onClose: () => void) =>
  new Promise((resolve, reject) => {
    const top = (window.innerHeight - 600) / 2 + window.screenY;
    const left = (window.innerWidth - 600) / 2 + window.screenX;

    const dialog = window.open(
      `https://api.instagram.com/oauth/authorize?client_id=192566817106120&redirect_uri=https://app.patientsinfluence.com/_/code&scope=user_profile&response_type=code`,
      title,
      `top=${top}px,left=${left},width=${600}px,height=${600}px`
    );

    if (!dialog) throw new Error('Dialog not found');

    const receiveMessage = (event: any) => {
      if (event.origin !== window.origin) return;
      const { type: eventType, data } = event.data;
      if (eventType === 'code') {
        resolve(data);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        cleanup();
      }
    };

    const cleanup = () => {
      try {
        if (dialog.removeEventListener)
          dialog.removeEventListener('message', receiveMessage);
        if (dialog.removeEventListener)
          dialog.removeEventListener('beforeunload', onClose);
        if (dialog.close) dialog.close();
      } catch (e: any) {
        console.log(e.message);
      }
    };

    dialog.addEventListener('message', receiveMessage, false);

    if (onClose && typeof onClose === 'function') {
      dialog.addEventListener('beforeunload', onClose);
    }

    const checkClosed = setInterval(() => {
      if (dialog.closed) {
        clearInterval(checkClosed);
        cleanup();
        onClose();
        reject(new Error('User closed the dialog.'));
      }
    }, 1000);
  });

const Step = () => {
  const { user, influencer, handleInfluencer } = useAppContext();
  const [hasInstagramLinked, setHasInstagramLinked] = useState(false);

  const getInfluencerData = async (influencerId: number) => {
    const response = await InfluencerAPI.getSingleInfluencer(influencerId);
    handleInfluencer(response);
  };

  const onClose = () => {
    getInfluencerData(user.id);
  };

  const handleInstagramAuth = async () => {
    try {
      return await instagramAuth('Patients Influence', onClose);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const findInstagramAccount = influencer?.influencer.stakeholders.find(
    (x) => x.socialPlatformId === 1
  );

  useEffect(() => {
    if (
      findInstagramAccount &&
      findInstagramAccount.socialPlatformUsername &&
      findInstagramAccount.socialPlatformId &&
      findInstagramAccount.socialPlatformUserId
    ) {
      setHasInstagramLinked(true);
    } else {
      setHasInstagramLinked(false);
    }
  }, [findInstagramAccount, influencer]);

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
          {!hasInstagramLinked ? (
            <Button
              endIcon={<InstagramIcon width="18" height="18" />}
              size="large"
              variant="contained"
              color="primary"
              onClick={handleInstagramAuth}
            >
              Link
            </Button>
          ) : (
            <Button
              endIcon={<InstagramIcon width="18" height="18" />}
              size="large"
              variant="contained"
              style={{ backgroundColor: '#448DC9' }}
            >
              Linked
            </Button>
          )}

          {/* This is for the future */}
          {/* <Button
            endIcon={<TwitterIcon width="18" height="18" />}
            size="large"
            variant="contained"
            color="primary"
          >
            Link
          </Button>
          <Button
            endIcon={<TiktokIcon width="18" height="18" />}
            size="large"
            variant="contained"
            style={{ backgroundColor: '#448DC9' }}
          >
            Linked
          </Button> */}
        </StepStack>
      </StepForm>
    </StepContainer>
  );
};

export default Step;
