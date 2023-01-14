import React from 'react';

import { FinishedReportMain } from 'features/finished-report/styles';
import { Button } from 'components/ui';
import { CardWithText, Table } from 'components/custom';
import { useRouter } from 'next/router';

const FinishedReportPage = ({ ...props }) => {
  const router = useRouter();

  return (
    <FinishedReportMain {...props}>
      <CardWithText
        title="Report Name"
        description="Influencers"
        actions={[
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={() => router.push('/reports')}
          >
            Back
          </Button>,
        ]}
      >
        <Table
          head={[
            {
              reference: 'influencer',
              label: 'Influencer',
            },
            {
              reference: 'size',
              label: 'Size',
            },
            {
              reference: 'reach',
              label: 'Reach',
            },
            {
              reference: 'likes',
              label: 'Likes',
            },
            {
              reference: 'comments',
              label: 'Comments',
            },
            {
              reference: 'clicks',
              label: 'Clicks',
            },
            {
              reference: 'engagement',
              label: 'Engagement',
            },
            {
              reference: 'cpt',
              label: 'CPT',
            },
            {
              reference: 'cpc',
              label: 'CPC',
            },
            {
              reference: 'overlap',
              label: 'Overlap',
            },
          ]}
          items={[]}
          renderItem={() => {}}
        />
      </CardWithText>
    </FinishedReportMain>
  );
};

export default FinishedReportPage;
