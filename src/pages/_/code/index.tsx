import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Code = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      window.postMessage({ type: 'code', data: router.query.code }, '*');
    }
  }, [router.query.code]);

  return (
    <div>Please wait... Window will close shortly. {router.query.code}</div>
  );
};

export default Code;
