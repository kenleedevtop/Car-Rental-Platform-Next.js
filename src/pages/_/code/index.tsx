import { StakeholderApi } from 'api';
import { useAppContext } from 'context';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Code = () => {
  const router = useRouter();
  const { user } = useAppContext();
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (router.query.code) {
      StakeholderApi.createStakeholder({
        authorizationCode: router.query.code as string,
        userId: user.id,
      })
        .then((res) => {
          if (res.status === 201) {
            setMessage('You have successfully linked your Instagram account!');
          }
        })
        .catch((_) => {
          setMessage('Something went wrong. Please try again later.');
        });
    }
  }, [router.query.code, user.id]);

  useEffect(() => {
    if (message) {
      window.location.href = '/account';
    }
  }, [message]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Code;
