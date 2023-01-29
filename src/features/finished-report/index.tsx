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
              visible: true,
            },
            {
              reference: 'size',
              label: 'Size',
              visible: true,
            },
            {
              reference: 'reach',
              label: 'Reach',
              visible: true,
            },
            {
              reference: 'likes',
              label: 'Likes',
              visible: true,
            },
            {
              reference: 'comments',
              label: 'Comments',
              visible: true,
            },
            {
              reference: 'clicks',
              label: 'Clicks',
              visible: true,
            },
            {
              reference: 'engagement',
              label: 'Engagement',
              visible: true,
            },
            {
              reference: 'cpt',
              label: 'CPT',
              visible: true,
            },
            {
              reference: 'cpc',
              label: 'CPC',
              visible: true,
            },
            {
              reference: 'overlap',
              label: 'Overlap',
              visible: true,
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
