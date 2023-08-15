import styled from '@emotion/styled';

export const SellProperyModalMain = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 36px;
`;

export const PropertyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 180px;
`;
export const PropertyImage = styled.img`
  width: 180px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
export const PropertyTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #2d3779;
  max-width: 180px;
  white-space: normal;
  text-align: left;
`;
export const PropertyAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #7e839f;
  max-width: 180px;
  white-space: normal;
  text-align: left;
`;
export const PropertyAddresSmall = styled.img`
  width: 20px;
  height: 20px;
`;
export const ProperyNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PropertyNumbersInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
export const PropertyNumbersInfoNumber = styled.div`
  display: grid;
  font-size: 14px;
  font-weight: 500;
  color: #a7a9b6;
  text-align: left;
`;
export const PropertyValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #448dc9;
`;
export const PropertyGraphNinputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
`;
export const PropertyFinal = styled.div`
  display: grid;
  gap: 16px;
`;
export const PropertyFinalItem = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #a7a9b6;
`;
export const PropertyFinalValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #448dc9;
`;

export const PropertyGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  max-width: 200px;

  .PropertyGraphContainer {
    max-width: 200px;
  }
`;
