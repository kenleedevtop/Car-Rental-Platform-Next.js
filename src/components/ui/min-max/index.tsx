import React, { useState, useEffect } from 'react';
import {
  InputMain,
  InputText,
  InputError,
  InfoLabel,
  InputLabel,
} from 'components/ui/input/styles';
import { InputRow } from 'components/ui/min-max/styles';
import Stack from '@mui/material/Stack'
import { TMinMaxInputProps } from "./types";

export const MinMaxInput = ({
  label,
  value,
  onValue,
  errorCallback,
  startAdornment,
  endAdornment,
  infoLabel,
  disabled,
  minValidators = [],
  maxValidators = [],
}: TMinMaxInputProps) => {

  const [minError, setMinError] = useState("");
  const [maxError, setMaxError] = useState("");

  const validateMinValue = (): boolean => {
    for (let i = 0; i < minValidators.length; i += 1) {
      const v = minValidators[i];
      if (!v.validator(value)) {
        setMinError(v.message);
        if (errorCallback) errorCallback(true);
        return false;
      }
    }
    setMinError("")
    if (errorCallback) errorCallback(false);
    return true;
  }

  const validateMaxValue = (): boolean => {
    for (let i = 0; i < maxValidators.length; i += 1) {
      const v = maxValidators[i];
      if (!v.validator(value)) {
        setMaxError(v.message);
        if (errorCallback) errorCallback(true);
        return false;
      }
    }
    setMaxError("")
    if (errorCallback) errorCallback(false);

    return true;
  }

  const handleMinBlur = () => {
    validateMinValue();
  }

  const handleMaxBlur = () => {
    validateMaxValue();
  }

  const handleMinFocus = () => {
    setMinError("")
  }

  const handleMaxFocus = () => {
    setMaxError("")
  }


  const handleMinValue = (e: any) => {
    if (onValue) onValue({ ...value, min: e.target.value == "" ? null : e.target.value });
  }

  const handleMaxValue = (e: any) => {
    if (onValue) onValue({ ...value, max: e.target.value == "" ? null : e.target.value });
  }

  useEffect(() => {
    if (disabled) return;
    const isMinError = validateMinValue();
    const isMaxError = validateMaxValue();

    if (errorCallback) errorCallback(!isMinError || !isMaxError);

  }, [value.min, value.max, disabled])

  return (
    <InputMain>
      {!!label && (
        <InputLabel>
          {label}
        </InputLabel>
      )}
      <InputRow>
        <Stack width={"100%"}>
          <InputText
            type="number"
            value={value.min}
            onChange={handleMinValue}
            placeholder="Min"
            variant="outlined"
            error={!!minError}
            onBlur={handleMinBlur}
            onFocus={handleMinFocus}
            disabled={disabled}
            InputProps={{
              startAdornment,
              endAdornment,
              inputProps: { max: value.max },
            }}
          />
          {minError && <InputError>{minError}</InputError>}
        </Stack>

        <Stack width={"100%"}>
          <InputText
            type="number"
            value={value.max}
            onChange={handleMaxValue}
            placeholder="Max"
            variant="outlined"
            error={!!maxError}
            onBlur={handleMaxBlur}
            onFocus={handleMaxFocus}
            disabled={disabled}
            InputProps={{
              startAdornment,
              endAdornment,
              inputProps: { min: value.min },
            }}
          />
          {maxError && <InputError>{maxError}</InputError>}
        </Stack>

        {infoLabel && <InfoLabel>{infoLabel}</InfoLabel>}
      </InputRow>
    </InputMain>

  )

}

export default MinMaxInput;