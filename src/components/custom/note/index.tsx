import React from 'react';
import { InfoIcon } from 'components/svg';
import { TNote } from 'components/custom/note/types';
import { NoteMain, NoteText } from 'components/custom/note/style';

const Note = ({ text, ...props }: TNote) => (
  <NoteMain {...props}>
    <InfoIcon />
    <NoteText>{text}</NoteText>
  </NoteMain>
);

export default Note;
