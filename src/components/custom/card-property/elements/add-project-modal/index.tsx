import React, { useState } from 'react';
import { Modal, RichTextEditor, Tabs } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  AddProjectHeadline,
  AddProjectDocumentPlaceholder,
  RTEContainer,
  AddProjectContainer,
  AddProjectSingleModalMain,
} from 'components/custom/card-property/elements/add-project-modal/style';
import { Button, Input, Label } from 'components/ui';
import { UploadIcon, VerticalDotsIcon } from 'components/svg';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  // const [state, setState] = useState();

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="medium"
      title="Edit Project"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Add
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddProjectContainer>
        <Tabs
          tabs={['Overview', 'Documents', 'AAA']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <AddProjectModalMain>
            <Input
              type="text"
              label="Name"
              value=""
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="select"
              label="Location"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="text"
              label="Total Shares"
              value=""
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="text"
              label="Available Shares"
              value=""
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="text"
              label="Share Price"
              value=""
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="select"
              label="Address"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Bedrooms"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Bathrooms"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Size"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Construction Year"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Start Date"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Highlights"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Status"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Owners"
              value=""
              onValue={() => {}}
              placeholder="Please Select"
            />
            <RTEContainer>
              <Label style={{ color: '#7E839F' }}>Info</Label>
              <RichTextEditor />
            </RTEContainer>
          </AddProjectModalMain>
        )}
        {tab === 1 && (
          <AddProjectSingleModalMain>
            <AddProjectHeadline>
              Images
              <UploadIcon />
            </AddProjectHeadline>
            <AddProjectDocumentPlaceholder>
              IMG_01.png
              {/* <Checkbox label="Mark as Thumbnail" /> */}
              <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
            <AddProjectDocumentPlaceholder>
              IMG_02.png
              {/* <Checkbox label="Mark as Thumbnail" /> */}
              <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
            <AddProjectHeadline>
              Documents <UploadIcon />
            </AddProjectHeadline>
            <AddProjectDocumentPlaceholder>
              Rooms.pdf <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
            <AddProjectDocumentPlaceholder>
              Floor_plan.pdf <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
          </AddProjectSingleModalMain>
        )}
      </AddProjectContainer>
    </Modal>
  );
};

export default ExportFinanceModal;
