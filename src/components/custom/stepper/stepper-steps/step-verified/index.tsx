import { VerifiedIcon } from 'components/svg';
import React from 'react';

const Step = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: ' 50vh',
    }}
  >
    Congratulations, you&apos;ve successfully completed all verification steps!
    Your account is now pending approval.
    <VerifiedIcon
      width="20"
      height="20"
      style={{ color: '#2D3779', marginLeft: '10px' }}
    />{' '}
  </div>
);

export default Step;
