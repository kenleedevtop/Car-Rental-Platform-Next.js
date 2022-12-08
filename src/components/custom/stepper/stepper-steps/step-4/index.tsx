import { Grid, GridCell, Stack } from 'components/system';
import { Input, InputGroup } from 'components/ui';
import React, { useState } from 'react';

const Step = () => {
  const [filter, setFilter] = useState({
    currency: null,

    instaP: null,
    instaS: null,
    instaR: null,

    yVideoS: null,
    yVideoM: null,
    yVideoL: null,

    ttPost: null,
  });
  return (
    <Stack>
      <Grid columns={8}>
        <GridCell columnSpan={1}>
          <Input
            type="select"
            label="Currency"
            placeholder="USD"
            value={filter.currency}
            onValue={(currency) => setFilter({ ...filter, currency })}
          />
        </GridCell>
      </Grid>
      <Grid columns={12}>
        <GridCell columnSpan={4} style={{ borderRight: '1px solid #E9F0FC' }}>
          <Stack>
            <p style={{ color: '#6f6f6f' }}>Instagram</p>
            <InputGroup
              label="Post"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.instaP,
                  onValue: (instaP) => setFilter({ ...filter, instaP }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
            <InputGroup
              label="Story"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.instaS,
                  onValue: (instaS) => setFilter({ ...filter, instaS }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
            <InputGroup
              label="Reel"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.instaR,
                  onValue: (instaR) => setFilter({ ...filter, instaR }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
          </Stack>
        </GridCell>
        <GridCell
          columnSpan={4}
          style={{ padding: '0 50px', borderRight: '1px solid #E9F0FC' }}
        >
          <Stack>
            <p style={{ color: '#6f6f6f' }}>Youtube</p>
            <InputGroup
              label="Video - 10sec"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.yVideoS,
                  onValue: (yVideoS) => setFilter({ ...filter, yVideoS }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
            <InputGroup
              label="Video - 30sec"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.yVideoM,
                  onValue: (yVideoM) => setFilter({ ...filter, yVideoM }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
            <InputGroup
              label="Video - 60sec"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.yVideoL,
                  onValue: (yVideoL) => setFilter({ ...filter, yVideoL }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
          </Stack>
        </GridCell>
        <GridCell columnSpan={4} style={{ padding: '0 50px' }}>
          <Stack>
            <p style={{ color: '#6f6f6f' }}>TikTok</p>
            <InputGroup
              label="Post"
              inputRatio="125px 125px"
              elements={[
                {
                  value: filter.ttPost,
                  onValue: (ttPost) => setFilter({ ...filter, ttPost }),
                  type: 'text',
                  placeholder: '18',
                },
                {
                  value: filter.currency,
                  onValue: (currency) => setFilter({ ...filter, currency }),
                  type: 'select',
                  placeholder: 'USD',
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
              ]}
            />
          </Stack>
        </GridCell>
      </Grid>
    </Stack>
  );
};

export default Step;
