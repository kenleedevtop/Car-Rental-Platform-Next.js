import React, { useEffect, useState } from 'react';
import { InfoIcon } from 'components/svg';
import { TNote } from 'components/custom/currency-feedback/types';
import {
  NoteMain,
  NoteText,
  HighlightText,
} from 'components/custom/currency-feedback/style';
import { useAppContext } from 'context';

const CurrencyFeedback = ({ value, ...props }: TNote) => {
  const { currency } = useAppContext();

  const [euroValue, setEuroValue] = useState(value * 1.03);
  const [usdValue, setUsdValue] = useState(value * 1.11);

  useEffect(() => {
    if (currency === 'EUR') {
      setEuroValue(value * 1.03);
    }

    if (currency === 'USD') {
      setUsdValue(value * 1.11);
    }
  }, [value, currency]);

  return (
    <NoteMain {...props}>
      {currency === 'EUR' && parseInt(value, 10) > 0 ? (
        <>
          <InfoIcon />
          <NoteText>
            Approximatelay
            <HighlightText> {euroValue} EUR</HighlightText>.
          </NoteText>
        </>
      ) : null}
      {currency === 'USD' && parseInt(value, 10) > 0 ? (
        <>
          <InfoIcon />
          <NoteText>
            Approximatelay
            <HighlightText> {usdValue} USD</HighlightText>.
          </NoteText>
        </>
      ) : null}
    </NoteMain>
  );
};

export default CurrencyFeedback;
