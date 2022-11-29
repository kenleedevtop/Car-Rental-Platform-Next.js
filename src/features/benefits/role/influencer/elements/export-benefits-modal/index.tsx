import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportBenefitsModalProps } from 'features/benefits/role/influencer/elements/export-benefits-modal/types';
import { ExportBenefitsModalMain } from 'features/benefits/role/influencer/elements/export-benefits-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportBenefitsModal = ({
  onClose,
  ...props
}: TExportBenefitsModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    company: false,
    category: false,
    location: false,
    link: false,
    benefit: false,
  });

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
      <ExportBenefitsModalMain columns={2}>
        <Checkbox
          color="secondary"
          label="All"
          size="large"
          value={state.all}
          onValue={(all) => setState({ ...state, all })}
        />
        <Checkbox
          color="secondary"
          label="Selected"
          size="large"
          value={state.selected}
          onValue={(selected) => setState({ ...state, selected })}
        />
        <Checkbox
          color="secondary"
          label="Company"
          size="large"
          value={state.company}
          onValue={(company) => setState({ ...state, company })}
        />
        <Checkbox
          color="secondary"
          label="Category"
          size="large"
          value={state.category}
          onValue={(category) => setState({ ...state, category })}
        />
        <Checkbox
          color="secondary"
          label="Location"
          size="large"
          value={state.location}
          onValue={(location) => setState({ ...state, location })}
        />
        <Checkbox
          color="secondary"
          label="Link"
          size="large"
          value={state.link}
          onValue={(link) => setState({ ...state, link })}
        />
        <Checkbox
          color="secondary"
          label="Benefit"
          size="large"
          value={state.benefit}
          onValue={(benefit) => setState({ ...state, benefit })}
        />
      </ExportBenefitsModalMain>
    </Modal>
  );
};

export default ExportBenefitsModal;
