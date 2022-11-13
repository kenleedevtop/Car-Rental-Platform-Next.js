import React from 'react';

import { CheckboxMain } from 'components/ui/checkbox/styles';
import { TCheckboxType } from 'components/ui/checkbox/types';

const Checkbox = ({ label, ...props }: TCheckboxType) => (
  <CheckboxMain {...props}>{label && label}</CheckboxMain>
);

export default Checkbox;
