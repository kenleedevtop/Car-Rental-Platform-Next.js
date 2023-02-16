import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TSuggestionInfoModalProps } from 'features/benefits/role/admin/elements/suggestion-info/types';
import { SuggestionInfoModalMain } from 'features/benefits/role/admin/elements/suggestion-info/styles';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';

const SuggestionInfoModal = ({
  onClose,
  ...props
}: TSuggestionInfoModalProps) => {
  const [state, setState] = useState({
    name: '',
    website: '',
    argument: '',
    desiredOutcome: '',
    status: '',
  });

  return (
    <Modal
      size="medium"
      title="Suggestion by <username> <date>"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Confirm
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <SuggestionInfoModalMain columns={2}>
          <Input
            type="text"
            label="Company Name"
            placeholder="Please Enter"
            value={state.name}
            onValue={(name) => setState({ ...state, name })}
          />
          <Input
            type="text"
            label="Company website"
            placeholder="Please Enter"
            value={state.website}
            onValue={(website) => setState({ ...state, website })}
          />
          <Input
            multiline
            rows={3}
            type="text"
            label="Argument"
            value={state.argument}
            onValue={(argument) => setState({ ...state, argument })}
          />
          <Input
            multiline
            rows={3}
            type="text"
            label="Desired Outcome"
            value={state.desiredOutcome}
            onValue={(desiredOutcome) => setState({ ...state, desiredOutcome })}
          />
          <GridCell columnSpan={2}>
            <Input
              multiline
              rows={3}
              type="text"
              label="Status"
              value={state.status}
              onValue={(status) => setState({ ...state, status })}
            />
          </GridCell>
        </SuggestionInfoModalMain>
      </Stack>
    </Modal>
  );
};

export default SuggestionInfoModal;
