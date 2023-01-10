import { InstagramIcon, TiktokIcon, TwitterIcon } from 'components/svg';
import { Grid, GridCell } from 'components/system';
import { Button } from 'components/ui';
import React from 'react';

const Step = () => (
  <Grid columns={8}>
    <GridCell columnSpan={4}>
      <Button
        endIcon={<InstagramIcon width="18" height="18" />}
        size="large"
        variant="contained"
        color="primary"
        style={{ marginRight: '20px' }}
      >
        Link
      </Button>
      <Button
        endIcon={<TwitterIcon width="18" height="18" />}
        size="large"
        variant="contained"
        color="primary"
        style={{ marginRight: '20px' }}
      >
        Link
      </Button>
      <Button
        endIcon={<TiktokIcon width="18" height="18" />}
        size="large"
        variant="contained"
        color="default"
        style={{ marginRight: '20px' }}
      >
        Linked
      </Button>
    </GridCell>
  </Grid>
);

export default Step;
