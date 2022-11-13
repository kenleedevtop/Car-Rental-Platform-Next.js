import React from 'react';

import { CheckboxMain, CheckboxLabel } from 'components/ui/checkbox/styles';
import { TCheckboxType } from 'components/ui/checkbox/types';

const Checkbox = ({ label, ...props }: TCheckboxType) => (
  <CheckboxMain {...props}>
    <input type="checkbox" />
    {label && <CheckboxLabel>{label}</CheckboxLabel>}
  </CheckboxMain>
);

export default Checkbox;
