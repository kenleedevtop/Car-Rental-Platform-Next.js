import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/role/admin/elements/export-finance-modal/types';
import { ExportFinanceModalMain } from 'features/finance/role/admin/elements/export-finance-modal/styles';
import { Button, Checkbox } from 'components/ui';
import { Stack } from 'components/system';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  const [state, setState] = useState({
    costAll: false,
    costSelected: false,
    payments: false,
    withdrawals: false,
    revenueAll: false,
    revenueSelected: false,
    pending: false,
    received: false,
  });

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="small"
      title="Do you want to export:"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Export
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <Tabs tabs={['Cost', 'Revenue']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <ExportFinanceModalMain columns={2}>
            <Checkbox
              color="secondary"
              label="All"
              size="large"
              value={state.costAll}
              onValue={(costAll) => setState({ ...state, costAll })}
            />
            <Checkbox
              color="secondary"
              label="Selected"
              size="large"
              value={state.costSelected}
              onValue={(costSelected) => setState({ ...state, costSelected })}
            />
            <Checkbox
              color="secondary"
              label="Payments"
              size="large"
              value={state.payments}
              onValue={(payments) => setState({ ...state, payments })}
            />
            <Checkbox
              color="secondary"
              label="Withdrawals"
              size="large"
              value={state.withdrawals}
              onValue={(withdrawals) => setState({ ...state, withdrawals })}
            />
          </ExportFinanceModalMain>
        )}
        {tab === 1 && (
          <ExportFinanceModalMain columns={2}>
            <Checkbox
              color="secondary"
              label="All"
              size="large"
              value={state.revenueAll}
              onValue={(revenueAll) => setState({ ...state, revenueAll })}
            />
            <Checkbox
              color="secondary"
              label="Selected"
              size="large"
              value={state.revenueSelected}
              onValue={(revenueSelected) =>
                setState({ ...state, revenueSelected })
              }
            />
            <Checkbox
              color="secondary"
              label="Pending"
              size="large"
              value={state.pending}
              onValue={(pending) => setState({ ...state, pending })}
            />
            <Checkbox
              color="secondary"
              label="Received"
              size="large"
              value={state.received}
              onValue={(received) => setState({ ...state, received })}
            />
          </ExportFinanceModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default ExportFinanceModal;
