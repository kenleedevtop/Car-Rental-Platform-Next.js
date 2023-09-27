import React, { Children } from 'react';
import { Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/applications/role/admin/elements/booking-overview-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ChangePasswordModal = ({
  onClose,
  car,
  ...props
}: TChangePasswordModalProps) => {
  return (
    <Modal
      size="medium"
      title="Booking Overview"
      actions={Children.toArray([
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Close
        </Button>,
      ])}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ChangePasswordModalMain>
          <Input
            type="text"
            label="User"
            placeholder="Please Select"
            value={car.owner.firstName + ' ' + car.owner.lastName}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Supercar"
            placeholder="Please Select"
            value={car.car.name}
            onValue={() => { }}
          />
          <Input
            type="date"
            label="Start Date"
            placeholder="Please Select"
            value={car.from}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Year"
            placeholder="Please Select"
            value={car.from.split('-')[0]}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Shares"
            placeholder="Please Enter"
            value={car.share.count}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Used Days"
            placeholder="Please Enter"
            value={car.share.reservedDays}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Reserved Days"
            placeholder="Please Select"
            value={car.share.reservedDays}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Remaining Days"
            placeholder="Please Select"
            value={car.share.availableDays}
            onValue={() => { }}
            />
        </ChangePasswordModalMain>
      </Stack>
    </Modal>
  );
}

export default ChangePasswordModal;
