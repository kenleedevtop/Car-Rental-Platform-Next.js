import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddSuggestionModalProps } from 'features/benefits/role/influencer/elements/add-suggestion-modal/types';
import { AddSuggestionModalMain } from 'features/benefits/role/influencer/elements/add-suggestion-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { BenefitsAPI } from 'api';
import { useSnackbar } from 'hooks';

const AddSuggestionModal = ({
  onClose,
  reload,
  ...props
}: TAddSuggestionModalProps) => {
  const [state, setState] = useState({
    partnershipName: '',
    partnershipLink: '',
    argumentDescription: '',
    outcomeDescription: '',
  });

  const [initialState, setInitialState] = useState({
    partnershipName: '',
    partnershipLink: '',
    argumentDescription: '',
    outcomeDescription: '',
  });

  const { push } = useSnackbar();

  const handleAddSuggestion = async () => {
    try {
      await BenefitsAPI.addSuggestion(state);
      push('Suggestion successfully added.', { variant: 'success' });
      setState(initialState);
    } catch {
      push("Suggestion couldn't be added.", { variant: 'error' });
    }
  };

  return (
    <Modal
      size="medium"
      title="Suggestion"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={async () => {
            handleAddSuggestion();
            reload();
            onClose();
          }}
        >
          Make Suggestion
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <AddSuggestionModalMain columns={2}>
          <Input
            type="text"
            label="Company Name"
            placeholder="Please Enter"
            value={state.partnershipName}
            onValue={(partnershipName) =>
              setState({ ...state, partnershipName })
            }
          />
          <Input
            type="text"
            label="Company website"
            placeholder="Please Enter"
            value={state.partnershipLink}
            onValue={(partnershipLink) =>
              setState({ ...state, partnershipLink })
            }
          />
          <Input
            multiline
            rows={3}
            type="text"
            label="Argument"
            value={state.argumentDescription}
            onValue={(argumentDescription) =>
              setState({ ...state, argumentDescription })
            }
          />
          <Input
            multiline
            rows={3}
            type="text"
            label="Desired outcome"
            value={state.outcomeDescription}
            onValue={(outcomeDescription) =>
              setState({ ...state, outcomeDescription })
            }
          />
        </AddSuggestionModalMain>
      </Stack>
    </Modal>
  );
};

export default AddSuggestionModal;
