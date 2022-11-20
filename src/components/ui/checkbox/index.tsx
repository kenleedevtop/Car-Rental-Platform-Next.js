import React, { useRef } from 'react';

import {
  CheckboxMain,
  CheckboxInput,
  CheckboxLabel,
  CheckboxDisplay,
  CheckboxDisplayIcon,
} from 'components/ui/checkbox/styles';
import { TCheckboxProps } from 'components/ui/checkbox/types';

const Checkbox = ({
  label,
  color = 'primary',
  size = 'medium',
  value,
  onValue,
  ...props
}: TCheckboxProps) => {
  const checkboxRef = useRef<null | HTMLInputElement>(null);

  const handleClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValue) {
      onValue(e.target.checked);
    }
  };

  return (
    <CheckboxMain {...props}>
      <CheckboxInput
        hidden
        color={color}
        ref={checkboxRef}
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      <CheckboxDisplay onClick={handleClick} size={size} color={color}>
        <CheckboxDisplayIcon />
      </CheckboxDisplay>
      {label && <CheckboxLabel onClick={handleClick}>{label}</CheckboxLabel>}
    </CheckboxMain>
  );
};
export default Checkbox;
