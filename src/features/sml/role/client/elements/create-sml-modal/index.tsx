import React, { useEffect, useState } from 'react';
import { CurrencyFeedback, Modal } from 'components/custom';
import { TAddSmlModalProps } from 'features/sml/role/client/elements/create-sml-modal/types';
import { AddSmlModalMain } from 'features/sml/role/client/elements/create-sml-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { useModal, useSnackbar } from 'hooks';
import { CreateSmlFinal } from 'features/sml/role/client/elements';
import { GridCell, Stack } from 'components/system';
import { DiseaseAreaAPI, SMLApi } from 'api';
import { useAppContext } from 'context';

const AddSmlModal = ({ refresh, onClose, ...props }: TAddSmlModalProps) => {
  const [state, setState] = useState<any>({
    client: null,
    subscription: null,
    platform: null,
    diseaseArea: null,
    aiAnalytics: null,
    currency: null,
    amount: '',
    additional: '',
  });
  const [loading, setLoading] = useState(false);
  const [diseaseArea, setDiseaseArea] = useState<any>([]);

  const [csfModal, openCsfModal, closeCsfModal] = useModal(false);

  const getDiseaseArea = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setDiseaseArea(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleNewTag = (v: any) => {
    setState({ ...state, diseaseAreas: [...state.diseaseAreas, v] });
  };

  useEffect(() => {
    getDiseaseArea();
  }, []);

  const { user } = useAppContext();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (
      user.client.id &&
      state.platform &&
      state.subscription &&
      state.aiAnalytics &&
      state.diseaseArea &&
      state.amount &&
      state.additional
    ) {
      setData({
        clientId: user.client.id,
        platforms: [state.platform.value] || [],
        subscriptionLength: state.subscription.value || null,
        monthlyTokens: state.aiAnalytics.value || null,
        diseaseAreas: [state.diseaseArea.value],
        budget: state.amount || null,
        smlDescription: state.additional || '',
      });
    }
  }, [state]);

  const { push } = useSnackbar();

  const createSML = async () => {
    try {
      await SMLApi.createSML(data);
      push('Successfully added SML report', { variant: 'success' });
    } catch {
      push('Something went wrong.', { variant: 'error' });
    }
  };

  return (
    <Modal
      size="medium"
      title="Create SML Report"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            createSML();
            refresh();
            onClose();
          }}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddSmlModalMain columns={2}>
        <Input
          type="select"
          label="Subscription"
          placeholder="Please Select"
          value={state.subscription}
          onValue={(subscription) => setState({ ...state, subscription })}
          options={[
            {
              value: 6,
              label: '6 Months',
            },
            {
              value: 12,
              label: '12 Months',
            },
          ]}
        />

        <Input
          type="select"
          label="Platform"
          placeholder="Please Select"
          value={state.platform}
          onValue={(platform) => setState({ ...state, platform })}
          options={[
            {
              value: 1,
              label: 'Instagram',
            },
          ]}
        />
        <Input
          type="select"
          label="Disease Area"
          placeholder="Please Select"
          value={state.diseaseArea}
          onSearch={debounce(getDiseaseArea, 250)}
          onValue={(input) => {
            setState({ ...state, diseaseArea: input });
          }}
          // onNewTag={handleNewTag}
          loading={loading}
          options={diseaseArea}
        />
        <Input
          type="select"
          label="AI Analytics"
          placeholder="Please Select"
          value={state.aiAnalytics}
          onValue={(aiAnalytics) => setState({ ...state, aiAnalytics })}
          options={[
            {
              value: 50,
              label: '50 Tokens',
            },
            {
              value: 100,
              label: '100 Tokens',
            },
          ]}
        />
        <Stack>
          <Input
            type="number"
            label="Budget"
            placeholder="Please Enter"
            startAdornment="CHF"
            value={state.amount}
            onValue={(amount) => setState({ ...state, amount })}
          />
          <CurrencyFeedback value={state.amount} />
        </Stack>
        <GridCell columnSpan={2}>
          <Input
            multiline
            rows={5}
            type="text"
            label="Additional Information"
            value={state.additional}
            onValue={(additional) => setState({ ...state, additional })}
          />
        </GridCell>
      </AddSmlModalMain>
      {csfModal && <CreateSmlFinal data={data} onClose={closeCsfModal} />}
    </Modal>
  );
};

export default AddSmlModal;
