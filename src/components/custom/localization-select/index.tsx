import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SLocalizationSelectMain } from 'components/custom/localization-select/styles';
import {
  TLocalizationOption,
  TLocalizationSelectProps,
} from 'components/custom/localization-select/types';
import { DLocalizationOptions } from 'components/custom/localization-select/data';

const LocalizationSelect = ({ ...props }: TLocalizationSelectProps) => {
  const [value, setValue] = useState(DLocalizationOptions[0]);

  const { push } = useRouter();

  const handleValue = (v: TLocalizationOption) => {
    setValue(v);
    push('.', undefined, { locale: v.value });
  };

  return (
    <SLocalizationSelectMain
      type="select"
      value={value}
      onValue={handleValue}
      {...props}
      options={DLocalizationOptions}
    />
  );
};

export default LocalizationSelect;
