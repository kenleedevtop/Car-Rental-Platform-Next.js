import { BarChart } from 'components/csr';
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
      <div style={{ width: 500, height: 300 }}>
        <BarChart
          labels={[
            '0-5',
            '6-10',
            '11-15',
            '16-20',
            '21-25',
            '26-30',
            '31-35',
            '36-40',
            '41-45',
            '46-50',
          ]}
          data={[5, 10, 15, 20, 25, 18, 13, 8, 3, 1]}
          verticalLabel="Number of Influencers"
          horizontalLabel="Amount Per Post"
        />
      </div>
    </CardWithText>
  );
};

export default HomePage;
