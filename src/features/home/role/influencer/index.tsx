import { BarChart, ExtendedLineChart, MatrixChart } from 'components/csr';
import { CardWithText, Note, ProgressDisplay } from 'components/custom';
import { InputGroup } from 'components/ui';
import React, { useState } from 'react';

const HomePage = () => {
  const [state, setState] = useState({
    currency: null,
    start: null,
    end: null,
  });

  return (
    <CardWithText title="Home" description="This is home">
      <InputGroup
        label="Income"
        inputRatio="100px 1fr 1fr"
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
            value: state.start,
            onValue: (start) => setState({ ...state, start }),
            type: 'date',
            placeholder: 'Start date',
          },
          {
            value: state.end,
            onValue: (end) => setState({ ...state, end }),
            type: 'date',
            placeholder: 'End date',
          },
        ]}
      />
      <div style={{ width: 600, height: 360, margin: '50px 0px' }}>
        <MatrixChart
          horizontalLabels={[
            '0-2',
            '2-4',
            '4-6',
            '6-8',
            '8-10',
            '10-12',
            '12-14',
            '14-16',
            '16-18',
            '18-20',
            '20-22',
            '22-24',
          ]}
          verticalLabels={['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']}
          data={[
            [5, 30, 50, 2, 0, 0, 7, 0, 5, 5, 60, 15],
            [50, 2, 0, 0, 15, 20, 25, 15, 0, 0, 12, 13],
            [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
            [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
            [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
            [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
            [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
          ]}
        />
      </div>
      <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
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
      <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
        <ExtendedLineChart
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
          verticalLabel="Number of Followers"
          horizontalLabel="Time"
        />
      </div>
      <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
        <ProgressDisplay label="Patient community" percent={80} />
        <Note>
          Influencers with an audience your size, asks for{' '}
          <span>21-25 USD</span> per <span>Post</span> on average.
        </Note>
      </div>
    </CardWithText>
  );
};

export default HomePage;
