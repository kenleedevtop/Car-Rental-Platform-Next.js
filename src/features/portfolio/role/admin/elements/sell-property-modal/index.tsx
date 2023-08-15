import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TSellProperyModalProps } from 'features/portfolio/role/investor/elements/sell-property-modal/types';
import {
  SellProperyModalMain,
  PropertyInfoContainer,
  PropertyImage,
  PropertyTitle,
  PropertyAddress,
  PropertyAddresSmall,
  PropertyGraphNinputs,
  ProperyNumbersContainer,
  PropertyNumbersInfo,
  PropertyNumbersInfoNumber,
  PropertyValue,
  PropertyFinal,
  PropertyFinalItem,
  PropertyFinalValue,
  PropertyGraphContainer,
} from 'features/portfolio/role/investor/elements/sell-property-modal/styles';
import { Button, Input } from 'components/ui';
import { BubbleChart, PieChart } from 'components/csr';
import { Stack } from 'components/system';
import Theme from 'theme';

const SellProperyModal = ({ onClose, ...props }: TSellProperyModalProps) => {
  const [state, setState] = useState({
    squareMetersCount: null,
    pricePerSquareMeter: null,
  });

  return (
    <Modal
      size="medium"
      title="Sell Property Name?"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create Order
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <SellProperyModalMain>
        <Stack>
          <PropertyNumbersInfo>
            <PropertyNumbersInfoNumber>
              <PropertyValue>2.45</PropertyValue>
              Total Square Meters
            </PropertyNumbersInfoNumber>
            <PropertyNumbersInfoNumber>
              <PropertyValue>2.45</PropertyValue>
              Available Square Meters
            </PropertyNumbersInfoNumber>
            <PropertyNumbersInfoNumber>
              <PropertyValue>0.00</PropertyValue>
              Square Meters on Sale
            </PropertyNumbersInfoNumber>
          </PropertyNumbersInfo>
          <PropertyGraphNinputs>
            <PropertyGraphContainer>
              <PieChart
                labels={['Founders', 'Investor 1', 'Investor 2', 'Investor 3']}
                data={[40, 30, 20, 10]}
              />
            </PropertyGraphContainer>
            <Stack>
              <Input
                type="text"
                label="Square Meters Counts"
                value={state.squareMetersCount}
                onValue={() => {}}
              />
              <Input
                type="text"
                label="Price per Square Meter"
                value={state.pricePerSquareMeter}
                onValue={() => {}}
              />
            </Stack>
          </PropertyGraphNinputs>
          <PropertyFinal>
            <PropertyFinalItem>
              Success Fee
              <PropertyFinalValue>€2.45</PropertyFinalValue>
            </PropertyFinalItem>
            <PropertyFinalItem>
              Income from Selling
              <PropertyFinalValue>€2.45</PropertyFinalValue>
            </PropertyFinalItem>
          </PropertyFinal>
        </Stack>
      </SellProperyModalMain>
    </Modal>
  );
};

export default SellProperyModal;
