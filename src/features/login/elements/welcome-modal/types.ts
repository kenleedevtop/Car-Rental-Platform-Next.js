import React from 'react';

export type TWelcomeModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  role: 'INFLUENCER' | 'DEVELOPER' | null;
  error: boolean;
};
