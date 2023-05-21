import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TAddBenefitModalProps } from 'features/benefits/role/admin/elements/add-benefit/types';
import { AddBenefitModalMain } from 'features/benefits/role/admin/elements/add-benefit/styles';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { ConfirmAddBenefitModal } from 'features/benefits/role/admin/elements';
import { useModal } from 'hooks';
import { BenefitsAPI, CompanyAPI, LocationAPI } from 'api';

const AddBenefitModal = ({ onClose, ...props }: TAddBenefitModalProps) => {
  const [state, setState] = useState({
    benefitPartnershipId: -1,
    benefitCompanyLink: '',
    description: '',
    benefitCategoryId: -1,
    benefitLocations: [-1],
  });

  const [initialState, setInitialState] = useState({
    benefitPartnershipId: -1,
    benefitCompanyLink: '',
    description: '',
    benefitCategoryId: -1,
    benefitLocations: [-1],
  });

  const [search, setSearch] = useState('');

  const handleSearch = (value: any) => {
    setSearch(value);
  };

  const [cabModal, openCabModal, closeCabModal] = useModal(false);

  const [categories, setCategories] = useState<any>([]);

  const getCategories = async () => {
    const result = await BenefitsAPI.getBenefitsCategories();

    setCategories(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const [companies, setCompanies] = useState<any>([]);

  const getCompanies = async () => {
    const { result } = await BenefitsAPI.getBenefitsPartnerships();

    setCompanies(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const [locations, setLocations] = useState<any>([]);

  const getLocations = async () => {
    const { result } = await LocationAPI.getAll();

    setLocations(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  useEffect(() => {
    getCompanies();
    getCategories();
    getLocations();
  }, []);

  return (
    <Modal
      size="medium"
      title="Add Benefit"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={openCabModal}
        >
          Confirm
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <AddBenefitModalMain columns={2}>
          <Input
            type="select"
            label="Company Name"
            placeholder="Please Enter"
            value={state.benefitPartnershipId}
            // inputValue={search}
            // onInputChange={(input: any) => handleSearch(input)}
            onValue={({ value }) =>
              setState({ ...state, benefitPartnershipId: value })
            }
            options={companies}
          />
          <Input
            type="text"
            label="Company website"
            placeholder="Please Enter"
            value={state.benefitCompanyLink}
            onValue={(benefitCompanyLink) =>
              setState({ ...state, benefitCompanyLink })
            }
          />
          <Input
            type="select"
            label="Category"
            placeholder="Please Select"
            value={state.benefitCategoryId}
            onValue={({ value }) =>
              setState({ ...state, benefitCategoryId: value })
            }
            options={categories}
          />
          <Input
            type="select"
            label="Location"
            placeholder="Please Select"
            value={
              state.benefitLocations
                ? state.benefitLocations[state.benefitLocations.length - 1]
                : null
            }
            onValue={({ value }) =>
              setState({ ...state, benefitLocations: [value] })
            }
            options={locations}
          />
          <GridCell columnSpan={2}>
            <Input
              multiline
              rows={3}
              type="text"
              label="Benefit"
              placeholder="Please Enter"
              value={state.description}
              onValue={(description) => setState({ ...state, description })}
            />
          </GridCell>
        </AddBenefitModalMain>
      </Stack>
      {cabModal && (
        <ConfirmAddBenefitModal
          value={state}
          onClose={() => {
            closeCabModal();
            setState(initialState);
          }}
        />
      )}
    </Modal>
  );
};

export default AddBenefitModal;
