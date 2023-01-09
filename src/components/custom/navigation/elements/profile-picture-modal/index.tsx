import React from 'react';
import { Modal } from 'components/custom';
import { TProfilePicture } from 'components/custom/navigation/elements/profile-picture-modal/types';
import {
  ProfilePictureMain,
  ProfileUpload,
  ProfilePicture,
  ProfileZoom,
} from 'components/custom/navigation/elements/profile-picture-modal/styles';
import { Button } from 'components/ui';
import { Stack } from 'components/system';
import Slider from 'components/ui/slider';
import { UploadIcon } from 'components/svg';

const ProfilePictureModal = ({ onClose, ...props }: TProfilePicture) => {
  const handleFile = async () => {};

  return (
    <Modal
      size="small"
      title="Profile Picture"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Save
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ProfilePictureMain>
          <ProfileUpload onClick={handleFile}>
            <UploadIcon />
            Upload image
          </ProfileUpload>
          <ProfilePicture src="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg" />
          <ProfileZoom>
            <Slider />
          </ProfileZoom>
        </ProfilePictureMain>
      </Stack>
    </Modal>
  );
};

export default ProfilePictureModal;
