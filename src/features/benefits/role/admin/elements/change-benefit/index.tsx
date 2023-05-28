import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TChangeBenefitModalProps } from 'features/benefits/role/admin/elements/change-benefit/types';
import { ChangeBenefitModalMain } from 'features/benefits/role/admin/elements/change-benefit/styles';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { BenefitsAPI, LocationAPI } from 'api';
import { EditIcon } from 'components/svg';
import { useModal } from 'hooks';
import ConfirmChangeBenefitModal from '../confirm-change-benefit-modal';

const ChangeBenefitModal = ({
  onClose,
  data,
  ...props
}: TChangeBenefitModalProps) => {
  const [state, setState] = useState({
    benefitPartnershipId: data.benefitPartnershipId,
    benefitCompanyLink: data.benefitCompanyLink,
    description: data.description,
    benefitCategoryId: data.benefitCategoryId,
    benefitLocations: data.benefitsLocations,
  });

  useEffect(() => {
    setState({
      ...state,
      benefitLocations: data.benefitLocations.map((x: any) => [
        x.locationId,
      ])[0],
    });
  }, []);

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

  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  useEffect(() => {
    getCompanies();
    getLocations();
    getCategories();
  }, []);

  const [ccbModal, openCcbModal, closeCcbModal] = useModal(false);

  return (
    <Modal
      size="medium"
      title={
        <div>
          Benefit #{data.id}
          <EditIcon
            style={
              disabled
                ? { cursor: 'pointer', color: '#7E839F' }
                : { cursor: 'pointer', color: '#448DC9' }
            }
            onClick={handleDisabled}
          />
        </div>
      }
      actions={[
        disabled ? (
          ''
        ) : (
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={openCcbModal}
          >
            Confirm
          </Button>
        ),
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ChangeBenefitModalMain columns={2}>
          <Input
            disabled={disabled}
            type="select"
            label="Company Name"
            placeholder="Please Enter"
            value={state.benefitPartnershipId}
            onValue={({ value }) =>
              setState({ ...state, benefitPartnershipId: value })
            }
            options={companies}
          />
          <Input
            disabled={disabled}
            type="text"
            label="Company website"
            placeholder="Please Enter"
            value={state.benefitCompanyLink}
            onValue={(benefitCompanyLink) =>
              setState({ ...state, benefitCompanyLink })
            }
          />
          <Input
            disabled={disabled}
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
            disabled={disabled}
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
              disabled={disabled}
              multiline
              rows={3}
              type="text"
              label="Benefit"
              placeholder="Please Enter"
              value={state.description}
              onValue={(description) => setState({ ...state, description })}
            />
          </GridCell>
        </ChangeBenefitModalMain>
      </Stack>
      {ccbModal && (
        <ConfirmChangeBenefitModal
          data={state}
          id={data.id}
          onClose={closeCcbModal}
        />
      )}
    </Modal>
  );
};

export default ChangeBenefitModal;
