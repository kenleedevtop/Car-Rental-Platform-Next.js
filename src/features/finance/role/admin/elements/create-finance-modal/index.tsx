import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TCreateFinanceModalProps } from 'features/finance/role/admin/elements/create-finance-modal/types';
import { CreateFinanceModalMain } from 'features/finance/role/admin/elements/create-finance-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { Stack } from 'components/system';

const CreateFinanceModal = ({
  onClose,
  ...props
}: TCreateFinanceModalProps) => {
  const [state, setState] = useState({
    cost: '',
    amountC: null,
    currencyC: null,
    typeC: '',
    dateC: null,
    subjectC: null,
    vendor: null,
    balanceChange: null,
    project: '',
    emailC: null,
    statusC: null,

    revenue: '',
    amountR: null,
    currencyR: null,
    typeR: '',
    dateR: null,
    subjectR: null,
    emailR: '',
    statusR: null,
  });

  const [tab, setTab] = useState(0);

  // const handleFile = async () => {};

  return (
    <Modal
      size="medium"
      title={tab === 0 ? 'Add Cost' : 'Add Revenue'}
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '500px' }}>
        <Tabs tabs={['Cost', 'Revenue']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <CreateFinanceModalMain columns={2}>
            <Input
              type="text"
              label="Cost"
              placeholder="Please Enter"
              value={state.cost}
              onValue={(cost) => setState({ ...state, cost })}
            />
            <InputGroup
              label="Amount"
              inputRatio="100px 1fr"
              elements={[
                {
                  value: state.currencyC,
                  onValue: (currencyC) => setState({ ...state, currencyC }),
                  type: 'select',
                  placeholder: 'CHF',
                  options: [
                    {
                      value: 'eur',
                      label: 'EUR',
                    },
                    {
                      value: 'usd',
                      label: 'USD',
                    },
                    {
                      value: 'chf',
                      label: 'CHF',
                    },
                  ],
                },
                {
                  value: state.amountC,
                  onValue: (amountC) => setState({ ...state, amountC }),
                  type: 'text',
                  placeholder: '18',
                },
              ]}
            />
            <Input
              type="select"
              label="Type"
              placeholder="Please Enter"
              value={state.typeC}
              onValue={(typeC) => setState({ ...state, typeC })}
            />
            <Input
              type="date"
              label="Date"
              placeholder="Please Select"
              value={state.dateC}
              onValue={(dateC) => setState({ ...state, dateC })}
            />
            <Input
              type="select"
              label="Subject"
              placeholder="Please Select"
              value={state.subjectC}
              onValue={(subjectC) => setState({ ...state, subjectC })}
            />
            <Input
              type="select"
              label="Vendor"
              placeholder="Please Select"
              value={state.vendor}
              onValue={(vendor) => setState({ ...state, vendor })}
            />
            <Input
              type="select"
              label="Balance Change"
              placeholder="Please Select"
              value={state.balanceChange}
              onValue={(balanceChange) => setState({ ...state, balanceChange })}
            />
            <Input
              type="select"
              label="Project"
              placeholder="Please Select"
              value={state.project}
              onValue={(project) => setState({ ...state, project })}
            />
            <Input
              type="select"
              label="Email"
              placeholder="Please Select"
              value={state.emailC}
              onValue={(emailC) => setState({ ...state, emailC })}
            />
            <Input
              type="select"
              label="Status"
              placeholder="Please Select"
              value={state.statusC}
              onValue={(statusC) => setState({ ...state, statusC })}
            />
          </CreateFinanceModalMain>
        )}
        {tab === 1 && (
          <CreateFinanceModalMain columns={2}>
            <Input
              type="text"
              label="Revenue"
              placeholder="Please Enter"
              value={state.revenue}
              onValue={(revenue) => setState({ ...state, revenue })}
            />
            <InputGroup
              label="Amount"
              inputRatio="100px 1fr"
              elements={[
                {
                  value: state.currencyR,
                  onValue: (currencyR) => setState({ ...state, currencyR }),
                  type: 'select',
                  placeholder: 'CHF',
                  options: [
                    {
                      value: 'eur',
                      label: 'EUR',
                    },
                    {
                      value: 'usd',
                      label: 'USD',
                    },
                    {
                      value: 'chf',
                      label: 'CHF',
                    },
                  ],
                },
                {
                  value: state.amountR,
                  onValue: (amountR) => setState({ ...state, amountR }),
                  type: 'text',
                  placeholder: '18',
                },
              ]}
            />
            <Input
              type="select"
              label="Type"
              placeholder="Please Select"
              value={state.typeR}
              onValue={(typeR) => setState({ ...state, typeR })}
            />
            <Input
              type="date"
              label="Date"
              placeholder="Please Select"
              value={state.dateR}
              onValue={(dateR) => setState({ ...state, dateR })}
            />
            <Input
              type="select"
              label="Subject"
              placeholder="Please Select"
              value={state.subjectR}
              onValue={(subjectR) => setState({ ...state, subjectR })}
            />
            <Input
              type="select"
              label="Email"
              placeholder="Please Select"
              value={state.emailR}
              onValue={(emailR) => setState({ ...state, emailR })}
            />
            <Input
              type="select"
              label="Status"
              placeholder="Please Select"
              value={state.statusR}
              onValue={(statusR) => setState({ ...state, statusR })}
            />
          </CreateFinanceModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreateFinanceModal;
