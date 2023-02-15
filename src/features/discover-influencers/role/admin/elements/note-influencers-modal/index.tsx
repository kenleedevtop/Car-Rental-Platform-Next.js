import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TNoteInfluencersModalProps } from 'features/discover-influencers/role/admin/elements/note-influencers-modal/types';
import {
  NoteInfluencersModalMain,
  CommentSection,
} from 'features/discover-influencers/role/admin/elements/note-influencers-modal/styles';
import { Button, Input } from 'components/ui';
import { InputLabel } from 'components/ui/input/styles';
import { SingleComment } from 'features/discover-influencers/role/admin/elements/note-influencers-modal/elements';

const NoteInfluencersModal = ({
  onClose,
  ...props
}: TNoteInfluencersModalProps) => {
  const [label, setLabel] = useState<any>([]);
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [tabs, setTabs] = useState(0);

  const [options, setOptions] = useState([
    {
      label: 'Label',
      value: 'label',
    },
  ]);

  const handleLabel = (v: any) => {
    setLabel(v);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setComments((prev) => [...prev, input]);
      setInput('');
    }
  };

  const edit = (index: number, value: string) => {
    setComments((prev) => prev.map((x, id) => (id === index ? value : x)));
  };

  const remove = (index: number) => {
    setComments((prev) => prev.filter((x, id) => id !== index));
  };

  const handleNewTag = (v: any) => {
    setOptions((x) => [...x, v]);
    setLabel((x: any) => [...x, v]);
  };

  return (
    <Modal
      size="small"
      title="Note"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Close
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <NoteInfluencersModalMain style={{ height: '450px' }}>
        <Tabs tabs={['Comment', 'Label']} value={tabs} onValue={setTabs} />
        {tabs === 0 && (
          <>
            <Input
              type="text"
              label="Comment"
              multiline
              rows={3}
              placeholder="Write Comment"
              value={input}
              onValue={setInput}
              onKeyDown={handleKeyDown}
            />
            <InputLabel>Previous Comments</InputLabel>
            <CommentSection>
              {comments.map((x, index) => (
                <SingleComment
                  index={index}
                  onEdit={edit}
                  onDelete={remove}
                  value={x}
                />
              ))}
            </CommentSection>
          </>
        )}

        {tabs === 1 && (
          <Input
            type="multiselect"
            label="Label"
            multiline
            rows={3}
            placeholder="Please Select"
            value={label}
            onValue={handleLabel}
            onNewTag={handleNewTag}
            options={options}
          />
        )}
      </NoteInfluencersModalMain>
    </Modal>
  );
};

export default NoteInfluencersModal;