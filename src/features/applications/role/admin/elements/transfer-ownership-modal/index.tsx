import React, { useState, useEffect } from 'react';
import { Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/applications/role/admin/elements/transfer-ownership-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { ApplicationAPI, CarAPI, ShareAPI, UsersAPI } from 'api';
import { useSnackbar } from 'hooks';
import { ICar } from 'api/cars/types';
import { DApplicationsFilters } from 'features/applications/data';
import { TInputPropsOption, TInputValidator } from 'components/ui/input/types';
import { DUsersFilters } from 'features/users/data';

const ChangePasswordModal = ({
  onClose,
  ...props
}: TChangePasswordModalProps) => {
  const [state, setState] = useState({
    newPassword: '',
  });
  const { push } = useSnackbar();

  const [car, setCar] = useState({ value: 0, label: '' });
  const [carOptions, setCarOptions] = useState<TInputPropsOption[]>([]);

  const [buyer, setBuyer] = useState({ value: 0, label: '' });
  const [buyerOptions, setBuyerOptions] = useState<TInputPropsOption[]>([]);

  const [seller, setSeller] = useState({ value: 0, label: '' });
  const [sellerOptions, setSellerOptions] = useState<TInputPropsOption[]>([]);

  const [shares, setShares] = useState({ value: 0, label: '' });
  const [sharesoptions, setSharesOptions] = useState<TInputPropsOption[]>([]);

  const [totalShares, setTotalShares] = useState<any>();

  const [remainingDays, setRemainingDays] = useState({ value: 0, label: '' });
  const [totalRemainingDays, setTotalRemainingDays] = useState<any>()


  const [reservedDays, setReservedDays] = useState({ value: 0, label: '' });
  const [transferDate, setTransferDate] = useState<Date>();

  const [filter, setFilter] = useState<any>(DApplicationsFilters());
  const [userFilters, setUserFilter] = useState<any>(DUsersFilters());


  const getAllCars = async (search: string, status: string): Promise<any> => {
    try {
      const response = await CarAPI.getAll(search, status);
      if (response) {
        return response;
      }
      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  const getApplications = async () => {
    try {
      const response = await ApplicationAPI.getApplications({ ...filter });
      if (response) {
        return response;
      }
      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  const handleCarSelected = async (e: any) => {
    setCar(e);
    if (e) {
      const ownedApplications = await ApplicationAPI.getApplicationsByCarID(e.value);
      const options = ownedApplications.map((app: any) => ({
        value: app.owner.id,
        label: app.owner.firstName + ' ' + app.owner.lastName
      }));

      setSellerOptions(options);
      setSeller({ value: 0, label: '' });
      setBuyer({ value: 0, label: '' });
      setShares({ value: 0, label: '' });
      setSharesOptions([]);

      setTotalShares(0);

      setRemainingDays({ value: 0, label: '' });
      setTotalRemainingDays(0);

      setReservedDays({ value: 0, label: '' });
      setBuyerOptions([]);
    }
  }

  const handleSellerSelected = async (e: any) => {
    setSeller(e);
    if (e) {
      const allUsers = await getAllUsers();
      const allUserOptions = allUsers.map((user: any) => ({
        value: user.id,
        label: user.firstName + ' ' + user.lastName
      }));

      const newBuyerOptions = allUserOptions.filter((buyer: any) => {
        return buyer.value != e.value;
      });

      setBuyer({ value: 0, label: '' });
      setBuyerOptions(newBuyerOptions);
      if (car.value) {
        const share = await ShareAPI.getShareByCarIdUserId(car.value, e.value);

        setTotalShares(share.count);
        setTotalRemainingDays(share.availableDays);
        const options = [];
        for (let i = 1; i <= share.count; i++) {
          options.push({ label: i.toString(), value: i });
        }

        setSharesOptions(options);

        setShares({ value: share.count, label: share.count.toString() });
        setReservedDays({ value: share.reservedDays, label: share.reservedDays.toString() });
        setRemainingDays({ value: share.availableDays, label: share.availableDays.toString() });
      }
    }
  }

  const handleSharesSelected = async (e: any) => {
    setShares(e);
    setRemainingDays({
      value: Math.floor(totalRemainingDays / totalShares * e.value),
      label: Math.floor(totalRemainingDays / totalShares * e.value).toString()
    });
  }

  const refresh = async () => {
    const allCars = await getAllCars('', '');
    const applications = await getApplications();
    const ownedCars = allCars.filter((car: any) => {
      const application = applications.find((app: any) => app.carId === car.id);
      return application && application.status === "Ownership";
    });

    const carOptions = ownedCars.map((car: any) => ({
      value: car.id,
      label: car.name
    }));

    setCarOptions(carOptions);
  }

  const transferOwnerShip = async () => {
    try {
      if (car.value && seller.value && buyer.value) {
        const data = {
          carId: car.value,
          sellerId: seller.value,
          buyerId: buyer.value,
          shares: shares.value,

        }
        const result = await ApplicationAPI.trasnferOwnership(data);
        onClose();
        push('Successfully transfered.', { variant: 'success' })
      }
    }
    catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  }

  const getAllUsers = async (): Promise<any> => {
    try {
      const response = await UsersAPI.getUsers({
        ...userFilters,
      });

      if (response) {
        return response;
      }
      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  useEffect(() => {
    refresh();
  }, []);


  return (
    <Modal
      size="medium"
      title="Transfer Ownership"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={transferOwnerShip}
        >
          Transfer
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ChangePasswordModalMain>
          <Input
            type="select"
            label="Supercar"
            placeholder="Please Select"
            value={car}
            options={carOptions}
            onValue={(e) => {
              handleCarSelected(e);
            }}
          />
          <Input
            type="select"
            label="Seller"
            placeholder="Please Select"
            value={seller}
            options={sellerOptions}
            onValue={(e) => { handleSellerSelected(e); }}
          />
          <Input
            type="select"
            label="Buyer"
            placeholder="Please Select"
            value={buyer}
            options={buyerOptions}
            onValue={(e) => { setBuyer(e); }}
          />
          <Input
            type="select"
            label="Shares"
            placeholder="Please Select"
            value={shares}
            options={sharesoptions}
            onValue={(e) => { handleSharesSelected(e); }}
          />
          <Input
            type="date"
            label="Transfer Date"
            placeholder="Please Select"
            value={transferDate}
            onValue={(e) => { setTransferDate(e) }}
          />
          <Input
            type="select"
            label="Remaining Days [Year]"
            placeholder="Please Select"
            value={remainingDays}
            onValue={() => { }}
          />
          <Input
            type="select"
            label="Reserved Days [Year]"
            placeholder="Please Select"
            value={reservedDays}
            onValue={() => { }}
          />
          <Input
            type="select"
            label="Remaining Days [Year]"
            placeholder="Please Select"
            value={remainingDays}
            onValue={() => { }}
          />
        </ChangePasswordModalMain>
      </Stack>
    </Modal>
  );

};
export default ChangePasswordModal;
