import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TAddToInfluencersModalProps } from 'features/influencers/role/admin/elements/add-to-influencer-modal/types';
import {
  AddToInfluencersModalMain,
  AddToInfluencerText,
} from 'features/influencers/role/admin/elements/add-to-influencer-modal/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const AddToInfluencerModal = ({
  onClose,
  ...props
}: TAddToInfluencersModalProps) => {
  const [state, setState] = useState({
    campaign: null,
    survey: null,
  });

  const [tabs, setTabs] = useState(0);

  return (
    <Modal
      size="small"
      title="Add To"
      actions={[
        <Button
          color="default"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          No
        </Button>,
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddToInfluencersModalMain>
        <Tabs tabs={['Campaign', 'Survey']} value={tabs} onValue={setTabs} />
        {tabs === 0 && (
          <AddToInfluencerText>
            <Stack>
              <p>
                Are you sure you want to add selected #number Influencer to a{' '}
                <span>campaign</span>?
              </p>
              <Input
                type="select"
                label="Campaign"
                placeholder="Please Select"
                value={state.campaign}
                onValue={(campaign) => setState({ ...state, campaign })}
              />
            </Stack>
          </AddToInfluencerText>
        )}
        {tabs === 1 && (
          <AddToInfluencerText>
            <Stack>
              <p>
                Are you sure you want to add selected #number Influencer to a{' '}
                <span>survey</span>?
              </p>
              <Input
                type="select"
                label="Survey"
                placeholder="Please Select"
                value={state.survey}
                onValue={(survey) => setState({ ...state, survey })}
              />
            </Stack>
          </AddToInfluencerText>
        )}
      </AddToInfluencersModalMain>
    </Modal>
  );
};

export default AddToInfluencerModal;
