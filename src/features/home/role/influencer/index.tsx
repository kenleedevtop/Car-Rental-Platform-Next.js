import { CardWithText } from 'components/custom';
import { InputGroup } from 'components/ui';
import React, { useState } from 'react';

const HomePage = () => {
  const [state, setState] = useState({
    currency: null,
    price: '',
  });

  return (
    <CardWithText title="Home" description="This is home">
      <InputGroup
        label="Income"
        inputRatio="100px 1fr "
        required
        elements={[
          {
            value: state.currency,
            onValue: (currency) => setState({ ...state, currency }),
            type: 'select',
            placeholder: 'CUR',
            options: [
              {
                value: 'eur',
                label: 'EUR',
              },
              {
                value: 'usd',
                label: 'USD',
              },
            ],
          },
          {
            value: state.price,
            onValue: (price) => setState({ ...state, price }),
            type: 'number',
            placeholder: 'Price',
          },
        ]}
      />
    </CardWithText>
  );
};

export default HomePage;
