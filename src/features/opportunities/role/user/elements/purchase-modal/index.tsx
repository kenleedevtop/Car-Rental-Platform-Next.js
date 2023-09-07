import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  PaymentImage,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import FinaceAPI from 'api/finance';
import { formatPrice } from 'utilities/formatPrice';
import { useSnackbar } from 'hooks';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  const { push } = useSnackbar();

  const [quantity, setQuantity] = useState<any>(null);
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('EUR');

  useEffect(() => {
    async function fetchConfig() {
      if (quantity) {
        try {
          const config = await FinaceAPI.getConfig(quantity.value);
          setAmount(config.unitAmount);
          setCurrency(config.currency);
        } catch (error) {
          push('Something went wrong!', { variant: 'error' });
        }
      }
    }
    fetchConfig();
  }, [quantity]);

  const handleCheckout = async () => {
    try {
      const data = await FinaceAPI.createCheckoutSession({
        quantity: quantity.value,
      });
      window.open(data.url, '_blank', 'noopener,noreferrer');
      onClose();
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  return (
    <Modal
      size="small"
      title="Purchase"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleCheckout}
        >
          Purchase {formatPrice(amount, currency, 1)}
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain>
        <Input
          type="select"
          label="Tokens"
          value={quantity}
          onValue={(quantity) => setQuantity(quantity)}
          placeholder="Please Select"
          options={[
            {
              value: 1,
              label: '1 Token - EUR 0,99',
            },
            {
              value: 5,
              label: '5 Tokens - EUR 2,99 (40% Discount)',
            },
            {
              value: 10,
              label: '10 Tokens - EUR 5,49 (45% Discount)',
            },
            {
              value: 25,
              label: '25 Tokens - EUR 12,49 (50% Discount)',
            },
            {
              value: 50,
              label: '50 Tokens - EUR 19,99 (60% Discount)',
            },
            {
              value: 100,
              label: '100 Tokens - EUR 29,99 (70% Discount)',
            },
          ]}
        />
        <PaymentImage key={0} src="/static/assets/images/stripe.png" />
        {/* BASED ON SELECT OPTION HERE WILL DISPLAY DIFFERENT PAYMENT METHOD API  */}
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
